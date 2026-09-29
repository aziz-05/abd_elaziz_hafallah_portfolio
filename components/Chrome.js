// Site-wide ambient pieces: scroll progress bar, background glow/grain, toast.
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Icon from './Icon';

const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 300;
  transform-origin: 0 50%;
  background: var(--gradient);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.7);
  pointer-events: none;
`;

export function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <Bar ref={ref} style={{ transform: 'scaleX(0)' }} />;
}

// Page-level backdrop: soft top glow + film grain for depth.
export const Ambient = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(900px 500px at 15% -10%, rgba(139, 92, 246, 0.12), transparent 60%),
    radial-gradient(700px 400px at 90% 0%, rgba(34, 211, 238, 0.07), transparent 60%);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translate(-50%, 16px) scale(0.96); }
  to { opacity: 1; transform: translate(-50%, 0) scale(1); }
`;

const ToastBox = styled.div`
  position: fixed;
  left: 50%;
  bottom: 28px;
  z-index: 400;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  max-width: calc(100vw - 32px);
  padding: 12px 18px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  background: rgba(20, 20, 30, 0.95);
  border: 1px solid var(--border-strong);
  box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.8);
  animation: ${slideUp} 0.35s var(--ease);

  svg { color: var(--lime); flex: none; }
`;

export function Toaster() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let timer;
    const onToast = (e) => {
      setMessage(e.detail);
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(null), 2600);
    };
    window.addEventListener('toast', onToast);
    return () => {
      window.removeEventListener('toast', onToast);
      clearTimeout(timer);
    };
  }, []);

  if (!message) return null;
  return (
    <ToastBox role='status' aria-live='polite' key={message}>
      <Icon name='check' size={16} strokeWidth={2.4} />
      {message}
    </ToastBox>
  );
}
