// Stroke icon set (24×24, lucide-style) so the site ships no icon dependency.
const paths = {
  agent: (
    <>
      <rect x='4' y='8' width='16' height='12' rx='3' />
      <path d='M12 8V4M8 4h8M9 13v1M15 13v1M2 13v2M22 13v2' />
    </>
  ),
  search: (
    <>
      <circle cx='11' cy='11' r='7' />
      <path d='m20 20-3.5-3.5' />
    </>
  ),
  server: (
    <>
      <rect x='3' y='3' width='18' height='7' rx='2' />
      <rect x='3' y='14' width='18' height='7' rx='2' />
      <path d='M7 6.5h.01M7 17.5h.01' />
    </>
  ),
  code: <path d='m16 18 6-6-6-6M8 6l-6 6 6 6' />,
  layers: <path d='m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5' />,
  database: (
    <>
      <ellipse cx='12' cy='5' rx='9' ry='3' />
      <path d='M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3' />
    </>
  ),
  shield: (
    <>
      <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z' />
      <path d='m9 12 2 2 4-4' />
    </>
  ),
  activity: <path d='M22 12h-4l-3 9L9 3l-3 9H2' />,
  arrowRight: <path d='M5 12h14M13 5l7 7-7 7' />,
  arrowUpRight: <path d='M7 17 17 7M8 7h9v9' />,
  arrowLeft: <path d='M19 12H5M11 19l-7-7 7-7' />,
  download: <path d='M12 3v12M7 10l5 5 5-5M4 21h16' />,
  mail: (
    <>
      <rect x='2' y='4' width='20' height='16' rx='3' />
      <path d='m22 7-10 6L2 7' />
    </>
  ),
  phone: (
    <path d='M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z' />
  ),
  linkedin: (
    <>
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z' />
      <rect x='2' y='9' width='4' height='12' />
      <circle cx='4' cy='4' r='2' />
    </>
  ),
  github: (
    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.5-1-3.5.3-1.2.3-2.4 0-3.5 0 0-1 0-3 1.5-2.6-.5-5.4-.5-8 0C6 2 5 2 5 2c-.3 1.1-.3 2.3 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1-.8 1.6-.2.6-.2 1.2-.2 1.9v4M9 18c-4.5 2-5-2-7-2' />
  ),
  mapPin: (
    <>
      <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
      <circle cx='12' cy='10' r='3' />
    </>
  ),
  copy: (
    <>
      <rect x='9' y='9' width='13' height='13' rx='2' />
      <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
    </>
  ),
  check: <path d='M20 6 9 17l-5-5' />,
  command: <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />,
  file: (
    <>
      <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z' />
      <path d='M14 2v6h6M16 13H8M16 17H8M10 9H8' />
    </>
  ),
  user: (
    <>
      <circle cx='12' cy='8' r='4' />
      <path d='M4 21a8 8 0 0 1 16 0' />
    </>
  ),
  home: <path d='M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5Z' />,
  folder: <path d='M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9l-.8-1.2A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z' />,
  book: <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15ZM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5' />,
  send: <path d='m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13' />,
  message: <path d='M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z' />,
  sparkles: <path d='M12 3 13.9 8.1 19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3ZM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z' />,
  clock: (
    <>
      <circle cx='12' cy='12' r='10' />
      <path d='M12 6v6l4 2' />
    </>
  ),
  graduation: (
    <>
      <path d='M22 10 12 5 2 10l10 5 10-5Z' />
      <path d='M6 12v5c3 3 9 3 12 0v-5' />
    </>
  ),
  briefcase: (
    <>
      <rect x='2' y='7' width='20' height='14' rx='2' />
      <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
    </>
  ),
  globe: (
    <>
      <circle cx='12' cy='12' r='10' />
      <path d='M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z' />
    </>
  ),
  contact: (
    <>
      <rect x='3' y='4' width='18' height='16' rx='2' />
      <circle cx='9' cy='10' r='2' />
      <path d='M15 8h2M15 12h2M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2' />
    </>
  ),
  menu: <path d='M4 7h16M4 12h16M4 17h16' />,
  close: <path d='M18 6 6 18M6 6l12 12' />,
  gate: (
    <>
      <rect x='5' y='11' width='14' height='10' rx='2' />
      <path d='M8 11V7a4 4 0 0 1 8 0v4' />
    </>
  ),
  zap: <path d='M13 2 3 14h9l-1 8 10-12h-9l1-8Z' />,
};

export default function Icon({ name, size = 18, strokeWidth = 1.8, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      focusable='false'
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
