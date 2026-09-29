import Link from 'next/link';
import styled from 'styled-components';
import Flow from '../../components/Flow';
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import PageHero from '../../components/PageHero';
import Reveal from '../../components/Reveal';
import { Button, ButtonRow, Card, Container, Eyebrow, H2, Section, SectionHead, Serif, Tag, Tags } from '../../components/ui';
import { caseStudies, getProject } from '../../content/projects';
import Cta from '../../sections/Cta';

const Back = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--muted);
  transition: color 0.2s, gap 0.3s var(--ease);
  &:hover { color: var(--text); gap: 12px; }
`;

const Title = styled.span`
  background: linear-gradient(110deg, #fff 20%, var(--c1) 60%, var(--c2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  div {
    padding: clamp(20px, 3vw, 32px);
    border-right: 1px solid var(--border);
    display: grid;
    gap: 6px;
  }
  div:last-child { border-right: 0; }
  @media (max-width: 760px) {
    div:nth-child(2n) { border-right: 0; }
    div:nth-child(-n + 2) { border-bottom: 1px solid var(--border); }
  }

  strong {
    font-family: var(--font-display);
    font-size: clamp(34px, 4.5vw, 52px);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.045em;
    background: linear-gradient(110deg, var(--c1), var(--c2));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  span { font-size: 14px; color: var(--muted); }
`;

const Arch = styled.div`
  padding: clamp(24px, 4vw, 48px);
`;

const Table = styled.div`
  border-top: 1px solid var(--border);
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 24px;
  padding: 22px 0;
  border-bottom: 1px solid var(--border);
  align-items: baseline;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .problem {
    display: flex;
    gap: 14px;
    align-items: baseline;
    font-family: var(--font-display);
    font-size: 19px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--text);
  }
  .problem span {
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 400;
    color: var(--dim);
  }
  .fix {
    display: flex;
    gap: 12px;
    font-size: 15.5px;
    line-height: 1.65;
    color: #B5B5C6;
  }
  .fix svg { flex: none; margin-top: 4px; color: var(--c2); }
`;

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Highlight = styled.div`
  height: 100%;
  padding: 28px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: start;

  .n {
    font-family: var(--font-display);
    font-size: 30px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.04em;
    background: linear-gradient(180deg, var(--c1), var(--c2));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  p { font-size: 15.5px; line-height: 1.7; color: #BDBDCD; }
`;

const Terminal = styled.div`
  border-radius: var(--radius);
  border: 1px solid var(--border-strong);
  background: rgba(8, 8, 13, 0.95);
  overflow: hidden;
  box-shadow: 0 30px 90px -60px var(--c1);

  .bar {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 42px;
    padding: 0 16px;
    border-bottom: 1px solid var(--border);
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--dim);
  }
  .bar i { width: 10px; height: 10px; border-radius: 50%; background: #2c2c38; }

  pre {
    margin: 0;
    padding: 22px 22px 26px;
    overflow-x: auto;
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1.9;
    color: #C9C9D6;
  }
  .p { color: var(--lime); }
  .h { color: var(--dim); }
  .pass { color: var(--lime); }
`;

const Next = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: clamp(28px, 4vw, 44px);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: linear-gradient(110deg, rgba(255, 255, 255, 0.03), transparent);
  transition: border-color 0.3s, background 0.3s;

  small {
    display: block;
    margin-bottom: 8px;
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dim);
  }
  strong {
    font-family: var(--font-display);
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 700;
    letter-spacing: -0.04em;
  }
  .arrow {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    flex: none;
    border-radius: 50%;
    border: 1px solid var(--border-strong);
    transition: transform 0.4s var(--ease), background 0.3s, color 0.3s;
  }
  &:hover {
    border-color: var(--border-strong);
    .arrow { transform: translateX(6px); background: #fff; color: #000; }
  }
`;

const pad = (s, n) => s + ' '.repeat(Math.max(n - s.length, 1));

export default function CaseStudy({ slug }) {
  const project = getProject(slug);
  const [c1, c2] = project.accent;
  const idx = caseStudies.findIndex((p) => p.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <Layout title={`${project.name}: ${project.kind}`} description={project.tagline}>
      <div style={{ '--c1': c1, '--c2': c2 }}>
        <PageHero
          glow={`${c1}55`}
          eyebrow={
            <Link href='/projects' passHref>
              <Back>
                <Icon name='arrowLeft' size={14} /> All projects
              </Back>
            </Link>
          }
          title={<Title>{project.name}</Title>}
          lead={project.tagline}
        >
          <Tags>
            <Tag style={{ color: c2, borderColor: `${c2}55` }}>{project.kind}</Tag>
            {project.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </Tags>
          <ButtonRow>
            <Button href={project.repo} variant='primary' iconLeft='github'>
              View source on GitHub
            </Button>
            <Button href='#architecture' icon='arrowRight'>
              Architecture
            </Button>
          </ButtonRow>
        </PageHero>

        <Section tight>
          <Container>
            <Reveal>
              <Metrics>
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </Metrics>
            </Reveal>
          </Container>
        </Section>

        <Section id='architecture'>
          <Container>
            <Reveal>
              <SectionHead>
                <Eyebrow>Architecture</Eyebrow>
                <H2>
                  How a request <Serif>flows</Serif>
                </H2>
                <p style={{ color: 'var(--muted)', fontSize: 18 }}>{project.summary}</p>
              </SectionHead>
            </Reveal>
            <Reveal>
              <Card glow={`${c1}22`}>
                <Arch>
                  <Flow steps={project.flow} accent={project.accent} horizontal />
                </Arch>
              </Card>
            </Reveal>
          </Container>
        </Section>

        <Section>
          <Container>
            <Reveal>
              <SectionHead>
                <Eyebrow>Engineering decisions</Eyebrow>
                <H2>
                  Hard problems, <Serif>enforced</Serif> answers
                </H2>
              </SectionHead>
            </Reveal>
            <Table>
              {project.problems.map(([problem, fix], i) => (
                <Reveal key={problem} delay={i * 50}>
                  <Row>
                    <div className='problem'>
                      <span>0{i + 1}</span>
                      {problem}
                    </div>
                    <div className='fix'>
                      <Icon name='check' size={16} strokeWidth={2.4} />
                      {fix}
                    </div>
                  </Row>
                </Reveal>
              ))}
            </Table>
          </Container>
        </Section>

        <Section>
          <Container>
            <Reveal>
              <SectionHead>
                <Eyebrow>Highlights</Eyebrow>
                <H2>
                  What makes it <Serif>production-grade</Serif>
                </H2>
              </SectionHead>
            </Reveal>
            <Highlights>
              {project.highlights.map((h, i) => (
                <Reveal key={h} delay={(i % 2) * 80}>
                  <Card glow={`${c2}1f`} style={{ height: '100%' }}>
                    <Highlight>
                      <span className='n'>{String(i + 1).padStart(2, '0')}</span>
                      <p>{h}</p>
                    </Highlight>
                  </Card>
                </Reveal>
              ))}
            </Highlights>
          </Container>
        </Section>

        <Section>
          <Container max='920px'>
            <Reveal>
              <SectionHead>
                <Eyebrow>Evaluation gate</Eyebrow>
                <H2>
                  Measured in <Serif>CI</Serif>, not by vibes
                </H2>
                <p style={{ color: 'var(--muted)', fontSize: 18 }}>
                  Every pull request runs the offline evaluation suite. Drop below a threshold and the build
                  fails.
                </p>
              </SectionHead>
            </Reveal>
            <Reveal>
              <Terminal>
                <div className='bar'>
                  <i />
                  <i />
                  <i />
                  <span style={{ marginLeft: 8 }}>ci · eval-gate</span>
                </div>
                <pre>
                  <span className='p'>❯ </span>{project.evalCmd}{'\n\n'}
                  <span className='h'>{pad('METRIC', 28)}{pad('SCORE', 9)}{pad('THRESHOLD', 11)}RESULT</span>
                  {'\n'}
                  {project.evals.map(([metric, score, threshold, result]) => (
                    <span key={metric}>
                      {pad(metric, 28)}
                      {pad(score, 9)}
                      {pad(threshold, 11)}
                      <span className={result.startsWith('pass') ? 'pass' : ''}>{result}</span>
                      {'\n'}
                    </span>
                  ))}
                  {'\n'}
                  <span className='pass'>✔ all gates passed</span>
                </pre>
              </Terminal>
            </Reveal>
          </Container>
        </Section>

        {next && next.slug !== slug && (
          <Section tight>
            <Container>
              <Reveal>
                <Link href={`/projects/${next.slug}`} passHref>
                  <Next>
                    <div>
                      <small>Next case study</small>
                      <strong>{next.name}</strong>
                    </div>
                    <span className='arrow'>
                      <Icon name='arrowRight' size={22} />
                    </span>
                  </Next>
                </Link>
              </Reveal>
            </Container>
          </Section>
        )}

        <Cta />
      </div>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: caseStudies.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
