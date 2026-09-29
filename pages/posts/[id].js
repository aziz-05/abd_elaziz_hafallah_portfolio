import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import { Button, Container, Section } from '../../components/ui';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Article = styled.article`
  padding-top: clamp(130px, 16vw, 170px);
`;

const Back = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--muted);
  &:hover { color: var(--text); }
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(36px, 5.6vw, 64px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.045em;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin: 24px 0 40px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--dim);
`;

const Cover = styled.div`
  position: relative;
  aspect-ratio: 16 / 8;
  border-radius: 22px;
  overflow: hidden;
  margin-bottom: 48px;
  border: 1px solid var(--border);
`;

const readingTime = (html) => Math.max(1, Math.round(html.replace(/<[^>]+>/g, ' ').split(/\s+/).length / 220));

export default function Post({ postData }) {
  return (
    <Layout title={postData.title} description={postData.desc}>
      <Section tight>
        <Container max='780px'>
          <Article>
            <Link href='/blog' passHref>
              <Back>
                <Icon name='arrowLeft' size={14} /> All writing
              </Back>
            </Link>
            <Title>{postData.title}</Title>
            <Meta>
              <span>{format(parseISO(postData.date), 'MMMM d, yyyy')}</span>
              <span>{readingTime(postData.contentHtml)} min read</span>
            </Meta>
            {postData.image && (
              <Cover>
                <Image src={postData.image} alt='' layout='fill' objectFit='cover' priority />
              </Cover>
            )}
            <div className='prose' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div style={{ marginTop: 56 }}>
              <Button href='/blog' iconLeft='arrowLeft'>
                Back to writing
              </Button>
            </div>
          </Article>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  return { paths: getAllPostIds(), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { postData: await getPostData(params.id) } };
}
