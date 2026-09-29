import styled from 'styled-components';
import Layout from '../components/Layout';
import ProjectShowcase from '../components/ProjectShowcase';
import Reveal from '../components/Reveal';
import { Button, Container, Eyebrow, Gradient, H2, Lead, Section, SectionHead, Serif } from '../components/ui';
import { caseStudies } from '../content/projects';
import Cta from '../sections/Cta';
import Hero from '../sections/Hero';
import Marquee from '../sections/Marquee';
import Pillars from '../sections/Pillars';
import Principles from '../sections/Principles';
import Stats from '../sections/Stats';
import Timeline from '../sections/Timeline';

const HeadRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: clamp(40px, 6vw, 72px);

  > div { margin-bottom: 0; }
`;

const Stack = styled.div`
  display: grid;
  gap: 28px;
`;

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Marquee />
      <Pillars />

      <Section id='work'>
        <Container>
          <Reveal>
            <HeadRow>
              <SectionHead>
                <Eyebrow>Selected work</Eyebrow>
                <H2>
                  AI systems, <Serif>engineered</Serif> <Gradient>to be trusted</Gradient>
                </H2>
                <Lead>
                  Two open-source projects where the safety rules live in code, evaluations gate every
                  pull request, and “I don’t know” is a valid answer.
                </Lead>
              </SectionHead>
              <Button href='/projects' icon='arrowRight'>
                All projects
              </Button>
            </HeadRow>
          </Reveal>
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
            <HeadRow>
              <SectionHead>
                <Eyebrow>Experience</Eyebrow>
                <H2>
                  Production-hardened <Serif>at scale</Serif>
                </H2>
                <Lead>
                  Two years on the platform behind Algeria’s largest classifieds marketplace, where
                  slow queries and flaky deploys hit millions of people.
                </Lead>
              </SectionHead>
              <Button href='/about' icon='arrowRight'>
                Full story
              </Button>
            </HeadRow>
          </Reveal>
          <Timeline compact />
        </Container>
      </Section>

      <Principles />
      <Cta />
    </Layout>
  );
}
