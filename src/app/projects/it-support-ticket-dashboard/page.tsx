import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../../../data/portfolio';
import styles from '../case-study.module.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'IT Support Ticket Dashboard | Rizky Subekty',
    description:
      'IT Support Ticket Dashboard portfolio project demonstrating ticket management, incident tracking, dashboard visualization, and application support workflows.',
    openGraph: {
      title: 'IT Support Ticket Dashboard | Rizky Subekty',
      description:
        'IT Support Ticket Dashboard portfolio project demonstrating ticket management, incident tracking, dashboard visualization, and application support workflows.',
    },
  };
}

export default function ITSupportTicketDashboard() {
  const project = projects.find((p) => p.slug === 'it-support-ticket-dashboard')!;

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
            <span className={styles.badgeCyan}>{project.projectType}</span>
            <span className={styles.badgeStatus}>Live Demo Available</span>
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
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>
                </svg>
              </a>
            )}
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

          {/* Overview */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              The IT Support Ticket Dashboard is a portfolio project designed to demonstrate how IT support tickets can be monitored and managed through a centralized web dashboard. This project showcases practical application support skills through a user-friendly interface for tracking incidents, priorities, statuses, categories, and resolution progress.
            </p>
            <p className={styles.paragraph}>
              Built as a public portfolio project, it serves as a demonstration of full-stack development capabilities combined with a deep understanding of IT support workflows and ticket management processes.
            </p>
          </section>

          {/* Problem / Goal */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Problem / Goal</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              IT support teams need a centralized interface to monitor tickets, priorities, statuses, categories, and resolution progress. A well-designed dashboard enables support engineers to quickly assess the current state of incoming incidents, identify bottlenecks, and ensure timely resolution.
            </p>
            <p className={styles.paragraph}>
              The goal of this project was to build a practical demonstration of ticket management and monitoring workflows through a modern, responsive web interface that reflects real-world IT support operations.
            </p>
          </section>

          {/* My Role */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>My Role</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              As the sole developer of this portfolio project, I handled all aspects of the design and implementation:
            </p>
            <ul className={styles.challengeList}>
              <li>UI/dashboard development</li>
              <li>Application logic and state management</li>
              <li>Ticket workflow design</li>
              <li>Data presentation and visualization</li>
              <li>Frontend/backend integration</li>
              <li>Troubleshooting-oriented design principles</li>
            </ul>
          </section>

          {/* Features */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Features</h2>
            <div className={styles.divider} />
            <ul className={styles.challengeList}>
              <li>Ticket dashboard with overview of all support tickets</li>
              <li>Ticket status tracking (Open, In Progress, Resolved, Closed)</li>
              <li>Priority level management (Low, Medium, High, Critical)</li>
              <li>Category-based ticket organization</li>
              <li>Ticket filtering and search functionality</li>
              <li>Detailed ticket view with full information</li>
              <li>Status visualization and summary statistics</li>
              <li>Responsive design for various screen sizes</li>
            </ul>
          </section>

          {/* Technical Implementation */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Implementation</h2>
            <div className={styles.divider} />
            <div className={styles.architecture}>
              <div className={styles.archNode}>
                <span className={styles.archLabel}>User / Support Engineer</span>
              </div>
              <div className={styles.archArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </div>
              <div className={styles.archNode}>
                <span className={styles.archLabel}>Next.js Web Interface</span>
              </div>
              <div className={styles.archArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </div>
              <div className={styles.archFlow}>
                <div className={styles.archRow}>
                  <div className={styles.archNode}><span className={styles.archLabel}>React Components</span></div>
                  <div className={styles.archNode}><span className={styles.archLabel}>TypeScript</span></div>
                  <div className={styles.archNode}><span className={styles.archLabel}>State Management</span></div>
                </div>
              </div>
            </div>

            <p className={styles.paragraph}>
              The dashboard is built with Next.js and React, utilizing TypeScript for type safety. The interface provides real-time status visualization, summary statistics, and comprehensive ticket filtering capabilities.
            </p>
          </section>

          {/* Workflow */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Ticket Workflow</h2>
            <div className={styles.divider} />
            <div className={styles.workflowDiagram}>
              <div className={styles.workflowStep}>
                <div className={styles.workflowIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                </div>
                <span>Ticket Created</span>
              </div>
              <div className={styles.workflowArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className={styles.workflowStep}>
                <div className={styles.workflowIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                <span>Ticket Assigned</span>
              </div>
              <div className={styles.workflowArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className={styles.workflowStep}>
                <div className={styles.workflowIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <span>Investigation</span>
              </div>
              <div className={styles.workflowArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className={styles.workflowStep}>
                <div className={styles.workflowIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <span>Resolution</span>
              </div>
              <div className={styles.workflowArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className={styles.workflowStep}>
                <div className={styles.workflowIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                </div>
                <span>Closed</span>
              </div>
            </div>
          </section>

          {/* Result */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Result</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              Provides a practical demonstration of an IT support ticket management and monitoring workflow through a centralized web dashboard. The project showcases full-stack development capabilities combined with real-world IT support understanding.
            </p>
            <p className={styles.paragraph}>
              The dashboard serves as a portfolio piece demonstrating skills in application support, ticket management, incident tracking, dashboard development, and data visualization.
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
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>
              </svg>
              View Live Demo
            </a>
          )}
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
