// Single source of truth for everything personal on the site.
// Update this file when the CV changes — every page reads from here.

export const profile = {
  name: 'Abd Elaziz Hafallah',
  shortName: 'Aziz',
  initials: 'AH',
  role: 'Software Engineer',
  headline: 'Generative AI & Agentic Systems · Full Stack',
  location: 'Innsbruck, Austria',
  timezone: 'Europe/Vienna',
  email: 'abdelaziz.hafallah.s@gmail.com',
  phone: '+43 693 3038802',
  phoneHref: 'tel:+436933038802',
  whatsapp: 'https://wa.me/436933038802',
  github: 'https://github.com/aziz-05',
  githubHandle: 'aziz-05',
  linkedin: 'https://www.linkedin.com/in/abdelaziz-hafallah',
  linkedinHandle: 'abdelaziz-hafallah',
  cv: '/Abd_Elaziz_Hafallah_CV_.pdf',
  vcard: '/abd-elaziz-hafallah.vcf',
  siteUrl: 'https://abd-elaziz-hafallah.vercel.app',
  summary:
    'Software engineer with 2+ years building production backend and full-stack systems for Algeria’s largest classifieds marketplace, serving millions of users and requests. Now building reliable agentic AI systems with human-in-the-loop controls, evaluation harnesses and observability.',
  roles: [
    'agentic AI systems',
    'production RAG pipelines',
    'microservices at scale',
    'evaluation harnesses',
    'full-stack products',
  ],
};

export const stats = [
  { value: 2, suffix: '+', label: 'Years shipping production systems' },
  { text: 'Millions', label: 'Of users on the marketplace I build for' },
  { value: 156, suffix: '', label: 'Automated tests across my AI projects' },
  { value: 23, suffix: '', label: 'Invariant checks gating every agent PR' },
];

export const pillars = [
  {
    icon: 'agent',
    title: 'Agentic AI',
    text: 'Multi-agent orchestration with LangGraph: plan → execute → verify loops, tool calling, and human approval enforced in code, not in prompts.',
    tags: ['LangGraph', 'Tool calling', 'HITL', 'Structured outputs'],
  },
  {
    icon: 'search',
    title: 'Retrieval & Evaluation',
    text: 'Hybrid search (BM25 + vector, RRF, reranking) with citations bound to sources, and CI-gated evals on recall@k, MRR, refusal correctness and groundedness.',
    tags: ['RAG', 'pgvector', 'Evals', 'Prompt-injection defence'],
  },
  {
    icon: 'server',
    title: 'Production Backend',
    text: 'Microservices, REST/GraphQL APIs, RabbitMQ event pipelines, Keycloak auth, and Docker/Kubernetes delivery for platforms under heavy real-world traffic.',
    tags: ['NestJS', 'FastAPI', 'Kubernetes', 'RabbitMQ'],
  },
];

export const skills = [
  {
    group: 'Agentic AI & GenAI',
    icon: 'agent',
    items: [
      'LangGraph',
      'Multi-agent orchestration',
      'Tool calling',
      'Plan / verify loops',
      'Human-in-the-loop',
      'RAG',
      'Hybrid search (BM25 + vector)',
      'Reranking',
      'Embeddings',
      'Structured outputs',
      'Evaluation harnesses',
      'Prompt-injection defence',
      'OpenAI · Anthropic · Azure OpenAI',
    ],
  },
  {
    group: 'Languages',
    icon: 'code',
    items: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL', 'C / C++'],
  },
  {
    group: 'Backend & Frontend',
    icon: 'layers',
    items: [
      'FastAPI',
      'NestJS',
      'Node.js',
      'Laravel',
      'REST',
      'GraphQL',
      'Microservices',
      'RabbitMQ',
      'React',
      'Vue.js 3',
    ],
  },
  {
    group: 'Data',
    icon: 'database',
    items: ['PostgreSQL', 'pgvector', 'Redis', 'MySQL', 'MongoDB', 'SQLAlchemy', 'Prisma ORM'],
  },
  {
    group: 'DevOps & Security',
    icon: 'shield',
    items: [
      'Docker',
      'Kubernetes',
      'GitLab CI/CD',
      'GitHub Actions',
      'Linux',
      'Git',
      'Keycloak',
      'OAuth 2.0 / OIDC',
      'JWT',
      'RBAC',
    ],
  },
  {
    group: 'Observability & Tools',
    icon: 'activity',
    items: ['Sentry', 'OpenObserve', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Jira', 'Agile / Scrum'],
  },
];

export const marquee = [
  'Python',
  'LangGraph',
  'FastAPI',
  'TypeScript',
  'NestJS',
  'PostgreSQL',
  'pgvector',
  'Redis',
  'RabbitMQ',
  'Docker',
  'Kubernetes',
  'OpenTelemetry',
  'Prometheus',
  'Grafana',
  'Keycloak',
  'GraphQL',
  'React',
  'Vue.js 3',
  'Laravel',
  'GitLab CI/CD',
  'Anthropic',
  'OpenAI',
  'Azure OpenAI',
  'Sentry',
];

export const experience = [
  {
    role: 'Full Stack Web Developer',
    company: 'SARL Ouedkniss',
    place: 'Algiers, Algeria',
    period: 'Nov 2023 – Present',
    current: true,
    blurb: 'Algeria’s largest classifieds marketplace — millions of users and requests.',
    points: [
      'Built and maintained microservices and REST/GraphQL APIs (Laravel, NestJS, Node.js) behind React and Vue front-ends, keeping core listing and search features fast and stable under heavy traffic.',
      'Worked directly with production PostgreSQL and MySQL at scale — optimising slow queries and applying data changes safely, improving response times while preserving data integrity.',
      'Implemented asynchronous, event-driven processing with RabbitMQ to decouple services and move heavy work off the request path, improving API responsiveness during traffic peaks.',
      'Secured user and service access with Keycloak (OAuth 2.0 / OpenID Connect) and RBAC, centralising authentication across microservices.',
      'Containerised services with Docker and deployed them to Kubernetes through GitLab CI/CD with automated tests — faster, repeatable, lower-risk releases.',
      'Integrated Sentry error tracking and OpenObserve logs & metrics, shortening the time to detect, diagnose and fix production incidents.',
      'Used AI coding agents daily in development, testing and code review; delivered sprint work tracked in Jira.',
    ],
    stack: ['Laravel', 'NestJS', 'Node.js', 'React', 'Vue.js', 'PostgreSQL', 'MySQL', 'RabbitMQ', 'Keycloak', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Sentry'],
  },
  {
    role: 'Network Engineer',
    company: 'Freelance',
    place: 'Algeria',
    period: 'Mar 2020 – Nov 2021',
    blurb: 'Infrastructure for small businesses.',
    points: [
      'Built and maintained LAN/WAN and VPN infrastructure for small businesses, including patching and security configuration.',
    ],
    stack: ['LAN / WAN', 'VPN', 'Network security'],
  },
];

export const education = [
  {
    degree: 'MSc Software Engineering',
    school: 'University of Innsbruck',
    place: 'Austria',
    period: 'Oct 2026 – Present',
    status: 'In progress',
    detail: 'Coursework: Machine Learning, Parallel Programming, Logic.',
  },
  {
    degree: 'MSc Networking & Distributed Systems',
    school: 'University of Constantine 2 – Abdelhamid Mehri',
    place: 'Algeria',
    period: '2019 – 2021',
    detail:
      'Distributed systems, microservices, network security, AI & deep learning. Thesis project: QoS-AODV, a VANET routing protocol (NS-2, C++).',
  },
  {
    degree: 'BSc Computer Science',
    school: 'University of Constantine 2 – Abdelhamid Mehri',
    place: 'Algeria',
    period: '2016 – 2019',
    detail: 'Project: EMODEC, a speech-emotion recognition API.',
  },
];

export const languages = [
  { name: 'Arabic', level: 'Native', value: 100 },
  { name: 'English', level: 'B2', value: 75 },
  { name: 'French', level: 'B2', value: 75 },
  { name: 'German', level: 'Learning', value: 30 },
];

export const principles = [
  {
    title: 'Enforce it in code',
    text: 'Safety rules live in code paths and database rows, not in a prompt the model can be talked out of.',
  },
  {
    title: 'Refuse rather than guess',
    text: 'A system that says “I don’t know” below a relevance floor is worth more than a confident wrong answer.',
  },
  {
    title: 'Measure, then gate',
    text: 'Golden sets and invariant checks run in CI, so a regression breaks the build before it reaches users.',
  },
  {
    title: 'Observe everything',
    text: 'Traces, metrics and logs from day one. Production incidents should be quick to diagnose.',
  },
];
