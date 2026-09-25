import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../../../data/portfolio';
import styles from '../case-study.module.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'National SCADA Integration | Rizky Subekty',
    description:
      'Application and system integration support involving data flow, APIs, databases, messaging infrastructure, and coordination across technical teams.',
    openGraph: {
      title: 'National SCADA Integration | Rizky Subekty',
      description:
        'Application and system integration support involving data flow, APIs, databases, and messaging infrastructure.',
    },
  };
}

export default function NationalSCADAIntegration() {
  const project = projects.find((p) => p.slug === 'national-scada-integration')!;

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/projects" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Projects
          </Link>

          <div className={styles.badges}>
            <span className={styles.badgeMagenta}>{project.projectType}</span>
            <span className={styles.badgeStatus}>{project.status}</span>
          </div>

          <p className={styles.category}>{project.category}</p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.shortDesc}>{project.shortDescription}</p>

          <div className={styles.techList}>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className={styles.techBadge}>{tech}</span>
            ))}
          </div>

          <div className={styles.links}>
            <Link href="/projects" className={`btn btn-secondary ${styles.caseStudyLink}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              The National SCADA (Supervisory Control and Data Acquisition) system is a critical infrastructure platform used by PLN to monitor and control electrical grid operations across Indonesia. Supporting this system required a comprehensive understanding of data integration flows, real-time data processing, and the coordination of multiple technical teams responsible for different layers of the system.
            </p>
            <p className={styles.paragraph}>
              My work on this project involved providing application and integration support to ensure smooth data flow between the SCADA system and downstream applications, as well as troubleshooting issues that affected data accuracy, timeliness, or system availability.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>My Role</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              I was responsible for monitoring the health of data flows between the SCADA system and integrated applications, investigating data discrepancies or processing failures, and coordinating with network, infrastructure, and development teams to resolve issues that impacted system reliability.
            </p>
            <p className={styles.paragraph}>
              A key part of my role was translating operational impacts (such as missing data or delayed updates) into actionable technical investigations, and communicating findings back to operational stakeholders.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>System Areas</h2>
            <div className={styles.divider} />
            <ul className={styles.challengeList}>
              <li>SCADA data collection and real-time monitoring systems</li>
              <li>API-based data transmission between operational systems</li>
              <li>Database storage and retrieval for historical and real-time data</li>
              <li>Kafka messaging for asynchronous data distribution</li>
              <li>Integration with downstream applications consuming SCADA data</li>
              <li>Network and infrastructure layer supporting data transmission</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Data / Integration Flow</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              The SCADA system generates high volumes of operational data that flows through multiple processing stages before being consumed by downstream applications. My responsibility included ensuring this flow remained reliable and investigating issues at any point in the chain.
            </p>

            <div className={styles.architecture}>
              <div className={styles.archNode}>
                <span className={styles.archLabel}>SCADA / Field Systems</span>
              </div>
              <div className={styles.archArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </div>
              <div className={styles.archNode}>
                <span className={styles.archLabel}>API / Integration Layer</span>
              </div>
              <div className={styles.archArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </div>
              <div className={styles.archFlow}>
                <div className={styles.archRow}>
                  <div className={styles.archNode}><span className={styles.archLabel}>Database / Data Processing</span></div>
                  <div className={styles.archNode}><span className={styles.archLabel}>Kafka Messaging</span></div>
                </div>
                <div className={styles.archArrow} style={{transform: 'rotate(90deg)'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </div>
                <div className={styles.archNode}><span className={styles.archLabel}>Downstream Applications</span></div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Troubleshooting Approach</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              Troubleshooting integration issues in a multi-system environment required a methodical approach: starting from the end-user impact, tracing backwards through the data flow to identify the failure point, and coordinating with the responsible team for resolution.
            </p>
            <p className={styles.paragraph}>
              I utilized monitoring tools to track data flow health, log analysis to identify processing errors, database queries to verify data integrity, and Kafka consumer monitoring to detect bottlenecks or failures in asynchronous processing.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Environment</h2>
            <div className={styles.divider} />
            <div className={styles.techGrid}>
              {project.techStack.map((tech, idx) => (
                <div key={idx} className={styles.techItem}>
                  <span className={styles.techDot} />
                  {tech}
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Result</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              By actively monitoring data flows and establishing clear escalation paths, critical data delivery issues were identified and resolved faster. The coordination framework established between teams improved the overall reliability of the national SCADA integration, reducing the mean time to detection for data-related incidents.
            </p>
            <p className={styles.paragraph}>
              This project reinforced the importance of end-to-end visibility across integrated systems and the value of cross-team collaboration in maintaining complex national infrastructure.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technology</h2>
            <div className={styles.divider} />
            <div className={styles.techGrid}>
              {project.techStack.map((tech, idx) => (
                <div key={idx} className={styles.techItem}>
                  <span className={styles.techDot} />
                  {tech}
                </div>
              ))}
            </div>
          </section>

        </div>

        <div className={styles.bottomNav}>
          <Link href="/projects" className={`btn btn-secondary`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
