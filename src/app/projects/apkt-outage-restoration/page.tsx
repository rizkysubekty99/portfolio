import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../../../data/portfolio';
import styles from '../case-study.module.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'APKT Outage & Restoration Support | Rizky Subekty',
    description:
      'Incident response and restoration support for application availability issues, including monitoring, investigation, coordination, technical updates, and service recovery.',
    openGraph: {
      title: 'APKT Outage & Restoration Support | Rizky Subekty',
      description:
        'Incident response and restoration support for application availability issues.',
    },
  };
}

export default function APKTOutageRestoration() {
  const project = projects.find((p) => p.slug === 'apkt-outage-restoration')!;

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
            <span className={styles.badgeViolet}>{project.projectType}</span>
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
              When application availability is compromised, the impact extends beyond the technical layer — it affects operations teams, customer-facing services, and business continuity. This project focused on incident response and restoration support for the APKT application, ensuring that service disruptions were handled swiftly, communication remained clear, and the system was restored to normal operation as quickly as possible.
            </p>
            <p className={styles.paragraph}>
              Incident management in a production environment requires a combination of technical skills, calm under pressure, and the ability to coordinate multiple stakeholders simultaneously.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>My Role</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              As the incident response lead for APKT, I was responsible for the full incident lifecycle: initial detection or alert, triage and severity classification, investigation and diagnosis, coordination with technical teams, restoration execution, and post-incident reporting and communication.
            </p>
            <p className={styles.paragraph}>
              I acted as the bridge between the operational teams experiencing the issue and the technical teams working on the fix, ensuring that both sides had the information they needed to act effectively.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Incident Handling</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              Each incident followed a structured handling process: upon receiving an alert or user report, I first assessed the severity and scope to determine the appropriate response level. Critical incidents affecting core functionality were escalated immediately, while lower-severity issues were tracked and resolved within standard SLAs.
            </p>
            <p className={styles.paragraph}>
              During active incidents, I coordinated technical bridge calls, facilitated communication between teams, and provided regular status updates to management and stakeholders. I ensured that every action taken was documented in real time for audit and post-incident review purposes.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Troubleshooting Approach</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              My approach to incident troubleshooting was systematic: identify affected components through monitoring dashboards and user reports, isolate the failure point by reviewing logs and system metrics, determine the root cause through data correlation and pattern analysis, apply the appropriate remediation, and verify recovery through functional testing.
            </p>
            <p className={styles.paragraph}>
              Common incident scenarios included service unavailability due to backend failures, data processing interruptions from Kafka consumer lag or failures, database connection pool exhaustion, and integration failures with downstream systems.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Areas</h2>
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
              Through structured incident management and coordinated response efforts, critical application outages were resolved with improved response times. Regular post-incident reviews helped identify recurring patterns and systemic issues, leading to proactive improvements in monitoring and system resilience.
            </p>
            <p className={styles.paragraph}>
              This experience strengthened my skills in high-pressure troubleshooting, stakeholder communication, and cross-team coordination in enterprise environments.
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
