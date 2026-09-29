import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #07070B;
    --bg-elevated: #0D0D14;
    --surface: rgba(255, 255, 255, 0.03);
    --surface-hover: rgba(255, 255, 255, 0.055);
    --border: rgba(255, 255, 255, 0.08);
    --border-strong: rgba(255, 255, 255, 0.16);
    --text: #EDEDF3;
    --muted: #9B9BAE;
    --dim: #5E5E72;
    --violet: #8B5CF6;
    --violet-soft: #A78BFA;
    --cyan: #22D3EE;
    --lime: #A3E635;
    --amber: #FBBF24;
    --red: #F87171;
    --gradient: linear-gradient(110deg, #A78BFA 0%, #22D3EE 55%, #A3E635 100%);
    --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
    --font-display: 'Inter Tight', 'Inter', system-ui, sans-serif;
    --font-serif: 'Instrument Serif', Georgia, serif;
    --font-mono: 'JetBrains Mono', ui-monospace, monospace;
    --radius: 20px;
    --gutter: clamp(16px, 5vw, 64px);
    --max: 1200px;
    --ease: cubic-bezier(0.22, 1, 0.36, 1);
    color-scheme: dark;
  }

  *, *::before, *::after { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-sans);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body { overflow-x: hidden; }

  a { color: inherit; text-decoration: none; }

  img, svg { display: block; max-width: 100%; }

  button { font: inherit; color: inherit; }

  h1, h2, h3, h4, p { margin: 0; }

  ::selection { background: rgba(139, 92, 246, 0.45); color: #fff; }

  :focus-visible {
    outline: 2px solid var(--cyan);
    outline-offset: 3px;
    border-radius: 6px;
  }

  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(var(--violet), var(--cyan));
    border-radius: 10px;
    border: 3px solid var(--bg);
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }

  /* Markdown content (blog posts) */
  .prose {
    color: #C9C9D6;
    font-size: 18px;
    line-height: 1.85;
  }
  .prose p { margin: 0 0 1.4em; }
  .prose h2, .prose h3 {
    font-family: var(--font-display);
    color: var(--text);
    letter-spacing: -0.02em;
    margin: 2em 0 0.6em;
  }
  .prose a { color: var(--cyan); text-decoration: underline; text-underline-offset: 3px; }
  .prose img { border-radius: 14px; margin: 2em 0; }
  .prose code {
    font-family: var(--font-mono);
    font-size: 0.88em;
    background: rgba(255,255,255,0.06);
    border: 1px solid var(--border);
    padding: 2px 6px;
    border-radius: 6px;
  }
  .prose ul, .prose ol { padding-left: 1.3em; margin: 0 0 1.4em; }
  .prose li { margin-bottom: 0.4em; }
  .prose blockquote {
    margin: 2em 0;
    padding: 4px 0 4px 20px;
    border-left: 3px solid var(--violet);
    color: var(--muted);
  }
`;
