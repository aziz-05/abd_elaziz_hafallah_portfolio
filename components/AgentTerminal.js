import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// A scripted replay of a RootCause investigation: plan → execute → verify,
// with the human approval gate in the middle. Loops forever.
const script = [
  { t: 'cmd', text: 'rootcause investigate INC-2041' },
  { t: 'dim', text: 'alert  orders-api p95 latency > 2s  (firing 3m)' },
  { t: 'step', tag: 'triage', color: 'violet', text: 'scoping blast radius → orders-api, payments-api' },
  { t: 'step', tag: 'diagnose', color: 'cyan', text: 'querying prometheus · jaeger (read-only)' },
  { t: 'sub', text: '↳ slow span: payments-api POST /charge  1.84s' },
  { t: 'sub', text: '↳ db pool: 10/10 in use, 37 waiting' },
  { t: 'step', tag: 'plan', color: 'cyan', text: 'root cause: connection-pool exhaustion' },
  { t: 'sub', text: '↳ propose: restart payments-api (write)' },
  { t: 'gate', tag: 'approval', text: 'write action parked · awaiting human…' },
  { t: 'ok', text: '✓ approved by @oncall · recorded in approvals' },
  { t: 'step', tag: 'execute', color: 'amber', text: 'rollout restart deploy/payments-api (scoped RBAC)' },
  { t: 'step', tag: 'verify', color: 'lime', text: 'p95 180ms · error rate 0.0%  ✓ healed' },
  { t: 'done', text: '✔ postmortem saved · 14 events · 6 tool calls audited' },
];

const blink = keyframes`50% { opacity: 0; }`;
const glow = keyframes`
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
`;

const Frame = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(140deg, rgba(167, 139, 250, 0.7), rgba(34, 211, 238, 0.25) 40%, rgba(255, 255, 255, 0.06) 70%, rgba(163, 230, 53, 0.45));
  box-shadow: 0 50px 120px -30px rgba(139, 92, 246, 0.45), 0 30px 60px -30px rgba(0, 0, 0, 0.9);

  &::before {
    content: '';
    position: absolute;
    inset: -40px;
    z-index: -1;
    background: radial-gradient(closest-side, rgba(139, 92, 246, 0.35), transparent);
    filter: blur(30px);
    animation: ${glow} 6s ease-in-out infinite;
  }
`;

const Window = styled.div`
  border-radius: 19px;
  background: rgba(10, 10, 16, 0.92);
  backdrop-filter: blur(20px);
  overflow: hidden;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 16px;
  border-bottom: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--dim);

  i {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #2a2a36;
  }
  i:nth-child(1) { background: #ff5f57; }
  i:nth-child(2) { background: #febc2e; }
  i:nth-child(3) { background: #28c840; }

  span { margin-left: 10px; }
  b {
    margin-left: auto;
    font-weight: 500;
    color: var(--lime);
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  b::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 8px currentColor;
  }
`;

const Body = styled.div`
  height: 392px;
  padding: 18px 18px 20px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  line-height: 1.85;
  color: #C8C8D6;
  overflow: hidden;
  scroll-behavior: smooth;

  @media (max-width: 480px) {
    height: 340px;
    font-size: 11px;
    padding: 14px;
  }
`;

const Line = styled.div`
  white-space: pre-wrap;
  word-break: break-word;

  .prompt { color: var(--lime); }
  .dim { color: var(--dim); }
  .sub { color: #8E8EA3; padding-left: 12px; }
  .ok { color: var(--lime); }
  .done { color: #fff; font-weight: 600; }
  .tag {
    display: inline-block;
    min-width: 76px;
    margin-right: 6px;
    font-weight: 600;
  }
  .violet { color: var(--violet-soft); }
  .cyan { color: var(--cyan); }
  .amber { color: var(--amber); }
  .lime { color: var(--lime); }
  .gate {
    color: var(--amber);
    background: rgba(251, 191, 36, 0.08);
    border: 1px dashed rgba(251, 191, 36, 0.45);
    border-radius: 6px;
    padding: 1px 8px;
    display: inline-block;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 7px;
  height: 14px;
  margin-left: 2px;
  vertical-align: -2px;
  background: var(--cyan);
  animation: ${blink} 1s steps(1) infinite;
`;

function renderLine(line, text) {
  switch (line.t) {
    case 'cmd':
      return (
        <>
          <span className='prompt'>❯ </span>
          {text}
        </>
      );
    case 'step':
      return (
        <>
          <span className={`tag ${line.color}`}>▸ {line.tag}</span>
          {text}
        </>
      );
    case 'gate':
      return (
        <span className='gate'>
          ⏸ {line.tag} · {text}
        </span>
      );
    default:
      return <span className={line.t}>{text}</span>;
  }
}

export default function AgentTerminal() {
  const [lines, setLines] = useState([]); // [{line, text}]
  const [typing, setTyping] = useState(true);
  const timers = useRef([]);
  const bodyRef = useRef(null);

  // Keep the newest line in view on small screens where lines wrap.
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setLines(script.map((l) => ({ line: l, text: l.text })));
      setTyping(false);
      return;
    }

    let cancelled = false;
    const pending = timers.current;
    const wait = (ms) =>
      new Promise((res) => {
        const id = setTimeout(res, ms);
        pending.push(id);
      });

    const run = async () => {
      while (!cancelled) {
        setLines([]);
        setTyping(true);
        await wait(700);
        for (const line of script) {
          if (cancelled) return;
          if (line.t === 'cmd') {
            for (let i = 1; i <= line.text.length; i++) {
              if (cancelled) return;
              setLines([{ line, text: line.text.slice(0, i) }]);
              await wait(38 + Math.random() * 40);
            }
            await wait(450);
          } else {
            setLines((prev) => [...prev, { line, text: line.text }]);
            await wait(line.t === 'gate' ? 1500 : line.t === 'sub' ? 420 : 650);
          }
        }
        setTyping(false);
        await wait(4200);
      }
    };
    run();

    return () => {
      cancelled = true;
      pending.forEach(clearTimeout);
    };
  }, []);

  return (
    <Frame>
      <Window>
        <TitleBar>
          <i />
          <i />
          <i />
          <span>rootcause · agent</span>
          <b>{typing ? 'running' : 'resolved'}</b>
        </TitleBar>
        <Body ref={bodyRef} aria-label='Replay of an AI agent investigating a production incident' role='img'>
          {lines.map(({ line, text }, i) => (
            <Line key={i}>
              {renderLine(line, text)}
              {i === lines.length - 1 && typing && <Cursor />}
            </Line>
          ))}
          {lines.length === 0 && <Cursor />}
        </Body>
      </Window>
    </Frame>
  );
}
