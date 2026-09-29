import Link from 'next/link';
import styled from 'styled-components';
import { profile } from '../../content/profile';
import Icon from '../Icon';
import LocalTime from '../LocalTime';
import { navLinks } from '../nav';
import { LiveDot } from '../ui';

const Wrap = styled.footer`
  position: relative;
  padding: 80px var(--gutter) 32px;
  border-top: 1px solid var(--border);
  overflow: hidden;
  background:
    radial-gradient(60% 80% at 50% 120%, rgba(139, 92, 246, 0.18), transparent 70%),
    var(--bg);
`;

const Inner = styled.div`
  max-width: var(--max);
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Col = styled.div`
  display: grid;
  align-content: start;
  gap: 12px;

  h4 {
    margin: 0 0 6px;
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--dim);
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    font-size: 14px;
    color: var(--muted);
    transition: color 0.2s;
    &:hover { color: var(--text); }
  }
`;

const Pitch = styled.p`
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: var(--text);
  max-width: 360px;
`;

const Status = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--muted);
`;

const Wordmark = styled.div`
  margin: 72px 0 24px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(56px, 13.5vw, 196px);
  line-height: 0.85;
  letter-spacing: -0.06em;
  text-align: center;
  white-space: nowrap;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.01));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  user-select: none;
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--dim);
`;

export default function Footer() {
  return (
    <Wrap>
      <Inner>
        <Grid>
          <Col>
            <Pitch>Building AI systems that are safe to trust in production.</Pitch>
            <Status>
              <LiveDot /> Open to opportunities · {profile.location}
            </Status>
          </Col>
          <Col>
            <h4>Navigate</h4>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                <a>{l.label}</a>
              </Link>
            ))}
          </Col>
          <Col>
            <h4>Connect</h4>
            <a href={`mailto:${profile.email}`}>
              <Icon name='mail' size={15} /> Email
            </a>
            <a href={profile.phoneHref}>
              <Icon name='phone' size={15} /> {profile.phone}
            </a>
            <a href={profile.whatsapp} target='_blank' rel='noopener noreferrer'>
              <Icon name='message' size={15} /> WhatsApp
            </a>
          </Col>
          <Col>
            <h4>Elsewhere</h4>
            <a href={profile.linkedin} target='_blank' rel='noopener noreferrer'>
              <Icon name='linkedin' size={15} /> LinkedIn
            </a>
            <a href={profile.github} target='_blank' rel='noopener noreferrer'>
              <Icon name='github' size={15} /> GitHub
            </a>
            <a href={profile.cv} download>
              <Icon name='download' size={15} /> Download CV
            </a>
          </Col>
        </Grid>

        <Wordmark aria-hidden='true'>Abd Elaziz</Wordmark>

        <Bottom>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>
            Innsbruck local time · <LocalTime />
          </span>
          <span>Built with Next.js & styled-components</span>
        </Bottom>
      </Inner>
    </Wrap>
  );
}
