import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Explain-My-Code",
      date: "2026",
      description: "Built an AI-powered code explanation platform using React, Vite, Django REST Framework, and Groq LLMs to generate beginner, intermediate, and expert-level code explanations across 12 programming languages. Implemented JWT authentication, smart caching, feedback collection, analytics dashboards, and history tracking with a modern glassmorphism UI and responsive design. Designed a scalable full-stack architecture with secure APIs, automated token refresh, Docker support, and PostgreSQL-ready deployment.",
      tech: ["React", "Vite", "Django REST", "Groq LLMs", "PostgreSQL", "Docker", "JWT"],
      links: { github: "https://github.com/aniketyadav-22/EXPLAIN-MY-CODE", live: "https://explain-my-code-glg33qwdw-aniketyadav22work-6105s-projects.vercel.app/" }
    },
    {
      title: "Hirelytix - AI-Powered Job Matching",
      date: "Feb 2026",
      description: "Developed an AI-powered recruitment platform automating PDF resume parsing and semantic job matching, reducing manual screening effort by 60%. Engineered a multi-agent workflow using LangGraph, secure REST APIs with JWT, and optimized MySQL queries.",
      tech: ["Python", "FastAPI", "React", "LangChain", "LangGraph", "MySQL"],
      links: { github: "https://github.com/aniketyadav-22/Hirelytix" }
    },
    {
      title: "ASKNOVA – AI RAG + Web Search Assistant",
      date: "Nov 2025",
      description: "Built a hybrid RAG + Web Search assistant using LangChain, Groq LLMs, and ChromaDB. Designed a scalable RAG pipeline supporting ingestion of 50+ documents with sub-second retrieval latency; optimized inference performance by up to 40%.",
      tech: ["Python", "Streamlit", "ChromaDB", "Groq LLMs", "HuggingFace"],
      links: { github: "https://github.com/aniketyadav-22/ASKNOVA", live: "https://asknovaai.streamlit.app/" }
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="font-mono text-accent" style={{ marginBottom: '1rem' }}>
            {">"} execute_scripts: portfolio.sh
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Featured Projects</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card"
              style={{ 
                padding: '2.5rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative line */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent)' }} />

              <div className="flex-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                <span className="font-mono text-muted" style={{ fontSize: '0.9rem' }}>{project.date}</span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '850px' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: 'auto' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={{ 
                    padding: '0.4rem 1rem', 
                    background: 'rgba(0, 240, 255, 0.05)', 
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    color: 'var(--accent-secondary)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                    <FaGithub size={20} />
                    <span>Source</span>
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                    <ExternalLink size={20} />
                    <span>Live App</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
