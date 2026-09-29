import Image from 'next/image';
import styled from 'styled-components';
import Icon from './Icon';
import { Card, LiveDot, Tag, Tags } from './ui';

const Media = styled.a`
  position: relative;
  display: block;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-bottom: 1px solid var(--border);

  img { transition: transform 0.9s var(--ease) !important; }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 55%, rgba(7, 7, 11, 0.75));
    pointer-events: none;
  }

  .badge {
    position: absolute;
    top: 14px;
    left: 14px;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 11px;
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--lime);
    background: rgba(7, 7, 11, 0.75);
    border: 1px solid rgba(163, 230, 53, 0.35);
    backdrop-filter: blur(8px);
  }

  .open {
    position: absolute;
    right: 14px;
    bottom: 14px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    color: #0A0A10;
    background: #fff;
    opacity: 0;
    transform: translateY(8px) scale(0.9);
    transition: opacity 0.35s var(--ease), transform 0.35s var(--ease);
  }

  &:hover img { transform: scale(1.05); }
  &:hover .open { opacity: 1; transform: none; }
`;

const Body = styled.div`
  padding: 22px 24px 24px;
  display: grid;
  gap: 16px;

  h3 {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .actions a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 38px;
    padding: 0 14px;
    border-radius: 10px;
    font-size: 13.5px;
    font-weight: 600;
    border: 1px solid var(--border-strong);
    transition: background 0.25s, border-color 0.25s, color 0.25s;
  }
  .actions a.primary {
    color: #0A0A10;
    border-color: transparent;
    background: linear-gradient(110deg, #C4B5FD, #67E8F9 60%, #BEF264);
  }
  .actions a.ghost {
    color: var(--muted);
    &:hover { color: var(--text); background: rgba(255, 255, 255, 0.06); }
  }
`;

export default function LiveProjectCard({ project }) {
  return (
    <Card lift style={{ height: '100%' }}>
      <Media href={project.live} target='_blank' rel='noopener noreferrer' aria-label={`Open ${project.title} live demo`}>
        <span className='badge'>
          <LiveDot /> Live
        </span>
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          sizes='(max-width: 620px) 100vw, (max-width: 960px) 50vw, 600px'
        />
        <span className='open'>
          <Icon name='arrowUpRight' size={18} strokeWidth={2.2} />
        </span>
      </Media>
      <Body>
        <h3>{project.title}</h3>
        <Tags>
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Tags>
        <div className='actions'>
          <a className='primary' href={project.live} target='_blank' rel='noopener noreferrer'>
            Live demo <Icon name='arrowUpRight' size={14} />
          </a>
          <a className='ghost' href={project.repo} target='_blank' rel='noopener noreferrer'>
            <Icon name='github' size={14} /> Code
          </a>
        </div>
      </Body>
    </Card>
  );
}
