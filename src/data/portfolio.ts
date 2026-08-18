export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
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

/* =========================================================
   PERSONAL INFORMATION
========================================================= */

export const personalInfo: PersonalInfo = {
  name: 'Rizky Subekty',

  title: 'Universal Full-Stack Engineer',

  bio: 'Universal Full-Stack Engineer and IT Support / Application Analyst with experience in application development, system analysis, troubleshooting, system integration, and enterprise application support. Experienced in building frontend applications, backend services, APIs, databases, and AI-powered solutions using modern technologies.',

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
   TECHNICAL SKILLS
========================================================= */

export const skillCategories: SkillCategory[] = [

  {
    category: 'Frontend Development',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'CSS Modules',
      'Responsive Web Design',
      'REST API Integration',
    ],
  },

  {
    category: 'Backend Development',
    skills: [
      'Go',
      'Java',
      'Node.js',
      'Express.js',
      'RESTful API',
      'Gin',
      'GORM',
      'Microservices',
      'Authentication & Authorization',
      'JWT',
      'API Integration',
    ],
  },

  {
    category: 'Database & Data',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQL',
      'Database Design',
      'Query Optimization',
      'Data Processing',
      'Data Integration',
    ],
  },

  {
    category: 'System Integration',
    skills: [
      'REST API',
      'Apache Kafka',
      'Event-Driven Architecture',
      'API Integration',
      'Enterprise System Integration',
      'Backend Integration',
      'SCADA Integration',
      'Data Flow Analysis',
    ],
  },

  {
    category: 'AI & Virtual Assistant',
    skills: [
      'AI Integration',
      'AI-Powered Applications',
      'Virtual Assistant',
      'Conversational AI',
      'LLM Integration',
      'Knowledge-Based Assistant',
      'AI Automation',
    ],
  },

  {
    category: 'DevOps & Tools',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'CI/CD',
      'Linux',
      'VS Code',
      'Postman',
      'npm',
      'pnpm',
      'Vercel',
    ],
  },
];


/* =========================================================
   PROJECTS
========================================================= */

export const projects: Project[] = [

  {
    id: 'aplikasi-support-newapkt',

    title: 'Aplikasi Support NewAPKT',

    description:
      'A full-stack support application designed to assist application support and operational processes within the APKT ecosystem. The system provides data management, troubleshooting support, cleansing processes, transaction handling, and backend services for operational needs.',

    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Go',
      'PostgreSQL',
      'GORM',
      'REST API',
      'Docker',
    ],

    // imageUrl: '/projects/newapkt-support.png',
     imageUrl: '/projects/project-alpha.png',
  },

  {
    id: 'apkt-outage-restoration',

    title: 'APKT Outage & Restoration Support',

    description:
      'Application support solution for outage and restoration processes, including validation, transaction handling, data backup, status updates, business-rule processing, and integration with APKT transactional data.',

    techStack: [
      'Next.js',
      'React',
      'Go',
      'PostgreSQL',
      'GORM',
      'REST API',
    ],

    // imageUrl: '/projects/apkt-outage.png',
    imageUrl: '/projects/project-beta.png',
  },

  {
    id: 'national-scada-integration',

    title: 'National SCADA Integration',

    description:
      'System integration solution supporting outage events from SCADA systems into enterprise applications through event processing, data validation, Kafka messaging, and outage workflow integration.',

    techStack: [
      'Go',
      'PostgreSQL',
      'Apache Kafka',
      'REST API',
      'SCADA',
      'System Integration',
    ],

    // imageUrl: '/projects/scada-integration.png',
    imageUrl: '/projects/project-beta.png',
  },

  {
    id: 'ai-virtual-assistant',

    title: 'AI-Powered Virtual Assistant',

    description:
      'An AI-powered Virtual Assistant concept designed to help users access information, interact with application data, answer questions, and support repetitive operational tasks through a conversational interface.',

    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'AI',
      'LLM',
      'REST API',
      'PostgreSQL',
    ],

    // imageUrl: '/projects/ai-virtual-assistant.png',
     imageUrl: '/projects/project-alpha.png',
  },
];


/* =========================================================
   PROFESSIONAL EXPERIENCE
========================================================= */

export const experiences: Experience[] = [

  {
    id: 'exp-artha',

    company: 'PT. Artha Kreasi Utama',

    role: 'Support Aplikasi Portal SCADA Nasional - PLN',

    period: '2025 - Sekarang',

    description: [
      'Provide application support for the National SCADA Portal used within PLN and PLN Icon Plus.',
      'Analyze application issues, investigate system behavior, and troubleshoot problems reported by users.',
      'Support application monitoring, testing, maintenance, and system improvement activities.',
      'Work with databases, APIs, backend services, and system integrations to identify and resolve technical issues.',
      'Analyze data flow and application processes to support reliable system operations.',
      'Collaborate with development teams and stakeholders to ensure application reliability and effective problem resolution.',
    ],
  },

  {
    id: 'exp-dutagaruda',

    company: 'PT. Dutagaruda Piranti Prima',

    role: 'Support Aplikasi APKT - PLN',

    period: '2023 - 2025',

    description: [
      'Provided application support for APKT (Aplikasi Pengaduan dan Keluhan Terpadu) used within PLN and PLN Icon Plus.',
      'Handled user-reported issues by analyzing application behavior, identifying root causes, and providing appropriate solutions.',
      'Supported application monitoring, troubleshooting, testing, and maintenance activities.',
      'Analyzed application data and processes to identify operational issues.',
      'Coordinated with development and technical teams to resolve incidents and ensure application reliability.',
    ],
  },

  {
    id: 'exp-mitra-utama',

    company: 'PT. Mitra Utama Solusi Telematika',

    role: 'Support Aplikasi APKT - PLN',

    period: '2020 - 2023',

    description: [
      'Provided application support for APKT (Aplikasi Pengaduan dan Keluhan Terpadu) for PLN and PLN Icon Plus.',
      'Analyzed and investigated application problems reported by users and provided technical solutions.',
      'Supported application availability and functionality for PLN operational activities.',
      'Performed troubleshooting, application testing, and maintenance activities.',
      'Collaborated with technical teams and stakeholders to resolve application issues and improve system reliability.',
    ],
  },

  {
    id: 'exp-mgs-support',

    company: 'PT. MGS (Mega Giga Solusindo)',

    role: 'Support Aplikasi APKT - PLN',

    period: '2018 - 2020',

    description: [
      'Provided application support for APKT (Aplikasi Pengaduan dan Keluhan Terpadu) used by PLN and PLN Icon Plus.',
      'Analyzed application issues reported by users, investigated root causes, and provided appropriate solutions.',
      'Monitored application functionality and ensured the system operated according to business and operational requirements.',
      'Supported application maintenance and troubleshooting activities.',
      'Coordinated with technical and development teams to resolve application issues and improve system reliability.',
    ],
  },

  {
    id: 'exp-swadarma',

    company: 'PT. Swadharma Sarana Informatika - Cabang Purwokerto',

    role: 'Staff Unit Teknisi',

    period: '2017 - 2018',

    description: [
      'Performed maintenance and preventive troubleshooting for BNI ATMs in the Purwokerto area.',
      'Handled technical issues and ensured ATM devices remained operational and available for users.',
      'Conducted on-site technical inspections, maintenance, and troubleshooting according to operational procedures.',
    ],
  },

  {
    id: 'exp-mgs-implementor',

    company: 'PT. MGS (Mega Giga Solusindo)',

    role: 'Implementor Aplikasi APKT - PLN',

    period: '2017',

    description: [
      'Implemented the APKT (Aplikasi Pengaduan dan Keluhan Terpadu) application for PLN operational units.',
      'Assisted PLN units during application implementation and ensured the system was properly deployed and ready for operational use.',
      'Provided technical assistance and guidance to users during the application implementation process.',
      'Supported users in understanding application workflows and resolving initial implementation issues.',
    ],
  },
];