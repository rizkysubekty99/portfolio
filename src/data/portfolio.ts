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

export const personalInfo: PersonalInfo = {
  name: 'Rizky Subekty', title: 'Full-Stack Engineer',
  bio: 'A passionate Full-Stack Engineer focused on building scalable, high-performance, and reliable web applications. Experienced in developing modern frontend interfaces, robust backend systems, APIs, databases, and distributed applications using a wide range of modern technologies.',
  location: 'Jakarta, Indonesia',
  avatarUrl: '/developer_avatar.png',
  email: 'rizkysubekty99@gmail.com',
  socials:
  {
    github: 'https://github.com/rizkysubekty99',
    linkedin: 'https://linkedin.com/in/rizkysubekty/',
    twitter: 'https://twitter.com/',
    instagram: 'https://instagram.com/rizky_subekty',
  },
};

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
      'Microservices',
      'Authentication & Authorization',
      'JWT',
      'API Integration',
    ],
  },
  {
    category: 'Database & Messaging',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQL',
      'Database Design',
      'Query Optimization',
      'Apache Kafka',
      'Data Integration',
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
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'project-alpha',
    title: 'Project Alpha (E-Commerce Dashboard)',
    description: 'A real-time e-commerce analytics dashboard that visualizes sales data, user registration spikes, and inventory alerts. It features dynamic interactive charts, role-based access control, and highly optimized database queries.',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'CSS Modules'],
    githubUrl: 'https://github.com/rizkysubekty/ecommerce-dashboard',
    demoUrl: 'https://ecommerce-dashboard-demo.vercel.app',
    imageUrl: '/projects/project-alpha.png',
  },
  {
    id: 'project-alpha2',
    title: 'Project Alpha (E-Commerce Dashboard)',
    description: 'A real-time e-commerce analytics dashboard that visualizes sales data, user registration spikes, and inventory alerts. It features dynamic interactive charts, role-based access control, and highly optimized database queries.',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'CSS Modules'],
    githubUrl: 'https://github.com/rizkysubekty/ecommerce-dashboard',
    demoUrl: 'https://ecommerce-dashboard-demo.vercel.app',
    imageUrl: '/projects/project-alpha.png',
  },
  {
    id: 'project-beta',
    title: 'Project Beta (Task Management App)',
    description: 'A collaborative, real-time Kanban board application designed to streamline team project management. Users can drag-and-drop tasks, customize workflows, chat in real-time, and track progress via status charts.',
    techStack: ['Next.js', 'MongoDB', 'WebSockets', 'CSS Modules', 'TypeScript'],
    githubUrl: 'https://github.com/rizkysubekty/kanban-board',
    demoUrl: 'https://kanban-board-demo.vercel.app',
    imageUrl: '/projects/project-beta.png',
  },
];

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
      'Ensured application availability and functionality to support PLN operational activities.',
      'Collaborated with technical teams and stakeholders to troubleshoot application issues and improve system performance.',
    ],
  },

  {
    id: 'exp-mgs-support',
    company: 'PT. MGS (Mega Giga Solusindo)',
    role: 'Support Aplikasi APKT - PLN',
    period: '2018 - 2020',
    description: [
      'Provided application support for APKT (Aplikasi Pengaduan dan Keluhan Terpadu) used by PLN and PLN Icon Plus.',
      'Analyzed application issues reported by users, investigated the root causes, and provided appropriate solutions.',
      'Monitored application functionality and ensured the system operated according to business and operational requirements.',
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
      'Implemented the APKT (Aplikasi Pengaduan dan Keluhan Terpadu) application for PLN units.',
      'Assisted PLN units during application implementation and ensured the system was properly deployed and ready for operational use.',
      'Provided technical assistance and guidance to users during the application implementation process.',
    ],
  },
];
