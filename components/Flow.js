import styled, { css, keyframes } from 'styled-components';
import Icon from './Icon';

// Pipeline diagram: nodes joined by a rail with a signal pulse travelling along it.
// Gate nodes (approval / refusal checks) are drawn in amber with a lock.

const travel = keyframes`
  from { top: -20%; }
  to   { top: 100%; }
`;
const travelX = keyframes`
  from { left: -10%; }
  to   { left: 100%; }
`;

const List = styled.ol`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;

  /* the rail */
  &::before {
    content: '';
    position: absolute;
    left: 19px;
    top: 20px;
    bottom: 20px;
    width: 1px;
    background: linear-gradient(var(--c1), var(--c2));
    opacity: 0.35;
  }

  /* the pulse */
  &::after {
    content: '';
    position: absolute;
    left: 18px;
    width: 3px;
    height: 70px;
    border-radius: 3px;
    background: linear-gradient(transparent, var(--c2), transparent);
    box-shadow: 0 0 14px var(--c2);
    animation: ${travel} 3.2s linear infinite;
  }

  ${(p) =>
    p.horizontal &&
    css`
      @media (min-width: 900px) {
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        gap: 12px;

        &::before {
          left: 20px;
          right: 20px;
          top: 19px;
          bottom: auto;
          width: auto;
          height: 1px;
          background: linear-gradient(90deg, var(--c1), var(--c2));
        }
        &::after {
          top: 18px;
          height: 3px;
          width: 90px;
          background: linear-gradient(90deg, transparent, var(--c2), transparent);
          animation-name: ${travelX};
        }

        li {
          grid-template-columns: 1fr;
          justify-items: start;
          align-items: start;
          align-content: start;
        }
      }
    `}
`;

const Node = styled.li`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  align-items: center;

  .dot {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fff;
    background: var(--bg-elevated);
    border: 1px solid var(--border-strong);
  }

  b {
    display: block;
    font-family: var(--font-display);
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--text);
  }

  small {
    display: block;
    font-family: var(--font-mono);
    font-size: 11.5px;
    color: var(--dim);
    line-height: 1.5;
  }

  ${(p) =>
    p.gate &&
    css`
      .dot {
        color: var(--amber);
        border-color: rgba(251, 191, 36, 0.55);
        background: rgba(251, 191, 36, 0.08);
        box-shadow: 0 0 22px -4px rgba(251, 191, 36, 0.5);
      }
      b { color: var(--amber); }
    `}
`;

export default function Flow({ steps, accent = ['#8B5CF6', '#22D3EE'], horizontal }) {
  return (
    <List horizontal={horizontal} style={{ '--c1': accent[0], '--c2': accent[1] }}>
      {steps.map((s, i) => (
        <Node key={s.label} gate={s.gate}>
          <span className='dot'>{s.gate ? <Icon name='gate' size={16} /> : String(i + 1).padStart(2, '0')}</span>
          <span>
            <b>{s.label}</b>
            <small>{s.sub}</small>
          </span>
        </Node>
      ))}
    </List>
  );
}
