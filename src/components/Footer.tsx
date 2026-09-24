'use client';

import React from 'react';
import { personalInfo } from '../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.tagline}>
            Building practical solutions with technology, automation, and AI.
          </p>
          <span className={styles.copyright}>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </span>
        </div>
        <a href="#home" onClick={handleScrollToTop} className={styles.topLink} aria-label="Scroll to top of page">
          Back to Top
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
