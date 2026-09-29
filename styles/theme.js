// Design tokens. The same values are exposed as CSS variables in GlobalStyle,
// which is what components use; this object feeds the styled-components ThemeProvider.
const theme = {
  colors: {
    bg: '#07070B',
    bgElevated: '#0D0D14',
    surface: 'rgba(255, 255, 255, 0.03)',
    border: 'rgba(255, 255, 255, 0.08)',
    text: '#EDEDF3',
    muted: '#9B9BAE',
    dim: '#5E5E72',
    violet: '#8B5CF6',
    cyan: '#22D3EE',
    lime: '#A3E635',
    amber: '#FBBF24',
  },
  gradient: 'linear-gradient(110deg, #A78BFA 0%, #22D3EE 55%, #A3E635 100%)',
  fonts: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    display: "'Inter Tight', 'Inter', system-ui, sans-serif",
    serif: "'Instrument Serif', Georgia, serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
  },
};

export default theme;
