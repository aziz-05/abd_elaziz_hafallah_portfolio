import styled from 'styled-components';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Button, ButtonRow, Container, Gradient, Section, Serif } from '../components/ui';
import { education, experience, languages, profile, skills } from '../content/profile';
import { caseStudies } from '../content/projects';

const Paper = styled.article`
  position: relative;
  border-radius: 28px;
  padding: clamp(28px, 6vw, 72px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
  border: 1px solid var(--border-strong);
  box-shadow: 0 60px 140px -60px rgba(139, 92, 246, 0.5);

  &::before {
    content: '';
    position: absolute;
    left: 10%;
    right: 10%;
    top: -1px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cyan), transparent);
  }

  @media print {
    background: #fff;
    color: #000;
    box-shadow: none;
    border: 0;
    padding: 0;
  }
`;

const Head = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);

  h2 {
    font-family: var(--font-display);
    font-size: clamp(34px, 5vw, 54px);
    font-weight: 700;
    letter-spacing: -0.045em;
    line-height: 1;
  }
  .role {
    margin-top: 10px;
    font-size: 17px;
    color: var(--cyan);
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 8px;
    font-size: 14px;
    color: var(--muted);
  }
  li a, li span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  li a:hover { color: var(--text); }
`;

const Block = styled.section`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 32px;
  padding: 36px 0;
  border-bottom: 1px solid var(--border);

  &:last-child { border-bottom: 0; padding-bottom: 0; }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  > h3 {
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--dim);
    padding-top: 4px;
  }

  p { font-size: 16px; line-height: 1.75; color: #C2C2D0; }
`;

const Entries = styled.div`
  display: grid;
  gap: 30px;
`;

const Entry = styled.div`
  display: grid;
  gap: 10px;

  .top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 6px 16px;
    align-items: baseline;
  }
  h4 {
    margin: 0;
    font-family: var(--font-display);
    font-size: 19px;
    font-weight: 650;
    letter-spacing: -0.02em;
  }
  h4 span { color: var(--muted); font-weight: 500; }
  .when {
    font-family: var(--font-mono);
    font-size: 12.5px;
    color: var(--dim);
  }
  .stack {
    font-family: var(--font-mono);
    font-size: 12.5px;
    color: var(--violet-soft);
  }
  ul {
    margin: 0;
    padding-left: 18px;
    display: grid;
    gap: 6px;
  }
  li {
    font-size: 15px;
    line-height: 1.65;
    color: #B5B5C6;
  }
  li::marker { color: var(--cyan); }
  a { color: var(--cyan); }
`;

const SkillRows = styled.dl`
  margin: 0;
  display: grid;
  gap: 14px;

  div {
    display: grid;
    grid-template-columns: 190px 1fr;
    gap: 16px;
    @media (max-width: 560px) { grid-template-columns: 1fr; gap: 4px; }
  }
  dt { font-weight: 600; font-size: 15px; color: var(--text); }
  dd { margin: 0; font-size: 15px; line-height: 1.65; color: #B5B5C6; }
`;

export default function Resume() {
  return (
    <Layout title='Resume' description={`Resume of ${profile.name}: ${profile.headline}.`}>
      <PageHero
        eyebrow='Resume'
        title={
          <>
            The <Serif>short</Serif> <Gradient>version.</Gradient>
          </>
        }
        lead='Everything on my CV, in one scrollable page. Grab the PDF if you need a file for an ATS or a recruiter.'
      >
        <ButtonRow>
          <Button href={profile.cv} variant='primary' iconLeft='download' download>
            Download PDF
          </Button>
          <Button href={profile.cv} iconLeft='file' target='_blank' rel='noopener noreferrer'>
            Open in browser
          </Button>
        </ButtonRow>
      </PageHero>

      <Section tight>
        <Container max='1000px'>
          <Reveal>
            <Paper>
              <Head>
                <div>
                  <h2>{profile.name}</h2>
                  <div className='role'>
                    {profile.role} · {profile.headline}
                  </div>
                </div>
                <ul>
                  <li>
                    <span>
                      <Icon name='mapPin' size={14} /> {profile.location}
                    </span>
                  </li>
                  <li>
                    <a href={profile.phoneHref}>
                      <Icon name='phone' size={14} /> {profile.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${profile.email}`}>
                      <Icon name='mail' size={14} /> {profile.email}
                    </a>
                  </li>
                  <li>
                    <a href={profile.linkedin} target='_blank' rel='noopener noreferrer'>
                      <Icon name='linkedin' size={14} /> linkedin.com/in/{profile.linkedinHandle}
                    </a>
                  </li>
                  <li>
                    <a href={profile.github} target='_blank' rel='noopener noreferrer'>
                      <Icon name='github' size={14} /> github.com/{profile.githubHandle}
                    </a>
                  </li>
                </ul>
              </Head>

              <Block>
                <h3>Summary</h3>
                <p>
                  {profile.summary} MSc Software Engineering student at the University of Innsbruck.
                </p>
              </Block>

              <Block>
                <h3>Technical skills</h3>
                <SkillRows>
                  {skills.map((g) => (
                    <div key={g.group}>
                      <dt>{g.group}</dt>
                      <dd>{g.items.join(', ')}</dd>
                    </div>
                  ))}
                </SkillRows>
              </Block>

              <Block>
                <h3>AI engineering projects</h3>
                <Entries>
                  {caseStudies.map((p) => (
                    <Entry key={p.slug}>
                      <div className='top'>
                        <h4>
                          {p.name} <span>· {p.kind}</span>
                        </h4>
                        <a className='when' href={p.repo} target='_blank' rel='noopener noreferrer'>
                          {p.repo.replace('https://', '')} ↗
                        </a>
                      </div>
                      <div className='stack'>{p.stack.slice(0, 8).join(' · ')}</div>
                      <ul>
                        <li>{p.summary}</li>
                        {p.highlights.slice(0, 3).map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </Entry>
                  ))}
                </Entries>
              </Block>

              <Block>
                <h3>Experience</h3>
                <Entries>
                  {experience.map((job) => (
                    <Entry key={job.company}>
                      <div className='top'>
                        <h4>
                          {job.role} <span>· {job.company}, {job.place}</span>
                        </h4>
                        <span className='when'>{job.period}</span>
                      </div>
                      <ul>
                        {job.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </Entry>
                  ))}
                </Entries>
              </Block>

              <Block>
                <h3>Education</h3>
                <Entries>
                  {education.map((e) => (
                    <Entry key={e.degree}>
                      <div className='top'>
                        <h4>
                          {e.degree} {e.status && <span>({e.status.toLowerCase()})</span>}
                        </h4>
                        <span className='when'>{e.period}</span>
                      </div>
                      <div style={{ color: 'var(--muted)', fontSize: 15 }}>
                        {e.school}, {e.place}
                      </div>
                      <p style={{ fontSize: 15 }}>{e.detail}</p>
                    </Entry>
                  ))}
                </Entries>
              </Block>

              <Block>
                <h3>Languages</h3>
                <p>{languages.map((l) => `${l.name} (${l.level})`).join('  ·  ')}</p>
              </Block>
            </Paper>
          </Reveal>

        </Container>
      </Section>
    </Layout>
  );
}
