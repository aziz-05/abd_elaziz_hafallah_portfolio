import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { profile } from '../content/profile';
import { caseStudies } from '../content/projects';
import Icon from './Icon';
import { copyEmail, navLinks } from './nav';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const popIn = keyframes`
  from { opacity: 0; transform: translateY(-12px) scale(0.98); }
  to { opacity: 1; transform: none; }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 14vh 16px 16px;
  background: rgba(3, 3, 6, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: ${fadeIn} 0.2s ease;
`;

const Panel = styled.div`
  width: 100%;
  max-width: 580px;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(16, 16, 24, 0.96);
  border: 1px solid var(--border-strong);
  box-shadow: 0 40px 120px -20px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(139, 92, 246, 0.12),
    0 0 80px -20px rgba(139, 92, 246, 0.35);
  animation: ${popIn} 0.28s var(--ease);
`;

const SearchRow = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 18px;
  border-bottom: 1px solid var(--border);
  color: var(--dim);

  input {
    flex: 1;
    height: 58px;
    background: transparent;
    border: 0;
    outline: 0;
    font: inherit;
    font-size: 16px;
    color: var(--text);
    &::placeholder { color: var(--dim); }
  }

  kbd {
    font-family: var(--font-mono);
    font-size: 11px;
    padding: 2px 7px;
    border-radius: 6px;
    border: 1px solid var(--border);
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  max-height: 52vh;
  overflow-y: auto;
`;

const Group = styled.li`
  padding: 12px 12px 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dim);
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 12px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 15px;
  color: ${(p) => (p.active ? 'var(--text)' : 'var(--muted)')};
  background: ${(p) => (p.active ? 'rgba(139, 92, 246, 0.14)' : 'transparent')};

  .icon {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 9px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.03);
    color: ${(p) => (p.active ? 'var(--cyan)' : 'inherit')};
  }

  .hint {
    margin-left: auto;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--dim);
    @media (max-width: 520px) { display: none; }
  }
`;

const Empty = styled.div`
  padding: 32px;
  text-align: center;
  color: var(--dim);
  font-size: 14px;
`;

const Foot = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px 18px;
  border-top: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--dim);
`;

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = useMemo(
    () => [
      ...navLinks.map((l) => ({
        group: 'Pages',
        label: l.label,
        icon: l.icon,
        hint: l.href,
        run: () => router.push(l.href),
      })),
      ...caseStudies.map((p) => ({
        group: 'Case studies',
        label: `${p.name}: ${p.kind}`,
        icon: 'sparkles',
        run: () => router.push(`/projects/${p.slug}`),
      })),
      { group: 'Actions', label: 'Copy email address', icon: 'copy', hint: profile.email, run: copyEmail },
      { group: 'Actions', label: 'Download CV (PDF)', icon: 'download', run: () => window.open(profile.cv, '_blank') },
      { group: 'Actions', label: 'Send an email', icon: 'mail', run: () => (window.location.href = `mailto:${profile.email}`) },
      { group: 'Actions', label: 'Call me', icon: 'phone', hint: profile.phone, run: () => (window.location.href = profile.phoneHref) },
      { group: 'Actions', label: 'Save contact card (vCard)', icon: 'contact', run: () => (window.location.href = profile.vcard) },
      { group: 'Social', label: 'LinkedIn', icon: 'linkedin', run: () => window.open(profile.linkedin, '_blank') },
      { group: 'Social', label: 'GitHub', icon: 'github', hint: `@${profile.githubHandle}`, run: () => window.open(profile.github, '_blank') },
    ],
    [router]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.group} ${c.label} ${c.hint || ''}`.toLowerCase().includes(q));
  }, [commands, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setIndex(0);
  }, []);

  const run = useCallback(
    (cmd) => {
      close();
      cmd.run();
    },
    [close]
  );

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('palette:open', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('palette:open', onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current && inputRef.current.focus(), 10);
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  if (!open) return null;

  const onKeyDown = (e) => {
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && filtered[index]) {
      run(filtered[index]);
    }
  };

  let lastGroup = null;

  return (
    <Backdrop onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <Panel role='dialog' aria-modal='true' aria-label='Command menu' onKeyDown={onKeyDown}>
        <SearchRow>
          <Icon name='search' size={18} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Type a command or search…'
            aria-label='Search commands'
          />
          <kbd>esc</kbd>
        </SearchRow>
        <List role='listbox'>
          {filtered.length === 0 && <Empty>No results. Try “cv”, “email” or “projects”.</Empty>}
          {filtered.map((c, i) => {
            const header = c.group !== lastGroup ? <Group key={`g-${c.group}`}>{c.group}</Group> : null;
            lastGroup = c.group;
            return [
              header,
              <Item
                key={`${c.group}-${c.label}`}
                role='option'
                aria-selected={i === index}
                active={i === index}
                onMouseEnter={() => setIndex(i)}
                onClick={() => run(c)}
              >
                <span className='icon'>
                  <Icon name={c.icon} size={16} />
                </span>
                {c.label}
                {c.hint && <span className='hint'>{c.hint}</span>}
              </Item>,
            ];
          })}
        </List>
        <Foot>
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </Foot>
      </Panel>
    </Backdrop>
  );
}
