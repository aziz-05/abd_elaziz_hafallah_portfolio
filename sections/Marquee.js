import styled, { keyframes } from 'styled-components';
import { marquee } from '../content/profile';

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const Wrap = styled.div`
  position: relative;
  padding: clamp(48px, 7vw, 80px) 0;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} ${(p) => p.duration}s linear infinite;
  animation-direction: ${(p) => (p.reverse ? 'reverse' : 'normal')};

  & + & { margin-top: 14px; }

  ${Wrap}:hover & { animation-play-state: paused; }
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-right: 14px;
  padding: 12px 22px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #B7B7C8;
  white-space: nowrap;
  transition: color 0.2s, border-color 0.2s;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 2px;
    background: var(--gradient);
    transform: rotate(45deg);
  }

  &:hover { color: #fff; border-color: rgba(139, 92, 246, 0.5); }
`;

function Row({ items, duration, reverse }) {
  const doubled = [...items, ...items];
  return (
    <Track duration={duration} reverse={reverse}>
      {doubled.map((item, i) => (
        <Chip key={i} aria-hidden={i >= items.length}>
          {item}
        </Chip>
      ))}
    </Track>
  );
}

export default function Marquee() {
  const half = Math.ceil(marquee.length / 2);
  return (
    <Wrap aria-label='Technologies I work with'>
      <Row items={marquee.slice(0, half)} duration={45} />
      <Row items={marquee.slice(half)} duration={50} reverse />
    </Wrap>
  );
}
