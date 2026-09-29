import { useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import LocalTime from '../components/LocalTime';
import { copyEmail, copyText, toast } from '../components/nav';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Button, Card, Container, Gradient, LiveDot, Section, Serif } from '../components/ui';
import { profile } from '../content/profile';

const methods = [
  {
    icon: 'mail',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    action: 'Write an email',
    copy: profile.email,
    accent: '#A78BFA',
    primary: true,
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    action: 'Call now',
    copy: profile.phone,
    accent: '#22D3EE',
  },
  {
    icon: 'message',
    label: 'WhatsApp',
    value: profile.phone,
    href: profile.whatsapp,
    action: 'Open chat',
    accent: '#A3E635',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: `in/${profile.linkedinHandle}`,
    href: profile.linkedin,
    action: 'Connect',
    accent: '#60A5FA',
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: `@${profile.githubHandle}`,
    href: profile.github,
    action: 'Browse code',
    accent: '#E5E7EB',
  },
  {
    icon: 'contact',
    label: 'Contact card',
    value: 'vCard · all details',
    href: profile.vcard,
    action: 'Save to contacts',
    download: true,
    accent: '#FBBF24',
  },
];

const topics = ['Job opportunity', 'AI / agent project', 'Freelance work', 'Just saying hi'];

/* ---------- styles ---------- */

const Methods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Method = styled.div`
  position: relative;
  height: 100%;
  padding: 26px;
  display: grid;
  gap: 18px;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 14px;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  }
  .label {
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dim);
  }
  .value {
    font-family: var(--font-display);
    font-size: 19px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--text);
    word-break: break-word;
  }
  .actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
`;

const smallBtn = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 14px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.25s, border-color 0.25s, color 0.25s;
`;

const ActionLink = styled.a`
  ${smallBtn}
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-strong);
  &:hover { background: rgba(255, 255, 255, 0.12); }
`;

const CopyBtn = styled.button`
  ${smallBtn}
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--border);
  &:hover { color: var(--text); border-color: var(--border-strong); }
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 18px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Form = styled.form`
  padding: clamp(24px, 4vw, 44px);
  display: grid;
  gap: 22px;

  h2 {
    font-family: var(--font-display);
    font-size: clamp(30px, 3.6vw, 42px);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.05;
  }
  .hint { font-size: 15px; color: var(--muted); margin-top: 8px; }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    @media (max-width: 560px) { grid-template-columns: 1fr; }
  }

  label, .field {
    display: grid;
    gap: 8px;
    font-size: 13px;
    font-weight: 500;
    color: var(--muted);
  }

  input, textarea {
    width: 100%;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: rgba(0, 0, 0, 0.3);
    color: var(--text);
    font: inherit;
    font-size: 15px;
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;

    &::placeholder { color: var(--dim); }
    &:focus {
      border-color: rgba(139, 92, 246, 0.7);
      background: rgba(0, 0, 0, 0.45);
      box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15);
    }
  }
  textarea { min-height: 160px; resize: vertical; line-height: 1.6; }

  .foot {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    font-size: 13px;
    color: var(--dim);
  }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.button`
  padding: 9px 14px;
  border-radius: 999px;
  font-size: 13.5px;
  cursor: pointer;
  color: ${(p) => (p.active ? '#0A0A10' : 'var(--muted)')};
  font-weight: ${(p) => (p.active ? 600 : 500)};
  border: 1px solid ${(p) => (p.active ? 'transparent' : 'var(--border-strong)')};
  background: ${(p) => (p.active ? 'linear-gradient(110deg, #C4B5FD, #67E8F9 60%, #BEF264)' : 'transparent')};
  transition: all 0.25s var(--ease);
  &:hover { color: ${(p) => (p.active ? '#0A0A10' : 'var(--text)')}; }
`;

const Side = styled.div`
  display: grid;
  gap: 18px;
`;

const Info = styled.div`
  padding: 28px;
  display: grid;
  gap: 18px;

  h3 {
    font-family: var(--font-display);
    font-size: 20px;
    font-weight: 650;
    letter-spacing: -0.02em;
  }
  .clock {
    font-family: var(--font-display);
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -0.05em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .sub {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--muted);
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 12px;
  }
  li {
    display: flex;
    gap: 12px;
    font-size: 14.5px;
    line-height: 1.5;
    color: #B9B9CA;
  }
  li svg { flex: none; margin-top: 3px; color: var(--lime); }
`;

const Map = styled.div`
  position: relative;
  height: 140px;
  border-radius: 14px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 55%, rgba(34, 211, 238, 0.25), transparent 40%),
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px) 0 0 / 22px 22px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px) 0 0 / 22px 22px,
    rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border);

  &::before, &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 55%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    width: 12px;
    height: 12px;
    background: var(--cyan);
    box-shadow: 0 0 0 6px rgba(34, 211, 238, 0.25), 0 0 30px var(--cyan);
  }
  &::after {
    width: 90px;
    height: 90px;
    border: 1px solid rgba(34, 211, 238, 0.35);
  }

  span {
    position: absolute;
    left: 14px;
    bottom: 12px;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--muted);
  }
`;

function MethodCard({ m }) {
  const external = /^https?:/.test(m.href);
  return (
    <Card lift glow={`${m.accent}26`} style={{ height: '100%', '--accent': m.accent }}>
      <Method>
        <div className='head'>
          <span className='icon'>
            <Icon name={m.icon} size={22} />
          </span>
          <span className='label'>{m.label}</span>
        </div>
        <div className='value'>{m.value}</div>
        <div className='actions'>
          <ActionLink
            href={m.href}
            download={m.download || undefined}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
          >
            {m.action} <Icon name={external ? 'arrowUpRight' : 'arrowRight'} size={14} />
          </ActionLink>
          {m.copy && (
            <CopyBtn type='button' onClick={() => copyText(m.copy, `${m.label} copied`)}>
              <Icon name='copy' size={14} /> Copy
            </CopyBtn>
          )}
        </div>
      </Method>
    </Card>
  );
}

export default function Contact() {
  const [topic, setTopic] = useState(topics[0]);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      toast('Please add your name and a short message');
      return;
    }
    const subject = `${topic}: ${form.name}${form.company ? ` (${form.company})` : ''}`;
    const body = `${form.message}\n\n— ${form.name}${form.company ? `, ${form.company}` : ''}${
      form.email ? `\n${form.email}` : ''
    }`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast('Opening your email app…');
  };

  return (
    <Layout title='Contact' description={`Get in touch with ${profile.name}: email, phone, LinkedIn or download the CV.`}>
      <PageHero
        eyebrow='Contact'
        glow='rgba(163, 230, 53, 0.22)'
        title={
          <>
            Let’s <Serif>talk</Serif> <Gradient>shop.</Gradient>
          </>
        }
        lead='Open to AI engineering, backend and full-stack opportunities. The fastest way to reach me is email or LinkedIn, and my phone and WhatsApp are right here too.'
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Button href={`mailto:${profile.email}`} variant='primary' iconLeft='mail'>
            Email me
          </Button>
          <Button href={profile.cv} iconLeft='download' download>
            Download CV
          </Button>
        </div>
      </PageHero>

      <Section tight>
        <Container>
          <Methods>
            {methods.map((m, i) => (
              <Reveal key={m.label} delay={(i % 3) * 70}>
                <MethodCard m={m} />
              </Reveal>
            ))}
          </Methods>
        </Container>
      </Section>

      <Section tight style={{ paddingBottom: 'clamp(72px, 10vw, 136px)' }}>
        <Container>
          <Split>
            <Reveal>
              <Card>
                <Form onSubmit={onSubmit}>
                  <div>
                    <h2>Send a message</h2>
                    <p className='hint'>Fill this in and it opens a ready-to-send email in your mail app.</p>
                  </div>

                  <div className='field'>
                    <span id='topic-label'>What’s it about?</span>
                    <Chips role='radiogroup' aria-labelledby='topic-label'>
                      {topics.map((t) => (
                        <Chip
                          key={t}
                          type='button'
                          role='radio'
                          aria-checked={topic === t}
                          active={topic === t}
                          onClick={() => setTopic(t)}
                        >
                          {t}
                        </Chip>
                      ))}
                    </Chips>
                  </div>

                  <div className='row'>
                    <label>
                      Your name *
                      <input value={form.name} onChange={set('name')} placeholder='Jane Doe' autoComplete='name' required />
                    </label>
                    <label>
                      Company
                      <input value={form.company} onChange={set('company')} placeholder='Acme GmbH' autoComplete='organization' />
                    </label>
                  </div>
                  <label>
                    Your email
                    <input
                      type='email'
                      value={form.email}
                      onChange={set('email')}
                      placeholder='jane@acme.com'
                      autoComplete='email'
                    />
                  </label>
                  <label>
                    Message *
                    <textarea
                      value={form.message}
                      onChange={set('message')}
                      placeholder='Tell me about the role, the project or the problem you’re solving…'
                      required
                    />
                  </label>

                  <div className='foot'>
                    <span>
                      Prefer copy-paste?{' '}
                      <a href='#' onClick={(e) => { e.preventDefault(); copyEmail(); }} style={{ color: 'var(--cyan)' }}>
                        Copy my email
                      </a>
                    </span>
                    <Button as='button' type='submit' variant='primary' icon='send'>
                      Compose email
                    </Button>
                  </div>
                </Form>
              </Card>
            </Reveal>

            <Side>
              <Reveal delay={100}>
                <Card>
                  <Info>
                    <div className='sub'>
                      <LiveDot /> Innsbruck, Austria
                    </div>
                    <div className='clock'>
                      <LocalTime />
                    </div>
                    <div className='sub'>Local time (Europe/Vienna)</div>
                    <Map>
                      <span>47.26° N · 11.39° E</span>
                    </Map>
                  </Info>
                </Card>
              </Reveal>
              <Reveal delay={180}>
                <Card>
                  <Info>
                    <h3>Good fit if you need…</h3>
                    <ul>
                      <li>
                        <Icon name='check' size={16} strokeWidth={2.4} /> AI agents with guardrails,
                        approvals and evals
                      </li>
                      <li>
                        <Icon name='check' size={16} strokeWidth={2.4} /> RAG that cites sources or refuses
                      </li>
                      <li>
                        <Icon name='check' size={16} strokeWidth={2.4} /> Backend & microservices that scale
                      </li>
                      <li>
                        <Icon name='check' size={16} strokeWidth={2.4} /> Full-stack delivery, React / Vue to
                        Kubernetes
                      </li>
                    </ul>
                  </Info>
                </Card>
              </Reveal>
            </Side>
          </Split>
        </Container>
      </Section>
    </Layout>
  );
}
