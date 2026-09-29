import styled from 'styled-components';
import Flow from './Flow';
import Reveal from './Reveal';
import { Button, ButtonRow, Card, Muted, Tag, Tags } from './ui';

// Large feature card for a case-study project: story on the left, live pipeline on the right.

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Story = styled.div`
  display: grid;
  align-content: start;
  gap: 22px;
  padding: clamp(28px, 4vw, 52px);

  .kind {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--c2);
  }

  h3 {
    font-family: var(--font-display);
    font-size: clamp(36px, 4.6vw, 58px);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.045em;
  }

  .tagline {
    font-size: clamp(17px, 1.6vw, 20px);
    line-height: 1.55;
    color: var(--text);
    max-width: 560px;
  }
`;

const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: start;
  gap: 10px 32px;
  padding: 18px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  @media (max-width: 560px) {
    grid-template-columns: repeat(2, auto);
  }

  div { display: grid; gap: 2px; }
  strong {
    font-family: var(--font-display);
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.1;
    background: linear-gradient(110deg, var(--c1), var(--c2));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  span {
    font-size: 12.5px;
    color: var(--dim);
    max-width: 120px;
    line-height: 1.4;
  }
`;

const Visual = styled.div`
  position: relative;
  padding: clamp(28px, 4vw, 48px);
  border-left: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.25);
  background:
    radial-gradient(80% 60% at 70% 0%, color-mix(in srgb, var(--c1) 22%, transparent), transparent 70%),
    rgba(0, 0, 0, 0.25);

  @media (max-width: 960px) {
    border-left: 0;
    border-top: 1px solid var(--border);
  }

  .label {
    margin-bottom: 22px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--dim);
  }
`;

export default function ProjectShowcase({ project, index = 0 }) {
  const [c1, c2] = project.accent;
  return (
    <Reveal>
      <Card glow={`${c1}33`} style={{ '--c1': c1, '--c2': c2 }}>
        <Grid>
          <Story>
            <span className='kind'>
              {String(index + 1).padStart(2, '0')} · {project.kind}
            </span>
            <h3>{project.name}</h3>
            <p className='tagline'>{project.tagline}</p>
            <Muted>{project.summary}</Muted>
            <Metrics>
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </Metrics>
            <Tags>
              {project.stack.slice(0, 8).map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </Tags>
            <ButtonRow>
              <Button href={`/projects/${project.slug}`} variant='primary' icon='arrowRight'>
                Read case study
              </Button>
              <Button href={project.repo} iconLeft='github'>
                Source
              </Button>
            </ButtonRow>
          </Story>
          <Visual>
            <div className='label'>Pipeline</div>
            <Flow steps={project.flow} accent={project.accent} />
          </Visual>
        </Grid>
      </Card>
    </Reveal>
  );
}
