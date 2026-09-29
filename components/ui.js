import Link from 'next/link';
import { useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Icon from './Icon';

export const Section = styled.section`
  position: relative;
  padding: ${(p) => (p.tight ? 'clamp(40px, 6vw, 72px)' : 'clamp(72px, 10vw, 136px)')} var(--gutter);
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(p) => p.max || 'var(--max)'};
  margin: 0 auto;
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(163, 230, 53, 0.55); }
  70% { box-shadow: 0 0 0 8px rgba(163, 230, 53, 0); }
  100% { box-shadow: 0 0 0 0 rgba(163, 230, 53, 0); }
`;

export const LiveDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  flex: none;
  border-radius: 50%;
  background: ${(p) => p.color || 'var(--lime)'};
  animation: ${pulse} 2s infinite;
`;

export const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);

  &::before {
    content: '';
    width: 22px;
    height: 1px;
    background: var(--gradient);
  }
`;

export const H1 = styled.h1`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(44px, 8vw, 104px);
  line-height: 0.98;
  letter-spacing: -0.045em;
  color: var(--text);
`;

export const H2 = styled.h2`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(34px, 5.2vw, 64px);
  line-height: 1.04;
  letter-spacing: -0.035em;
  color: var(--text);
`;

export const H3 = styled.h3`
  font-family: var(--font-display);
  font-weight: 650;
  font-size: clamp(20px, 2.2vw, 26px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text);
`;

export const Lead = styled.p`
  font-size: clamp(17px, 1.6vw, 20px);
  line-height: 1.65;
  color: var(--muted);
  max-width: ${(p) => p.max || '640px'};
`;

export const Muted = styled.p`
  color: var(--muted);
  font-size: ${(p) => p.size || '15px'};
  line-height: 1.7;
`;

export const Gradient = styled.span`
  background: var(--gradient);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

export const Serif = styled.em`
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.01em;
`;

export const SectionHead = styled.div`
  display: grid;
  gap: 18px;
  margin-bottom: clamp(40px, 6vw, 72px);
  max-width: ${(p) => p.max || '780px'};
  ${(p) =>
    p.center &&
    css`
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      justify-items: center;
    `}
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 11px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.025);
  font-family: var(--font-mono);
  font-size: 12px;
  color: #C4C4D4;
  white-space: nowrap;
  transition: border-color 0.25s, color 0.25s, background 0.25s;

  &:hover {
    border-color: rgba(139, 92, 246, 0.5);
    color: #fff;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

/* ---------- Buttons ---------- */

const buttonBase = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 50px;
  padding: 0 24px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease), background 0.3s, border-color 0.3s;

  svg { transition: transform 0.35s var(--ease); }
  &:hover svg:last-child { transform: translateX(3px); }
  &:active { transform: scale(0.97); }
`;

const StyledButton = styled.a`
  ${buttonBase}

  ${(p) =>
    p.variant === 'primary' &&
    css`
      color: #0A0A10;
      background: linear-gradient(110deg, #C4B5FD, #67E8F9 55%, #BEF264);
      background-size: 180% 100%;
      box-shadow: 0 10px 40px -10px rgba(34, 211, 238, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.6);

      &:hover {
        background-position: 100% 0;
        transform: translateY(-2px);
        box-shadow: 0 18px 50px -12px rgba(139, 92, 246, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.6);
      }
    `}

  ${(p) =>
    p.variant !== 'primary' &&
    css`
      color: var(--text);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-strong);
      backdrop-filter: blur(10px);

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
      }
    `}

  ${(p) =>
    p.small &&
    css`
      height: 40px;
      padding: 0 16px;
      font-size: 14px;
    `}

  @media (max-width: 480px) {
    ${(p) => p.block && 'width: 100%;'}
  }
`;

const isInternal = (href) => href && href.startsWith('/') && !/\.[a-z0-9]+$/i.test(href);

export function Button({ href, children, icon, iconLeft, variant = 'ghost', ...rest }) {
  const content = (
    <>
      {iconLeft && <Icon name={iconLeft} size={17} />}
      <span>{children}</span>
      {icon && <Icon name={icon} size={17} />}
    </>
  );

  if (isInternal(href) && !rest.download) {
    return (
      <Link href={href} passHref>
        <StyledButton variant={variant} {...rest}>
          {content}
        </StyledButton>
      </Link>
    );
  }

  const external = href && /^https?:/.test(href);
  return (
    <StyledButton
      href={href}
      variant={variant}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...rest}
    >
      {content}
    </StyledButton>
  );
}

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

/* ---------- Spotlight card ---------- */

const CardShell = styled.div`
  position: relative;
  border-radius: var(--radius);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.015));
  border: 1px solid var(--border);
  overflow: hidden;
  isolation: isolate;
  transition: border-color 0.35s, transform 0.5s var(--ease);
  --mx: 50%;
  --my: 50%;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s;
    background: radial-gradient(
      520px circle at var(--mx) var(--my),
      ${(p) => p.glow || 'rgba(139, 92, 246, 0.16)'},
      transparent 45%
    );
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s;
    background: radial-gradient(
      300px circle at var(--mx) var(--my),
      rgba(255, 255, 255, 0.45),
      transparent 60%
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
    &::before, &::after { opacity: 1; }
  }

  ${(p) =>
    p.lift &&
    css`
      &:hover { transform: translateY(-4px); }
    `}
`;

export function Card({ children, ...rest }) {
  const onMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, []);

  return (
    <CardShell onMouseMove={onMove} {...rest}>
      {children}
    </CardShell>
  );
}

export const IconBadge = styled.div`
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  color: #fff;
  background:
    linear-gradient(var(--bg-elevated), var(--bg-elevated)) padding-box,
    linear-gradient(135deg, rgba(167, 139, 250, 0.8), rgba(34, 211, 238, 0.5), rgba(163, 230, 53, 0.4)) border-box;
  border: 1px solid transparent;
  box-shadow: 0 8px 30px -10px rgba(139, 92, 246, 0.6);
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  margin: 0;
  background: linear-gradient(90deg, transparent, var(--border-strong), transparent);
`;
