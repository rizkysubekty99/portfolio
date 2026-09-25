import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../../../data/portfolio';
import styles from '../case-study.module.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Application Support & APKT Integration | Rizky Subekty',
    description:
      'Production application support involving incident handling, troubleshooting, data investigation, API integration, database operations, and coordination with development and infrastructure teams.',
    openGraph: {
      title: 'Application Support & APKT Integration | Rizky Subekty',
      description:
        'Production application support involving incident handling, troubleshooting, data investigation, API integration, database operations, and coordination.',
    },
  };
}

export default function ApplicationSupportAPKT() {
  const project = projects.find((p) => p.slug === 'application-support-apkt')!;

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/projects" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Projects
          </Link>

          <div className={styles.badges}>
            <span className={styles.badgeCyan}>{project.projectType}</span>
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

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.contentInner}>

          {/* Overview */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              The APKT (Aplikasi Pendataan Ketenagalistrikan) application is a critical production system used by PLN (Perusahaan Listrik Negara) for electricity data management. As part of the application support team, I was responsible for maintaining the system&apos;s availability, reliability, and performance in a production environment serving operational users across multiple business units.
            </p>
            <p className={styles.paragraph}>
              This role required a deep understanding of the application&apos;s architecture, data flows, integration points, and the operational processes it supports. The work involved both reactive incident response and proactive system health monitoring.
            </p>
          </section>

          {/* My Role */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>My Role</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              As an Application Support Engineer, my primary responsibility was to ensure the APKT application remained operational and reliable for end users. This encompassed a wide range of activities from first-line incident triage to coordinating with development teams on complex technical issues.
            </p>
            <p className={styles.paragraph}>
              I served as the technical point of contact between operational teams and technical teams, translating business impacts into technical terms and vice versa.
            </p>
          </section>

          {/* Challenges */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Challenges</h2>
            <div className={styles.divider} />
            <ul className={styles.challengeList}>
              <li>Handling incidents with limited system visibility in a production environment where downtime has immediate operational impact</li>
              <li>Investigating issues that span multiple layers — frontend, backend API, database, and external integrations</li>
              <li>Coordinating across teams (development, infrastructure, network) with different priorities and timelines</li>
              <li>Managing communication with stakeholders during high-severity incidents while simultaneously working on resolution</li>
              <li>Working with legacy components while supporting evolving business requirements</li>
            </ul>
          </section>

          {/* What I Did */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What I Did</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              My day-to-day responsibilities included receiving and triaging incident reports from users, performing initial diagnosis to determine the scope and severity of issues, and either resolving them directly or escalating to the appropriate team with clear technical context.
            </p>
            <p className={styles.paragraph}>
              I conducted data investigation using SQL queries against PostgreSQL databases to trace data inconsistencies, identify processing failures, and verify the correctness of business logic in stored procedures. I also monitored Kafka message queues to detect stuck consumers, failed message processing, and integration bottlenecks between the APKT system and downstream systems.
            </p>
            <p className={styles.paragraph}>
              When investigating API-related issues, I analyzed request/response payloads, traced authentication and authorization flows, and coordinated with the API development team to identify and resolve integration bugs. Docker container logs were regularly reviewed to trace application behavior, identify error patterns, and spot performance degradation before it escalated.
            </p>
          </section>

          {/* Technical Environment */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Environment</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              The APKT system operates in a containerized environment managed with Docker, with backend services written in Go communicating via REST APIs. Data is stored in PostgreSQL databases, and asynchronous message processing is handled through Kafka for inter-service communication.
            </p>

            <div className={styles.architecture}>
              <div className={styles.archNode}>
                <span className={styles.archLabel}>User / Operator</span>
              </div>
              <div className={styles.archArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </div>
              <div className={styles.archNode}>
                <span className={styles.archLabel}>APKT Application (Go)</span>
              </div>
              <div className={styles.archFlow}>
                <div className={styles.archRow}>
                  <div className={styles.archNode}><span className={styles.archLabel}>PostgreSQL Database</span></div>
                  <div className={styles.archNode}><span className={styles.archLabel}>Kafka Messaging</span></div>
                  <div className={styles.archNode}><span className={styles.archLabel}>REST API Layer</span></div>
                </div>
                <div className={styles.archArrow} style={{transform: 'rotate(90deg)'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </div>
                <div className={styles.archNode}><span className={styles.archLabel}>Docker Container Runtime</span></div>
              </div>
            </div>
          </section>

          {/* Troubleshooting Approach */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Troubleshooting Approach</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              My troubleshooting methodology followed a structured approach: first identifying the symptoms and user impact, then narrowing down the affected components through log analysis and data queries, isolating the root cause, implementing a fix or escalation, and finally documenting the issue and resolution for knowledge sharing.
            </p>
            <p className={styles.paragraph}>
              I leveraged tools such as Docker logs, PostgreSQL query analysis, Kafka consumer group monitoring, and API endpoint testing to systematically isolate and resolve issues.
            </p>
          </section>

          {/* Result */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Result</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              Through consistent application support work, I contributed to maintaining high application availability for PLN operational teams. By establishing structured troubleshooting procedures and improving communication between teams, resolution times for critical incidents were reduced. The documentation and knowledge base I helped build enabled faster diagnosis of recurring issues.
            </p>
            <p className={styles.paragraph}>
              This role deepened my expertise in production support, Go backend systems, PostgreSQL database operations, Kafka messaging, and Docker container management in a real-world enterprise environment.
            </p>
          </section>

          {/* Technology */}
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
