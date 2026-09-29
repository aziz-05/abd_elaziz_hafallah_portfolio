import styled from 'styled-components';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import LocalTime from '../components/LocalTime';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import {
  Button,
  ButtonRow,
  Card,
  Container,
  Eyebrow,
  Gradient,
  H2,
  IconBadge,
  LiveDot,
  Section,
  SectionHead,
  Serif,
  Tag,
  Tags,
} from '../components/ui';
import { education, languages, profile, skills } from '../content/profile';
import Cta from '../sections/Cta';
import Timeline from '../sections/Timeline';

/* ---------- Story ---------- */

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: clamp(32px, 6vw, 88px);
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 110px;

  @media (max-width: 960px) {
    position: static;
  }
`;

const IdCard = styled.div`
  padding: 28px;
  display: grid;
  gap: 22px;

  .top {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .avatar {
    display: grid;
    place-items: center;
    width: 72px;
    height: 72px;
    flex: none;
    border-radius: 22px;
    font-family: var(--font-display);
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -0.05em;
    color: #0A0A10;
    background: linear-gradient(135deg, #C4B5FD, #67E8F9 55%, #BEF264);
    box-shadow: 0 16px 40px -12px rgba(139, 92, 246, 0.8);
  }

  .name {
    font-family: var(--font-display);
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.2;
  }
  .role {
    font-size: 14px;
    color: var(--muted);
  }

  dl {
    margin: 0;
    display: grid;
    gap: 12px;
    padding: 18px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }
  dl div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    font-size: 14px;
  }
  dt {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--dim);
  }
  dd {
    margin: 0;
    color: var(--text);
    text-align: right;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
`;

const Story = styled.div`
  display: grid;
  gap: 24px;

  p {
    font-size: clamp(18px, 1.7vw, 21px);
    line-height: 1.7;
    color: #BDBDCD;
  }
  p b { color: var(--text); font-weight: 600; }
  p.big {
    font-family: var(--font-display);
    font-size: clamp(26px, 3vw, 36px);
    line-height: 1.3;
    letter-spacing: -0.025em;
    color: var(--text);
  }
`;

/* ---------- Skills ---------- */

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  > :first-child {
    grid-column: span 2;
    @media (max-width: 640px) { grid-column: auto; }
  }
  > :last-child {
    grid-column: 1 / -1;
  }
`;

const SkillBody = styled.div`
  height: 100%;
  padding: 26px;
  display: grid;
  align-content: start;
  gap: 18px;

  header {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  h3 {
    font-family: var(--font-display);
    font-size: 19px;
    font-weight: 650;
    letter-spacing: -0.02em;
  }
  small {
    display: block;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--dim);
  }
`;

/* ---------- Education & languages ---------- */

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 18px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const EduList = styled.div`
  display: grid;
  gap: 14px;
`;

const Edu = styled.div`
  padding: 24px 26px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;

  h3 {
    font-family: var(--font-display);
    font-size: 19px;
    font-weight: 650;
    letter-spacing: -0.02em;
  }
  .school { font-size: 14.5px; color: var(--muted); margin-top: 2px; }
  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin: 10px 0 8px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--dim);
  }
  .status {
    color: var(--lime);
    padding: 2px 9px;
    border-radius: 999px;
    border: 1px solid rgba(163, 230, 53, 0.3);
    background: rgba(163, 230, 53, 0.07);
  }
  p { font-size: 14.5px; line-height: 1.65; color: #A9A9BB; }
`;

const Langs = styled.div`
  padding: 28px;
  height: 100%;
  display: grid;
  align-content: start;
  gap: 24px;

  h3 {
    font-family: var(--font-display);
    font-size: 19px;
    font-weight: 650;
  }
`;

const Lang = styled.div`
  display: grid;
  gap: 10px;

  .row {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }
  .row span:last-child {
    font-family: var(--font-mono);
    font-size: 12.5px;
    color: var(--muted);
  }
  .bar {
    height: 6px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.06);
    overflow: hidden;
  }
  .bar i {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--gradient);
    transform-origin: left;
    transition: transform 1.4s var(--ease) 0.2s;
  }
  .js [data-in='false'] & .bar i { transform: scaleX(0); }
`;

export default function About() {
  return (
    <Layout title='About' description={`About ${profile.name}: story, experience, skills and education.`}>
      <PageHero
        eyebrow='About me'
        title={
          <>
            From network packets to <Serif>agentic</Serif> <Gradient>AI.</Gradient>
          </>
        }
        lead={profile.summary}
      />

      <Section tight>
        <Container>
          <StoryGrid>
            <Sticky>
            <Reveal>
              <Card>
                <IdCard>
                  <div className='top'>
                    <div className='avatar'>{profile.initials}</div>
                    <div>
                      <div className='name'>{profile.name}</div>
                      <div className='role'>{profile.headline}</div>
                    </div>
                  </div>
                  <dl>
                    <div>
                      <dt>
                        <Icon name='zap' size={15} /> Status
                      </dt>
                      <dd>
                        <LiveDot /> Open to opportunities
                      </dd>
                    </div>
                    <div>
                      <dt>
                        <Icon name='mapPin' size={15} /> Based in
                      </dt>
                      <dd>{profile.location}</dd>
                    </div>
                    <div>
                      <dt>
                        <Icon name='clock' size={15} /> Local time
                      </dt>
                      <dd>
                        <LocalTime />
                      </dd>
                    </div>
                    <div>
                      <dt>
                        <Icon name='graduation' size={15} /> Studying
                      </dt>
                      <dd>MSc SE · Uni Innsbruck</dd>
                    </div>
                    <div>
                      <dt>
                        <Icon name='globe' size={15} /> Speaks
                      </dt>
                      <dd>AR · EN · FR · DE</dd>
                    </div>
                  </dl>
                  <ButtonRow>
                    <Button href={profile.cv} variant='primary' iconLeft='download' download small>
                      CV
                    </Button>
                    <Button href='/contact' iconLeft='send' small>
                      Contact
                    </Button>
                    <Button href={profile.linkedin} iconLeft='linkedin' small>
                      LinkedIn
                    </Button>
                  </ButtonRow>
                </IdCard>
              </Card>
            </Reveal>
            </Sticky>

            <Reveal delay={100}>
              <Story>
                <p className='big'>
                  I like systems that behave well when things go wrong: under load, under attack, or when a
                  model is confidently mistaken.
                </p>
                <p>
                  My foundation is in <b>networks and distributed systems</b>. I studied Computer Science at
                  the University of Constantine 2, then completed an MSc in Networking & Distributed Systems,
                  where I designed <b>QoS-AODV</b>, a quality-of-service routing protocol for vehicular
                  networks, and earlier built <b>EMODEC</b>, a speech-emotion recognition API. Alongside my
                  studies, I built and secured LAN/WAN and VPN infrastructure for small businesses as a
                  freelance network engineer.
                </p>
                <p>
                  Since <b>November 2023</b> I’ve been a full-stack engineer at <b>Ouedkniss</b>, Algeria’s
                  largest classifieds marketplace. There I build microservices and REST/GraphQL APIs with
                  NestJS, Laravel and Node.js, run event-driven pipelines on RabbitMQ, centralise auth with
                  Keycloak, and ship through Docker, Kubernetes and GitLab CI/CD, all for a platform serving{' '}
                  <b>millions of users</b>.
                </p>
                <p>
                  Now I’m in <b>Innsbruck</b>, pursuing an MSc in Software Engineering and focusing on{' '}
                  <b>agentic AI</b>: multi-agent orchestration, retrieval, and above all the engineering that
                  makes agents safe to deploy. That means human approval gates, evaluation harnesses in CI,
                  prompt-injection defence and full observability.
                </p>
              </Story>
            </Reveal>
          </StoryGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <Eyebrow>Toolbox</Eyebrow>
              <H2>
                Skills & <Serif>stack</Serif>
              </H2>
            </SectionHead>
          </Reveal>
          <SkillGrid>
            {skills.map((g, i) => (
              <Reveal key={g.group} delay={(i % 3) * 80}>
                <Card style={{ height: '100%' }}>
                  <SkillBody>
                    <header>
                      <IconBadge>
                        <Icon name={g.icon} size={20} />
                      </IconBadge>
                      <div>
                        <h3>{g.group}</h3>
                        <small>{g.items.length} tools</small>
                      </div>
                    </header>
                    <Tags>
                      {g.items.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </Tags>
                  </SkillBody>
                </Card>
              </Reveal>
            ))}
          </SkillGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <Eyebrow>Career</Eyebrow>
              <H2>
                Where I’ve <Serif>shipped</Serif>
              </H2>
            </SectionHead>
          </Reveal>
          <Timeline />
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <Eyebrow>Education & languages</Eyebrow>
              <H2>
                Always <Serif>learning</Serif>
              </H2>
            </SectionHead>
          </Reveal>
          <TwoCol>
            <EduList>
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 80}>
                  <Card>
                    <Edu>
                      <IconBadge>
                        <Icon name='graduation' size={20} />
                      </IconBadge>
                      <div>
                        <h3>{e.degree}</h3>
                        <div className='school'>
                          {e.school} · {e.place}
                        </div>
                        <div className='meta'>
                          <span>{e.period}</span>
                          {e.status && <span className='status'>{e.status}</span>}
                        </div>
                        <p>{e.detail}</p>
                      </div>
                    </Edu>
                  </Card>
                </Reveal>
              ))}
            </EduList>
            <Reveal delay={120}>
              <Card style={{ height: '100%' }}>
                <Langs>
                  <h3>Languages</h3>
                  {languages.map((l) => (
                    <Lang key={l.name}>
                      <div className='row'>
                        <span>{l.name}</span>
                        <span>{l.level}</span>
                      </div>
                      <div className='bar'>
                        <i style={{ width: `${l.value}%` }} />
                      </div>
                    </Lang>
                  ))}
                </Langs>
              </Card>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      <Cta />
    </Layout>
  );
}
