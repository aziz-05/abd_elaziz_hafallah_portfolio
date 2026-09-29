import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Content stays visible without JS: the hidden state only applies once
// _document has tagged <html class="js">.
const Wrap = styled.div`
  .js &[data-reveal]:not([data-in='true']) {
    opacity: 0;
    transform: translateY(28px);
    filter: blur(6px);
  }
  transition: opacity 0.9s var(--ease), transform 0.9s var(--ease), filter 0.9s var(--ease);
  transition-delay: ${(p) => p.delay || 0}ms;
`;

export function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return [ref, inView];
}

export default function Reveal({ children, delay = 0, as, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Wrap ref={ref} as={as} data-reveal data-in={inView} delay={delay} {...rest}>
      {children}
    </Wrap>
  );
}
