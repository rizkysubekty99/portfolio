import React from 'react';
import Link from 'next/link';
import { projects } from '../../data/portfolio';
import ProjectCard from '../../components/ProjectCard';
import styles from './projects.module.css';

export const metadata = {
  title: 'Projects | Rizky Subekty',
  description: 'Selected projects by Rizky Subekty — application support, system integration, and AI automation.',
};

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className={styles.heroTitle}>Selected Projects</h1>
          <p className={styles.heroDesc}>
            A collection of professional work and personal projects focused on application support, system integration, and AI automation.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            accentVariant={idx}
          />
        ))}
      </div>
    </div>
  );
}
