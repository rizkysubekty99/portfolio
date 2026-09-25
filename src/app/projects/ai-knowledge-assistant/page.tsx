import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../../../data/portfolio';
import styles from '../case-study.module.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI Knowledge Assistant | Rizky Subekty',
    description:
      'Personal AI project using Ollama, Open WebUI, Qdrant, and RAG to build a local technical knowledge assistant for application troubleshooting.',
    openGraph: {
      title: 'AI Knowledge Assistant | Rizky Subekty',
      description:
        'Building a local AI assistant using Ollama, Open WebUI, Qdrant, and RAG to retrieve technical knowledge.',
    },
  };
}

export default function AIKnowledgeAssistant() {
  const project = projects.find((p) => p.slug === 'ai-knowledge-assistant')!;

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
            <span className={styles.badgeDev}>In Development</span>
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
            {project.prototypeUrl && (
              <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View Prototype
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
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

          <p className={styles.devNote}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            This is a personal project currently in active development. Live Demo and GitHub links will be added once the project reaches a shareable state.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              The AI Knowledge Assistant is a personal project focused on building a local, privacy-preserving AI assistant that can retrieve and reason over technical documentation and knowledge bases. The goal is to create a tool that can assist with application troubleshooting by combining the power of large language models with retrieval-augmented generation (RAG).
            </p>
            <p className={styles.paragraph}>
              Unlike cloud-based AI services, this project runs entirely locally using open-source models, giving full control over data and ensuring that no sensitive or technical information leaves the local environment.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Problem / Goal</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              During my work as an application support engineer, I frequently need to search through technical documentation, error logs, API references, and troubleshooting guides to diagnose and resolve issues. This process can be time-consuming, especially when information is scattered across multiple sources.
            </p>
            <p className={styles.paragraph}>
              The goal of this project is to create a centralized AI-powered knowledge assistant that can understand natural language queries, retrieve relevant technical information from a curated knowledge base, and provide accurate, context-aware responses to assist with troubleshooting tasks.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Architecture</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              The system follows a RAG (Retrieval-Augmented Generation) architecture, combining a local LLM with a vector database for efficient knowledge retrieval.
            </p>

            <div className={styles.architecture}>
              <div className={styles.archNode}>
                <span className={styles.archLabel}>User</span>
              </div>
              <div className={styles.archArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </div>
              <div className={styles.archNode}>
                <span className={styles.archLabel}>Open WebUI (Interface)</span>
              </div>
              <div className={styles.archArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </div>
              <div className={styles.archFlow}>
                <div className={styles.archRow}>
                  <div className={styles.archNode}><span className={styles.archLabel}>Ollama (Local LLM)</span></div>
                  <div className={styles.archNode}><span className={styles.archLabel}>RAG Pipeline</span></div>
                </div>
                <div className={styles.archArrow} style={{transform: 'rotate(90deg)'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </div>
                <div className={styles.archNode}><span className={styles.archLabel}>Qdrant Vector Database</span></div>
                <div className={styles.archArrow} style={{transform: 'rotate(90deg)'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </div>
                <div className={styles.archNode}><span className={styles.archLabel}>Technical Knowledge Base</span></div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Components</h2>
            <div className={styles.divider} />
            <div className={styles.componentGrid}>
              <div className={styles.componentCard}>
                <h4 className={styles.componentTitle}>Ollama</h4>
                <p className={styles.componentDesc}>Runs open-source LLMs locally (such as Llama 3, Mistral, or Qwen) without external API dependencies.</p>
              </div>
              <div className={styles.componentCard}>
                <h4 className={styles.componentTitle}>Open WebUI</h4>
                <p className={styles.componentDesc}>Provides an intuitive web interface for interacting with the LLM, supporting conversation history and model management.</p>
              </div>
              <div className={styles.componentCard}>
                <h4 className={styles.componentTitle}>Qdrant</h4>
                <p className={styles.componentDesc}>High-performance vector database for storing and searching embedded technical documents with semantic similarity.</p>
              </div>
              <div className={styles.componentCard}>
                <h4 className={styles.componentTitle}>RAG Pipeline</h4>
                <p className={styles.componentDesc}>Retrieves relevant documents from the knowledge base and injects them into the LLM prompt to improve answer accuracy.</p>
              </div>
              <div className={styles.componentCard}>
                <h4 className={styles.componentTitle}>Knowledge Base</h4>
                <p className={styles.componentDesc}>Curated collection of technical documentation, error logs, API references, and troubleshooting guides in various formats.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Current Development</h2>
            <div className={styles.divider} />
            <p className={styles.paragraph}>
              The core RAG pipeline is functional, with documents successfully chunked, embedded, and stored in Qdrant. The system can retrieve relevant context from the knowledge base and generate responses that reference source documents.
            </p>
            <p className={styles.paragraph}>
              Currently working on improving retrieval accuracy through better chunking strategies and embedding model selection, as well as refining the prompt engineering to reduce hallucinations and improve the relevance of responses for technical troubleshooting.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Future Development</h2>
            <div className={styles.divider} />
            <div className={styles.futureList}>
              <div className={styles.futureItem}>
                <div className={styles.futureBadge} data-status="planned">Planned</div>
                <div>
                  <strong>Tool Calling</strong>
                  <p>Enable the assistant to call external tools, APIs, and scripts to perform real-world actions based on user requests.</p>
                </div>
              </div>
              <div className={styles.futureItem}>
                <div className={styles.futureBadge} data-status="planned">Planned</div>
                <div>
                  <strong>Database Query Integration</strong>
                  <p>Allow the assistant to execute read-only database queries to provide real-time data context during troubleshooting.</p>
                </div>
              </div>
              <div className={styles.futureItem}>
                <div className={styles.futureBadge} data-status="planned">Planned</div>
                <div>
                  <strong>API Integration</strong>
                  <p>Connect the assistant to monitoring systems, ticketing platforms, and documentation APIs for comprehensive assistance.</p>
                </div>
              </div>
              <div className={styles.futureItem}>
                <div className={styles.futureBadge} data-status="planned">Planned</div>
                <div>
                  <strong>n8n Workflow Automation</strong>
                  <p>Integrate with n8n to trigger automated workflows and processes based on AI-generated recommendations.</p>
                </div>
              </div>
              <div className={styles.futureItem}>
                <div className={styles.futureBadge} data-status="planned">Planned</div>
                <div>
                  <strong>Telegram Bot</strong>
                  <p>Deploy the assistant as a Telegram bot for quick, mobile-accessible troubleshooting assistance on the go.</p>
                </div>
              </div>
              <div className={styles.futureItem}>
                <div className={styles.futureBadge} data-status="planned">Planned</div>
                <div>
                  <strong>AI Agent</strong>
                  <p>Evolve the assistant into a fully autonomous AI agent capable of multi-step reasoning and task execution.</p>
                </div>
              </div>
            </div>
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
