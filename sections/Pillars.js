import styled from 'styled-components';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import {
  Card,
  Container,
  Eyebrow,
  Gradient,
  H2,
  H3,
  IconBadge,
  Lead,
  Muted,
  Section,
  SectionHead,
  Serif,
  Tag,
  Tags,
} from '../components/ui';
import { pillars } from '../content/profile';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Body = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 18px;
  padding: clamp(26px, 3vw, 36px);

  .num {
    position: absolute;
    top: 26px;
    right: 28px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--dim);
  }
`;

export default function Pillars() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHead>
            <Eyebrow>What I do</Eyebrow>
            <H2>
              Where <Serif>solid engineering</Serif> meets <Gradient>generative AI</Gradient>
            </H2>
            <Lead>
              Anyone can wrap an LLM in a demo. The hard part is making it bounded, measurable and
              safe to run against real systems, and that’s the part I enjoy.
            </Lead>
          </SectionHead>
        </Reveal>

        <Grid>
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <Card lift style={{ height: '100%' }}>
                <Body>
                  <span className='num'>0{i + 1}</span>
                  <IconBadge>
                    <Icon name={p.icon} size={22} />
                  </IconBadge>
                  <H3>{p.title}</H3>
                  <Muted>{p.text}</Muted>
                  <Tags>
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </Tags>
                </Body>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
