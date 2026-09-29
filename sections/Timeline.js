import styled from 'styled-components';
import Reveal from '../components/Reveal';
import { LiveDot, Tag, Tags } from '../components/ui';
import { experience } from '../content/profile';

const List = styled.div`
  position: relative;
  display: grid;
  gap: 18px;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 10px;
    bottom: 10px;
    width: 1px;
    background: linear-gradient(var(--violet), var(--cyan) 50%, transparent);
    opacity: 0.5;
  }
`;

const Item = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 32px;
  padding-left: 40px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--bg);
    border: 2px solid ${(p) => (p.current ? 'var(--lime)' : 'var(--violet-soft)')};
    box-shadow: 0 0 0 5px var(--bg), 0 0 18px ${(p) => (p.current ? 'rgba(163,230,53,.6)' : 'rgba(139,92,246,.5)')};
  }
`;

const When = styled.div`
  padding-top: 4px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--muted);

  .now {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 11px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--lime);
    background: rgba(163, 230, 53, 0.08);
    border: 1px solid rgba(163, 230, 53, 0.25);
  }
`;

const Box = styled.div`
  padding: clamp(22px, 3vw, 32px);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01));
  display: grid;
  gap: 16px;

  h3 {
    font-family: var(--font-display);
    font-size: clamp(21px, 2.2vw, 26px);
    font-weight: 650;
    letter-spacing: -0.025em;
  }
  .at {
    margin-top: 4px;
    font-size: 15px;
    color: var(--muted);
  }
  .at b { color: var(--text); font-weight: 600; }
  .blurb { font-size: 15px; color: var(--cyan); }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 10px;
  }
  li {
    position: relative;
    padding-left: 22px;
    font-size: 15px;
    line-height: 1.65;
    color: #B9B9CA;
  }
  li::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 10px;
    width: 8px;
    height: 2px;
    border-radius: 2px;
    background: var(--gradient);
  }
`;

export default function Timeline({ compact }) {
  return (
    <List>
      {experience.map((job, i) => (
        <Reveal key={job.company} delay={i * 80}>
          <Item current={job.current}>
            <When>
              {job.period}
              {job.current && (
                <div>
                  <span className='now'>
                    <LiveDot /> Current
                  </span>
                </div>
              )}
            </When>
            <Box>
              <div>
                <h3>{job.role}</h3>
                <div className='at'>
                  <b>{job.company}</b> · {job.place}
                </div>
              </div>
              {job.blurb && <div className='blurb'>{job.blurb}</div>}
              <ul>
                {(compact ? job.points.slice(0, 4) : job.points).map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <Tags>
                {job.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </Tags>
            </Box>
          </Item>
        </Reveal>
      ))}
    </List>
  );
}
