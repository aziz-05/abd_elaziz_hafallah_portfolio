import styled from 'styled-components';
import Layout from '../components/Layout';
import { Button, ButtonRow, Container, Gradient, Section } from '../components/ui';

const Wrap = styled.div`
  min-height: 80vh;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 26px;
  padding-top: 100px;
  text-align: center;

  .code {
    font-family: var(--font-display);
    font-size: clamp(120px, 26vw, 260px);
    font-weight: 800;
    line-height: 0.85;
    letter-spacing: -0.07em;
  }

  pre {
    margin: 0;
    padding: 18px 22px;
    border-radius: 14px;
    border: 1px solid var(--border);
    background: rgba(0, 0, 0, 0.4);
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1.8;
    color: var(--muted);
    text-align: left;
    white-space: pre-wrap;
  }
  .warn { color: var(--amber); }
`;

export default function NotFound() {
  return (
    <Layout title='Page not found'>
      <Section>
        <Container>
          <Wrap>
            <div className='code'>
              <Gradient>404</Gradient>
            </div>
            <pre>
              <span className='warn'>⏸ refused</span> · no evidence this page exists{'\n'}
              relevance score 0.00 &lt; floor 0.35 · answering “I don’t know” instead of guessing
            </pre>
            <ButtonRow style={{ justifyContent: 'center' }}>
              <Button href='/' variant='primary' iconLeft='home'>
                Back home
              </Button>
              <Button href='/projects' icon='arrowRight'>
                See projects
              </Button>
            </ButtonRow>
          </Wrap>
        </Container>
      </Section>
    </Layout>
  );
}
