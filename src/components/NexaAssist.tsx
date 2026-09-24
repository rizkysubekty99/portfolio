'use client';

import React from 'react';
import styles from './NexaAssist.module.css';

export default function NexaAssist() {
  return (
    <section id="nexaassist" className={styles.section}>
      <div className="section-container">
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <span className={styles.label}>Business / Digital Service Initiative</span>
            <h2 className={styles.title}>NexaAssist</h2>
            <p className={styles.description}>
              Building a remote digital support initiative that combines technical support, 
              virtual assistance, website development, SEO, and AI automation for businesses.
            </p>
            <p className={styles.subtext}>
              Explore the full service offering and business portfolio on the NexaAssist website.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Technical Support</span>
              <span className={styles.tag}>Digital Services</span>
              <span className={styles.tag}>AI & Automation</span>
            </div>
            <a 
              href="https://nexaassist-alpha.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
              aria-label="Visit NexaAssist website"
            >
              Visit NexaAssist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
            </a>
          </div>
          <div className={styles.bannerDecoration}>
            <div className={styles.glowOrb}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
