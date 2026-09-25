export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  projectType?: string;
  category: string;
  status: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  prototypeUrl?: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  subtitle: string;
  location: string;
  avatarUrl: string;
  email: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/* =========================================================
   PERSONAL INFORMATION
========================================================= */

export const personalInfo: PersonalInfo = {
  name: 'Rizky Subekty',
  title: 'Application Support Engineer | Full-Stack Developer | AI Automation',
  bio: 'Application Support Engineer and Full-Stack Developer focused on production application support, troubleshooting, web development, APIs, databases, and modern AI-powered automation solutions.',
  subtitle: 'Currently expanding into full-stack development with Go, Next.js, PostgreSQL, Docker, and AI/RAG.',
  location: 'Jakarta, Indonesia',
  avatarUrl: '/developer_avatar.png',
  email: 'rizkysubekty99@gmail.com',
  socials: {
    github: 'https://github.com/rizkysubekty99',
    linkedin: 'https://linkedin.com/in/rizkysubekty/',
    twitter: 'https://twitter.com/',
    instagram: 'https://instagram.com/rizky_subekty',
  },
};


/* =========================================================
   TECHNICAL SKILLS - 4 CORE CATEGORIES
========================================================= */

export const skillCategories: SkillCategory[] = [

  {
    category: '01 — Frontend Development',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },

  {
    category: '02 — Backend & Database',
    skills: [
      'Go / Golang',
      'REST API',
      'PostgreSQL',
      'MariaDB / MySQL',
      'Prisma',
      'SQL',
      'API Integration',
      'Kafka',
    ],
  },

  {
    category: '03 — DevOps & System',
    skills: [
      'Docker',
      'Docker Compose',
      'Git',
      'Linux',
      'CI/CD',
      'System Integration',
      'Troubleshooting',
    ],
  },

  {
    category: '04 — AI & Automation',
    skills: [
      'LLM',
      'RAG',
      'AI Agents',
      'Ollama',
      'Open WebUI',
      'Qdrant',
      'n8n',
      'AI API Integration',
    ],
  },

];

/* =========================================================
   PRIORITY SKILLS (for Hero/HIGHLIGHT)
========================================================= */

export const prioritySkills: string[] = [
  'Go',
  'Next.js',
  'React',
  'TypeScript',
  'PostgreSQL',
  'REST API',
  'Docker',
  'Git',
  'AI / LLM',
  'RAG',
  'n8n',
  'Kafka',
];


/* =========================================================
   WHAT I DO - SERVICE CARDS
========================================================= */

export const whatIDo: ServiceCard[] = [
  {
    id: 'app-support',
    title: 'Application Support',
    description: 'Troubleshooting production applications, handling incidents, investigating issues, coordinating with development and infrastructure teams, and providing technical support.',
    icon: 'support',
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Development',
    description: 'Building web applications, REST APIs, database-driven systems, and internal tools using modern frontend and backend technologies.',
    icon: 'code',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Building AI assistants, RAG knowledge systems, LLM integrations, and automated workflows using local AI and automation platforms.',
    icon: 'ai',
  },
  {
    id: 'digital-services',
    title: 'Digital Services',
    description: 'Supporting businesses with WordPress, SEO, content, virtual assistance, and practical digital automation through NexaAssist.',
    icon: 'service',
  },
];


/* =========================================================
   PROJECTS - SELECTED (4 PROJECTS)
========================================================= */

export const projects: Project[] = [

  {
    id: 'apkt-support-integration',

    slug: 'application-support-apkt',

    title: 'Application Support & APKT Integration',

    projectType: 'Production Support',

    category: 'Application Support / System Integration',

    status: 'Professional Project',

    shortDescription:
      'Production application support involving incident handling, troubleshooting, data investigation, API integration, database operations, and coordination with development and infrastructure teams.',

    description:
      'Production application support involving incident handling, troubleshooting, data investigation, API integration, database operations, and coordination with development and infrastructure teams.',

    techStack: [
      'Go',
      'PostgreSQL',
      'Kafka',
      'Docker',
      'REST API',
      'Application Support',
    ],

    caseStudyUrl: '/projects/application-support-apkt',

    imageUrl: '/projects/project-alpha.png',
  },

  {
    id: 'it-support-ticket-dashboard',

    slug: 'it-support-ticket-dashboard',

    title: 'IT Support Ticket Dashboard',

    projectType: 'Live Portfolio Project',

    category: 'Application Support / Full-Stack / Dashboard',

    status: 'Live Portfolio Project',

    shortDescription:
      'A web-based dashboard for monitoring and managing IT support tickets, incidents, priorities, and resolution progress.',

    description:
      'A web-based IT support dashboard designed to manage, monitor, and visualize support tickets, helping teams track incidents, priorities, statuses, and resolution workflows.',

    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Dashboard',
      'Ticket Management',
    ],

    demoUrl: 'https://ticketitsupport.vercel.app/',

    caseStudyUrl: '/projects/it-support-ticket-dashboard',

    imageUrl: '/projects/project-alpha.png',
  },

  {
    id: 'apkt-outage-restoration',

    slug: 'apkt-outage-restoration',

    title: 'APKT Outage & Restoration Support',

    projectType: 'Incident Response',

    category: 'Incident Management / Application Support',

    status: 'Professional Project',

    shortDescription:
      'Incident response and restoration support for application availability issues, including monitoring, investigation, coordination, technical updates, and service recovery.',

    description:
      'Incident response and restoration support for application availability issues, including monitoring, investigation, coordination, technical updates, and service recovery.',

    techStack: [
      'Application Support',
      'Troubleshooting',
      'Monitoring',
      'Incident Management',
      'System Integration',
    ],

    caseStudyUrl: '/projects/apkt-outage-restoration',

    imageUrl: '/projects/project-beta.png',
  },

  {
    id: 'national-scada-integration',

    slug: 'national-scada-integration',

    title: 'National SCADA Integration',

    projectType: 'System Integration',

    category: 'System Integration / Application Support',

    status: 'Professional Project',

    shortDescription:
      'Application and system integration support involving data flow, APIs, databases, messaging infrastructure, and coordination across technical teams.',

    description:
      'Application and system integration support involving data flow, APIs, databases, messaging infrastructure, and coordination across technical teams.',

    techStack: [
      'API',
      'Database',
      'Kafka',
      'System Integration',
      'Troubleshooting',
    ],

    caseStudyUrl: '/projects/national-scada-integration',

    imageUrl: '/projects/project-beta.png',
  },

  {
    id: 'ai-knowledge-assistant',

    slug: 'ai-knowledge-assistant',

    title: 'AI Knowledge Assistant',

    projectType: 'Personal AI Project',

    category: 'AI / RAG / Automation',

    status: 'Personal Project · In Development',

    shortDescription:
      'Building a local AI assistant using Ollama, Open WebUI, Qdrant, and RAG to retrieve technical knowledge and assist with application troubleshooting.',

    description:
      'Building a local AI assistant using Ollama, Open WebUI, Qdrant, and RAG to retrieve technical knowledge and assist with application troubleshooting.',

    techStack: [
      'Ollama',
      'Open WebUI',
      'Qdrant',
      'RAG',
      'LLM',
      'AI Automation',
    ],

    caseStudyUrl: '/projects/ai-knowledge-assistant',

    imageUrl: '/projects/project-alpha.png',
  },

];


/* =========================================================
   PROFESSIONAL EXPERIENCE - SIMPLIFIED
========================================================= */

export const experiences: Experience[] = [

  {
    id: 'exp-artha',

    company: 'PT. Artha Kreasi Utama',

    role: 'Support Aplikasi Portal SCADA Nasional - PLN',

    period: '2025 - Sekarang',

    description: [
      'Handled application incidents and user issues in production environments.',
      'Investigated application, database, API, network, and data-processing problems.',
      'Coordinated with development, infrastructure, and network teams to troubleshoot and resolve incidents.',
      'Provided technical updates and resolution status to users and stakeholders.',
    ],
  },

  {
    id: 'exp-dutagaruda',

    company: 'PT. Dutagaruda Piranti Prima',

    role: 'Support Aplikasi APKT - PLN',

    period: '2023 - 2025',

    description: [
      'Handled user-reported issues by analyzing application behavior and identifying root causes.',
      'Supported application monitoring, troubleshooting, testing, and maintenance activities.',
      'Analyzed application data and processes to identify operational issues.',
      'Coordinated with technical teams to resolve incidents and ensure application reliability.',
    ],
  },

  {
    id: 'exp-mitra-utama',

    company: 'PT. Mitra Utama Solusi Telematika',

    role: 'Support Aplikasi APKT - PLN',

    period: '2020 - 2023',

    description: [
      'Provided application support for APKT for PLN and PLN Icon Plus operations.',
      'Analyzed and investigated application problems reported by users.',
      'Supported application availability and functionality for PLN operational activities.',
      'Collaborated with technical teams to resolve application issues.',
    ],
  },

  {
    id: 'exp-mgs-support',

    company: 'PT. MGS (Mega Giga Solusindo)',

    role: 'Support Aplikasi APKT - PLN',

    period: '2018 - 2020',

    description: [
      'Analyzed application issues reported by users and investigated root causes.',
      'Monitored application functionality and ensured system reliability.',
      'Supported application maintenance and troubleshooting activities.',
      'Coordinated with development teams to improve system reliability.',
    ],
  },

  {
    id: 'exp-swadarma',

    company: 'PT. Swadharma Sarana Informatika - Cabang Purwokerto',

    role: 'Staff Unit Teknisi',

    period: '2017 - 2018',

    description: [
      'Performed maintenance and preventive troubleshooting for BNI ATMs.',
      'Handled technical issues and ensured ATM devices remained operational.',
      'Conducted on-site technical inspections and maintenance.',
    ],
  },

  {
    id: 'exp-mgs-implementor',

    company: 'PT. MGS (Mega Giga Solusindo)',

    role: 'Implementor Aplikasi APKT - PLN',

    period: '2017',

    description: [
      'Implemented the APKT application for PLN operational units.',
      'Assisted PLN units during application deployment and onboarding.',
      'Provided technical guidance to users during implementation.',
    ],
  },

];
