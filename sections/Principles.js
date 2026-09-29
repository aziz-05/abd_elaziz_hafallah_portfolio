import styled from 'styled-components';
import Reveal from '../components/Reveal';
import { Container, Eyebrow, H2, Section, SectionHead, Serif } from '../components/ui';
import { principles } from '../content/profile';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--border);

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  position: relative;
  padding: 32px 28px 8px 0;
  display: grid;
  gap: 12px;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 48px;
    height: 2px;
    background: var(--gradient);
  }

  .n {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--dim);
  }
  h3 {
    font-family: var(--font-display);
    font-size: 21px;
    font-weight: 650;
    letter-spacing: -0.02em;
  }
  p {
    font-size: 15px;
    line-height: 1.65;
    color: var(--muted);
  }
`;

export default function Principles() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHead>
            <Eyebrow>How I build</Eyebrow>
            <H2>
              Four rules I <Serif>don’t</Serif> break
            </H2>
          </SectionHead>
        </Reveal>
        <Grid>
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <Item>
                <span className='n'>/0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Item>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
