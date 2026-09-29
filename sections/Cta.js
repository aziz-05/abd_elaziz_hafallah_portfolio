import styled, { keyframes } from 'styled-components';
import { copyEmail } from '../components/nav';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import { Button, ButtonRow, Container, Gradient, Section, Serif } from '../components/ui';
import { profile } from '../content/profile';

const spin = keyframes`to { transform: rotate(360deg); }`;

const Box = styled.div`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border-radius: 32px;
  padding: clamp(44px, 8vw, 104px) clamp(24px, 6vw, 80px);
  text-align: center;
  border: 1px solid var(--border-strong);
  background: rgba(10, 10, 16, 0.9);

  /* rotating conic halo */
  &::before {
    content: '';
    position: absolute;
    left: -30%;
    top: 50%;
    width: 160%;
    aspect-ratio: 1;
    margin-top: -80%;
    z-index: -2;
    background: conic-gradient(from 0deg, transparent 0 55%, rgba(139, 92, 246, 0.55), rgba(34, 211, 238, 0.45), rgba(163, 230, 53, 0.35), transparent 95%);
    filter: blur(60px);
    opacity: 0.55;
    animation: ${spin} 14s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    z-index: -1;
    border-radius: 31px;
    background:
      radial-gradient(60% 70% at 50% 0%, rgba(139, 92, 246, 0.14), transparent 70%),
      rgba(9, 9, 14, 0.9);
  }

  h2 {
    font-family: var(--font-display);
    font-size: clamp(38px, 6.4vw, 84px);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.05em;
    max-width: 900px;
    margin: 0 auto 22px;
  }

  p {
    max-width: 560px;
    margin: 0 auto 36px;
    font-size: 18px;
    color: var(--muted);
  }
`;

const Row = styled(ButtonRow)`
  justify-content: center;
`;

const EmailLine = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--dim);
  transition: color 0.2s;

  &:hover { color: var(--text); }
`;

export default function Cta({ title, text }) {
  return (
    <Section>
      <Container>
        <Reveal>
          <Box>
            <h2>
              {title || (
                <>
                  Let’s build something <Serif>reliable</Serif> <Gradient>together.</Gradient>
                </>
              )}
            </h2>
            <p>
              {text ||
                'Hiring for AI engineering, backend or full-stack roles? Or have a hard problem that needs an agent you can trust? I’d love to hear about it.'}
            </p>
            <Row>
              <Button href='/contact' variant='primary' icon='arrowRight'>
                Get in touch
              </Button>
              <Button href={profile.cv} iconLeft='download' download>
                Download CV
              </Button>
              <Button href={profile.linkedin} iconLeft='linkedin'>
                LinkedIn
              </Button>
            </Row>
            <EmailLine onClick={copyEmail} aria-label='Copy email address'>
              <Icon name='copy' size={14} /> {profile.email}
            </EmailLine>
          </Box>
        </Reveal>
      </Container>
    </Section>
  );
}
