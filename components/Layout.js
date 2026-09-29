import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { profile } from '../content/profile';
import { Ambient, ScrollProgress, Toaster } from './Chrome';
import CommandPalette from './CommandPalette';
import Footer from './Footer';
import Header from './Header';

const Main = styled.main`
  position: relative;
  min-height: 70vh;
`;

const defaultDescription = `${profile.name}: ${profile.role} building agentic AI systems, production RAG and scalable backends. ${profile.location}.`;

export default function Layout({ children, title, description = defaultDescription }) {
  const { asPath } = useRouter();
  const fullTitle = title ? `${title} · ${profile.name}` : `${profile.name}: ${profile.role}, AI & Agentic Systems`;
  const url = `${profile.siteUrl}${asPath === '/' ? '' : asPath}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <meta name='description' content={description} />
        <meta name='author' content={profile.name} />
        <link rel='canonical' href={url} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={fullTitle} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:image' content={`${profile.siteUrl}/og.png`} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Ambient />
      <ScrollProgress />
      <Header />
      <Main id='main'>{children}</Main>
      <Footer />
      <CommandPalette />
      <Toaster />
    </>
  );
}
