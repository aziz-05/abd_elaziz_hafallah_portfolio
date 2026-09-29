import styled from 'styled-components';
import { profile } from '../content/profile';

const Wrap = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: var(--text);

  small {
    display: block;
    font-family: var(--font-mono);
    font-weight: 400;
    font-size: 11px;
    letter-spacing: 0.02em;
    color: var(--dim);
    margin-top: 1px;
  }

  @media (max-width: 420px) {
    small { display: none; }
  }
`;

const Mark = styled.span`
  position: relative;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #0A0A10;
  background: linear-gradient(135deg, #C4B5FD, #67E8F9 55%, #BEF264);
  box-shadow: 0 6px 24px -6px rgba(139, 92, 246, 0.8);
  transition: transform 0.5s var(--ease);

  a:hover & { transform: rotate(-8deg) scale(1.05); }
`;

export default function Logo() {
  return (
    <Wrap>
      <Mark>{profile.initials}</Mark>
      <span>
        {profile.name}
        <small>~/software-engineer</small>
      </span>
    </Wrap>
  );
}
