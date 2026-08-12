'use client';

import React from 'react';
import { experiences } from '../data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.item}>
              <div className={styles.dot}></div>

              <div className="glass-card">
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <span className={styles.company}>{exp.company}</span>
                  </div>

                  <span className={styles.period}>{exp.period}</span>
                </div>

                <ul className={styles.descList}>
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className={styles.descItem}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}