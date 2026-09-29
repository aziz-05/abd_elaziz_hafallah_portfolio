import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from '../components/Reveal';
import { Container } from '../components/ui';
import { stats } from '../content/profile';

const Wrap = styled.section`
  padding: 0 var(--gutter);
  margin-top: -20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.01));
  backdrop-filter: blur(10px);
  overflow: hidden;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Cell = styled.div`
  padding: clamp(22px, 3vw, 36px);
  border-right: 1px solid var(--border);
  display: grid;
  gap: 8px;

  &:last-child { border-right: 0; }

  @media (max-width: 860px) {
    &:nth-child(2n) { border-right: 0; }
    &:nth-child(-n + 2) { border-bottom: 1px solid var(--border); }
  }

  strong {
    font-family: var(--font-display);
    font-size: clamp(34px, 4.4vw, 54px);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.045em;
    background: linear-gradient(180deg, #fff 30%, rgba(255, 255, 255, 0.55));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-variant-numeric: tabular-nums;
  }

  span {
    font-size: 14px;
    line-height: 1.5;
    color: var(--muted);
  }
`;

function Counter({ value, suffix = '', start }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const duration = 1600;
    const step = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <>
      {start ? n : value}
      {suffix}
    </>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <Wrap>
      <Container>
        <Grid ref={ref}>
          {stats.map((s) => (
            <Cell key={s.label}>
              <strong>{s.text || <Counter value={s.value} suffix={s.suffix} start={inView} />}</strong>
              <span>{s.label}</span>
            </Cell>
          ))}
        </Grid>
      </Container>
    </Wrap>
  );
}
