import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AgentTerminal from '../components/AgentTerminal';
import Icon from '../components/Icon';
import { Button, ButtonRow, Container, Gradient, LiveDot, Serif } from '../components/ui';
import { profile } from '../content/profile';

const drift = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(6%, -4%) scale(1.08); }
  66%  { transform: translate(-5%, 5%) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
`;

const rise = keyframes`
  from { opacity: 0; transform: translateY(24px); filter: blur(8px); }
  to   { opacity: 1; transform: none; filter: none; }
`;

const Wrap = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 130px var(--gutter) 90px;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 980px) {
    padding-top: 120px;
  }
`;

const Aurora = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;
  overflow: hidden;

  span {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.55;
    animation: ${drift} 22s ease-in-out infinite;
  }
  span:nth-child(1) {
    width: 46vw; height: 46vw; left: -10vw; top: -14vw;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent 65%);
  }
  span:nth-child(2) {
    width: 38vw; height: 38vw; right: -8vw; top: 4vw;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.55), transparent 65%);
    animation-delay: -7s;
    animation-duration: 26s;
  }
  span:nth-child(3) {
    width: 30vw; height: 30vw; left: 30vw; bottom: -18vw;
    background: radial-gradient(circle, rgba(163, 230, 53, 0.3), transparent 65%);
    animation-delay: -12s;
    animation-duration: 30s;
  }
`;

const Grid = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(40px, 5vw, 72px);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Copy = styled.div`
  display: grid;
  gap: 28px;
  justify-items: start;

  > * {
    animation: ${rise} 1s var(--ease) both;
  }
  > *:nth-child(2) { animation-delay: 0.08s; }
  > *:nth-child(3) { animation-delay: 0.16s; }
  > *:nth-child(4) { animation-delay: 0.24s; }
  > *:nth-child(5) { animation-delay: 0.32s; }
  > *:nth-child(6) { animation-delay: 0.4s; }
`;

const Badge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px 7px 10px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  font-size: 13px;
  color: var(--muted);
  transition: border-color 0.3s, color 0.3s;

  b { color: var(--text); font-weight: 600; }
  &:hover { border-color: rgba(163, 230, 53, 0.5); color: var(--text); }
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(46px, 7.2vw, 96px);
  line-height: 0.98;
  letter-spacing: -0.05em;

  em {
    font-size: 1.08em;
    padding-right: 0.04em;
  }
`;

const Sub = styled.p`
  max-width: 580px;
  font-size: clamp(17px, 1.5vw, 19px);
  line-height: 1.7;
  color: var(--muted);

  b { color: var(--text); font-weight: 600; }
`;

const Typer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--dim);

  code {
    color: var(--cyan);
    padding: 4px 10px;
    border-radius: 8px;
    background: rgba(34, 211, 238, 0.08);
    border: 1px solid rgba(34, 211, 238, 0.2);
  }
  code::after {
    content: '▍';
    margin-left: 1px;
    color: var(--cyan);
    opacity: 0.8;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 22px;
  font-size: 14px;
  color: var(--dim);

  span, a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
  a { transition: color 0.2s; }
  a:hover { color: var(--text); }
`;

const TerminalCol = styled.div`
  animation: ${rise} 1.2s var(--ease) 0.35s both;
  min-width: 0;
`;

const ScrollCue = styled.div`
  position: absolute;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  width: 22px;
  height: 36px;
  border-radius: 12px;
  border: 1.5px solid var(--border-strong);

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 7px;
    width: 3px;
    height: 7px;
    margin-left: -1.5px;
    border-radius: 2px;
    background: var(--muted);
    animation: ${keyframes`
      0% { opacity: 0; transform: translateY(0); }
      40% { opacity: 1; }
      80%, 100% { opacity: 0; transform: translateY(12px); }
    `} 1.8s infinite;
  }

  @media (max-height: 760px), (max-width: 980px) {
    display: none;
  }
`;

function useTypewriter(words) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    let word = 0;
    let chars = words[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      if (deleting) {
        chars -= 1;
        if (chars <= 0) {
          deleting = false;
          word = (word + 1) % words.length;
        }
      } else {
        chars += 1;
      }
      setText(words[word].slice(0, Math.max(chars, 0)));

      let delay = deleting ? 32 : 70;
      if (!deleting && chars >= words[word].length) {
        deleting = true;
        delay = 2200;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 2600);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <Wrap>
      <Aurora aria-hidden='true'>
        <span />
        <span />
        <span />
      </Aurora>
      <Grid aria-hidden='true' />

      <Container>
        <Layout>
          <Copy>
            <Link href='/contact' passHref>
              <Badge>
                <LiveDot />
                <span>
                  <b>Open to opportunities</b> · MSc @ University of Innsbruck
                </span>
              </Badge>
            </Link>

            <Title>
              Building AI agents
              <br />
              you can <Serif>actually</Serif> <Gradient>trust.</Gradient>
            </Title>

            <Sub>
              I’m <b>Abd Elaziz</b>, a software engineer with <b>2+ years</b> shipping production systems
              for <b>millions of users</b>. Today I design agentic AI with human-in-the-loop controls,
              evaluation harnesses and observability built in from day one.
            </Sub>

            <Typer aria-label={`Currently building ${profile.roles.join(', ')}`}>
              <span>~/currently-building</span>
              <code>{typed}</code>
            </Typer>

            <ButtonRow>
              <Button href='/projects' variant='primary' icon='arrowRight'>
                Explore my work
              </Button>
              <Button href={profile.cv} iconLeft='download' download>
                Download CV
              </Button>
            </ButtonRow>

            <Meta>
              <span>
                <Icon name='mapPin' size={15} /> {profile.location}
              </span>
              <a href={profile.github} target='_blank' rel='noopener noreferrer'>
                <Icon name='github' size={15} /> {profile.githubHandle}
              </a>
              <a href={profile.linkedin} target='_blank' rel='noopener noreferrer'>
                <Icon name='linkedin' size={15} /> LinkedIn
              </a>
            </Meta>
          </Copy>

          <TerminalCol>
            <AgentTerminal />
          </TerminalCol>
        </Layout>
      </Container>

      <ScrollCue aria-hidden='true' />
    </Wrap>
  );
}
