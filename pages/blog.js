import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Card, Container, Gradient, Section, Serif } from '../components/ui';
import { getSortedPostsData } from '../lib/posts';

const List = styled.div`
  display: grid;
  gap: 20px;
`;

const Post = styled.a`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 0;
  cursor: pointer;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }

  .media {
    position: relative;
    min-height: 240px;
    overflow: hidden;
  }
  .media img { transition: transform 0.8s var(--ease) !important; }
  &:hover .media img { transform: scale(1.06); }

  .body {
    padding: clamp(24px, 4vw, 40px);
    display: grid;
    align-content: center;
    gap: 14px;
  }
  .meta {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--dim);
    letter-spacing: 0.04em;
  }
  h2 {
    font-family: var(--font-display);
    font-size: clamp(24px, 3vw, 32px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
  }
  p {
    font-size: 15.5px;
    line-height: 1.7;
    color: var(--muted);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--cyan);
    transition: gap 0.3s var(--ease);
  }
  &:hover .more { gap: 12px; }
`;

export async function getStaticProps() {
  return { props: { allPostsData: getSortedPostsData() } };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout title='Writing' description='Notes on distributed systems, networking research and AI engineering.'>
      <PageHero
        eyebrow='Writing'
        glow='rgba(99, 102, 241, 0.35)'
        title={
          <>
            Field <Serif>notes</Serif> & <Gradient>research.</Gradient>
          </>
        }
        lead='Long-form notes from my research and engineering work, from vehicular network routing to building reliable AI systems.'
      />
      <Section tight style={{ paddingBottom: 'clamp(72px, 10vw, 136px)' }}>
        <Container max='1040px'>
          <List>
            {allPostsData.map(({ id, date, title, image, desc }, i) => (
              <Reveal key={id} delay={i * 80}>
                <Card lift>
                  <Link href={`/posts/${id}`} passHref>
                    <Post>
                      {image && (
                        <div className='media'>
                          <Image src={image} alt='' layout='fill' objectFit='cover' />
                        </div>
                      )}
                      <div className='body'>
                        <span className='meta'>{format(parseISO(date), 'MMMM d, yyyy')} · Research</span>
                        <h2>{title}</h2>
                        {desc && <p>{desc}</p>}
                        <span className='more'>
                          Read article <Icon name='arrowRight' size={15} />
                        </span>
                      </div>
                    </Post>
                  </Link>
                </Card>
              </Reveal>
            ))}
          </List>
        </Container>
      </Section>
    </Layout>
  );
}
