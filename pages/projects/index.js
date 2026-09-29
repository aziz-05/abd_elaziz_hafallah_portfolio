import Link from 'next/link';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import PageHero from '../../components/PageHero';
import ProjectShowcase from '../../components/ProjectShowcase';
import Reveal from '../../components/Reveal';
import { Card, Container, Eyebrow, Gradient, H2, Section, SectionHead, Serif, Tag, Tags } from '../../components/ui';
import { profile } from '../../content/profile';
import { caseStudies, projects } from '../../content/projects';
import Cta from '../../sections/Cta';

const Stack = styled.div`
  display: grid;
  gap: 28px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Small = styled.div`
  height: 100%;
  padding: 30px;
  display: grid;
  grid-template-rows: auto auto 1fr auto auto;
  gap: 16px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--dim);
  }
  .kind {
    color: var(--c2);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  h3 {
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.035em;
  }
  p {
    font-size: 15px;
    line-height: 1.7;
    color: var(--muted);
  }
  .link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    border-bottom: 1px solid var(--border-strong);
    padding-bottom: 2px;
    transition: border-color 0.2s, gap 0.3s var(--ease);
  }
  .link:hover { border-color: var(--c2); gap: 12px; }

  .bar {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--c1), var(--c2));
    opacity: 0.8;
  }
`;

const GithubCard = styled.a`
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 14px;
  height: 100%;
  min-height: 260px;
  padding: 30px;
  text-align: center;
  border-radius: var(--radius);
  border: 1px dashed var(--border-strong);
  color: var(--muted);
  transition: border-color 0.3s, color 0.3s, background 0.3s;

  strong {
    font-family: var(--font-display);
    font-size: 22px;
    color: var(--text);
    letter-spacing: -0.02em;
  }
  span { font-family: var(--font-mono); font-size: 13px; }

  &:hover {
    color: var(--text);
    border-color: var(--cyan);
    background: rgba(34, 211, 238, 0.04);
  }
`;

function ProjectLink({ project }) {
  if (!project.link) return null;
  const content = (
    <>
      {project.linkLabel} <Icon name={project.link.startsWith('/') ? 'arrowRight' : 'arrowUpRight'} size={15} />
    </>
  );
  if (project.link.startsWith('/')) {
    return (
      <Link href={project.link}>
        <a className='link'>{content}</a>
      </Link>
    );
  }
  return (
    <a className='link' href={project.link} target='_blank' rel='noopener noreferrer'>
      {content}
    </a>
  );
}

export default function Projects() {
  const others = projects.filter((p) => !p.caseStudy);

  return (
    <Layout title='Projects' description='Case studies in agentic AI, production RAG and large-scale backend engineering.'>
      <PageHero
        eyebrow='Projects'
        glow='rgba(34, 211, 238, 0.28)'
        title={
          <>
            Work that <Serif>holds up</Serif> <Gradient>in production.</Gradient>
          </>
        }
        lead='Open-source AI systems built with the discipline of production engineering, plus the platform work and research that got me here.'
      />

      <Section tight>
        <Container>
          <Stack>
            {caseStudies.map((p, i) => (
              <ProjectShowcase key={p.slug} project={p} index={i} />
            ))}
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <Eyebrow>More work</Eyebrow>
              <H2>
                Platform, <Serif>research</Serif> & beyond
              </H2>
            </SectionHead>
          </Reveal>
          <Grid>
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 90}>
                <Card lift glow={`${p.accent[0]}26`} style={{ height: '100%', '--c1': p.accent[0], '--c2': p.accent[1] }}>
                  <Small>
                    <span className='bar' />
                    <div className='top'>
                      <span className='kind'>{p.kind}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.summary}</p>
                    <Tags>
                      {p.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </Tags>
                    <ProjectLink project={p} />
                  </Small>
                </Card>
              </Reveal>
            ))}
            <Reveal delay={90}>
              <GithubCard href={profile.github} target='_blank' rel='noopener noreferrer'>
                <Icon name='github' size={34} strokeWidth={1.4} />
                <strong>More on GitHub</strong>
                <span>github.com/{profile.githubHandle} ↗</span>
              </GithubCard>
            </Reveal>
          </Grid>
        </Container>
      </Section>

      <Cta />
    </Layout>
  );
}
