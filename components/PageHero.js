import styled, { keyframes } from 'styled-components';
import { Container, Eyebrow, Lead } from './ui';

const rise = keyframes`
  from { opacity: 0; transform: translateY(20px); filter: blur(6px); }
  to   { opacity: 1; transform: none; filter: none; }
`;

const Wrap = styled.section`
  position: relative;
  padding: clamp(150px, 18vw, 200px) var(--gutter) clamp(48px, 7vw, 88px);
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 60% 70% at 30% 0%, #000 20%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse 60% 70% at 30% 0%, #000 20%, transparent 70%);
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -2;
    width: 60vw;
    height: 60vw;
    left: -15vw;
    top: -35vw;
    border-radius: 50%;
    background: radial-gradient(circle, ${(p) => p.glow || 'rgba(139, 92, 246, 0.35)'}, transparent 65%);
    filter: blur(60px);
  }
`;

const Inner = styled.div`
  display: grid;
  gap: 24px;
  justify-items: start;

  > * { animation: ${rise} 0.9s var(--ease) both; }
  > *:nth-child(2) { animation-delay: 0.08s; }
  > *:nth-child(3) { animation-delay: 0.16s; }
  > *:nth-child(4) { animation-delay: 0.24s; }

  h1 {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(46px, 8vw, 110px);
    line-height: 0.96;
    letter-spacing: -0.05em;
    max-width: 1000px;
  }
`;

export default function PageHero({ eyebrow, title, lead, children, glow }) {
  return (
    <Wrap glow={glow}>
      <Container>
        <Inner>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1>{title}</h1>
          {lead && <Lead max='700px'>{lead}</Lead>}
          {children}
        </Inner>
      </Container>
    </Wrap>
  );
}
