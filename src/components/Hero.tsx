'use client';

import React from 'react';
import { personalInfo } from '../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
 
  return (
    <section id="home" className={styles.hero}>
      <div className="section-container">
        <div className={styles.grid}>
          <div className={`${styles.introText} ${styles.fadeUp}`}>
            <span className={styles.badge}>Welcome to my portfolio</span>
            <h1 className={styles.title}>
              Hi, I&apos;m <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <h2 className={styles.titleSecondary}>
              {personalInfo.title}
            </h2>
            <p className={styles.description}>
              {personalInfo.bio}
            </p>
            <p className={styles.subtitle}>
              {personalInfo.subtitle}
            </p>
            <p className={styles.location}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {personalInfo.location}
            </p>
            <div className={styles.actions}>
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>

              <a href="#contact" className="btn btn-secondary">
                Let&apos;s Talk
              </a>
            </div>
          </div>

          <div className={styles.avatarWrapper}>
            <div className={styles.glowRing}></div>
            <div className={styles.avatarContainer}>
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className={styles.avatarImg}
                loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
