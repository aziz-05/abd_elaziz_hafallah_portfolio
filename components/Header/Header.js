import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { profile } from '../../content/profile';
import Icon from '../Icon';
import Logo from '../Logo';
import { navLinks, openPalette } from '../nav';

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 14px var(--gutter);
  transition: padding 0.4s var(--ease);
  ${(p) => p.scrolled && 'padding-top: 10px;'}
`;

const Inner = styled.div`
  max-width: var(--max);
  margin: 0 auto;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 10px 0 12px;
  border-radius: 20px;
  border: 1px solid transparent;
  transition: background 0.4s, border-color 0.4s, box-shadow 0.4s, backdrop-filter 0.4s;

  ${(p) =>
    (p.scrolled || p.open) &&
    css`
      background: rgba(12, 12, 18, 0.72);
      border-color: var(--border);
      backdrop-filter: saturate(160%) blur(18px);
      -webkit-backdrop-filter: saturate(160%) blur(18px);
      box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.8);
    `}
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  padding: 8px 15px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--muted);
  transition: color 0.25s, background 0.25s;

  &:hover { color: var(--text); }

  ${(p) =>
    p.active &&
    css`
      color: var(--text);
      background: rgba(255, 255, 255, 0.07);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
    `}
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  color: var(--muted);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 12px;
  transition: color 0.25s, border-color 0.25s, background 0.25s;

  &:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: rgba(255, 255, 255, 0.06);
  }

  kbd {
    font-family: inherit;
    padding: 1px 6px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid var(--border);
  }

  ${(p) =>
    p.mobileOnly &&
    css`
      display: none;
      @media (max-width: 900px) { display: inline-flex; }
    `}

  ${(p) =>
    p.hideSmall &&
    css`
      @media (max-width: 560px) { kbd, .label { display: none; } }
    `}
`;

const Cta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #0A0A10;
  background: linear-gradient(110deg, #C4B5FD, #67E8F9 60%, #BEF264);
  box-shadow: 0 8px 28px -10px rgba(34, 211, 238, 0.7);
  transition: transform 0.3s var(--ease);

  &:hover { transform: translateY(-1px); }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Drawer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  padding: 110px var(--gutter) 40px;
  background: rgba(7, 7, 11, 0.94);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: ${(p) => (p.open ? 1 : 0)};
  pointer-events: ${(p) => (p.open ? 'auto' : 'none')};
  transition: opacity 0.35s var(--ease);

  a.big {
    display: flex;
    align-items: baseline;
    gap: 14px;
    padding: 10px 0;
    font-family: var(--font-display);
    font-size: clamp(34px, 9vw, 48px);
    font-weight: 700;
    letter-spacing: -0.04em;
    color: var(--text);
    border-bottom: 1px solid var(--border);
    transform: translateY(${(p) => (p.open ? 0 : '16px')});
    transition: transform 0.5s var(--ease), color 0.2s;

    span {
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0;
      color: var(--dim);
    }

    &.active { color: var(--cyan); }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 28px;
  }

  .row a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid var(--border);
    font-size: 14px;
    color: var(--muted);
  }
`;

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const isActive = (href) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <>
      <Bar scrolled={scrolled}>
        <Inner scrolled={scrolled} open={open}>
          <Link href='/' passHref>
            <a aria-label='Home'>
              <Logo />
            </a>
          </Link>

          <Nav aria-label='Main'>
            {navLinks.slice(1).map((l) => (
              <Link key={l.href} href={l.href} passHref>
                <NavLink active={isActive(l.href)}>{l.label}</NavLink>
              </Link>
            ))}
          </Nav>

          <Actions>
            <IconBtn hideSmall onClick={openPalette} aria-label='Open command menu'>
              <Icon name='command' size={14} />
              <span className='label'>Menu</span>
              <kbd>⌘K</kbd>
            </IconBtn>
            <Cta href={profile.cv} download>
              <Icon name='download' size={15} />
              CV
            </Cta>
            <IconBtn
              mobileOnly
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <Icon name={open ? 'close' : 'menu'} size={18} />
            </IconBtn>
          </Actions>
        </Inner>
      </Bar>

      <Drawer open={open} aria-hidden={!open}>
        {navLinks.map((l, i) => (
          <Link key={l.href} href={l.href} passHref>
            <a
              className={`big ${isActive(l.href) ? 'active' : ''}`}
              style={{ transitionDelay: `${open ? i * 40 : 0}ms` }}
              tabIndex={open ? 0 : -1}
            >
              <span>0{i + 1}</span>
              {l.label}
            </a>
          </Link>
        ))}
        <div className='row'>
          <a href={profile.cv} download tabIndex={open ? 0 : -1}>
            <Icon name='download' size={15} /> Download CV
          </a>
          <a href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1}>
            <Icon name='mail' size={15} /> Email
          </a>
          <a href={profile.linkedin} target='_blank' rel='noopener noreferrer' tabIndex={open ? 0 : -1}>
            <Icon name='linkedin' size={15} /> LinkedIn
          </a>
        </div>
      </Drawer>
    </>
  );
}
