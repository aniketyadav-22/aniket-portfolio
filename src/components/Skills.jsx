import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Award, Trophy, Code } from 'lucide-react';

const Skills = () => {
  const techStack = [
    "Python", "C++", "JavaScript", "SQL", 
    "Scikit-learn", "LangChain", "LangGraph", "RAG",
    "FastAPI", "React", "Django", "Streamlit",
    "MySQL", "ChromaDB", "Docker", "Git/GitHub"
  ];

  const achievements = [
    { title: "LeetCode", desc: "Solved 250+ DSA problems with a max rating of 1523.", icon: <Code /> },
    { title: "CodeChef", desc: "Achieved a max rating of 1195.", icon: <Terminal /> },
    { title: "GeeksforGeeks", desc: "Earned a coding score of 174.", icon: <Trophy /> }
  ];

  const certifications = [
    "AWS Certified AI Practitioner",
    "AWS Academy Graduate - Cloud Foundations (2025)",
    "DeepLearning.AI: Advanced Learning Algorithms (2025)",
    "Google: Cybersecurity Professional Certificate (2024)"
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="font-mono text-accent" style={{ marginBottom: '1rem' }}>
            {">"} sys.get_capabilities()
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Skills & Metrics</h2>
        </motion.div>

        {/* Marquee Container */}
        <div style={{ marginBottom: '5rem', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--bg-color), transparent)', zIndex: 2 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--bg-color), transparent)', zIndex: 2 }} />
          
          <div className="marquee-container">
            <div className="marquee-content">
              {techStack.map((tech, i) => (
                <div key={i} className="font-mono" style={{ 
                  fontSize: '1.5rem', 
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                  padding: '1rem 2rem',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border-color)'
                }}>
                  {tech}
                </div>
              ))}
            </div>
            {/* Duplicate for infinite loop */}
            <div className="marquee-content" aria-hidden="true">
              {techStack.map((tech, i) => (
                <div key={`dup-${i}`} className="font-mono" style={{ 
                  fontSize: '1.5rem', 
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                  padding: '1rem 2rem',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border-color)'
                }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {/* Achievements */}
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Trophy className="text-accent" /> Achievements
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {achievements.map((achieve, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card"
                  style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                >
                  <div style={{ color: 'var(--accent-secondary)' }}>
                    {achieve.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{achieve.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{achieve.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Award className="text-accent" /> Certifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {certifications.map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card font-mono"
                  style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}
                >
                  <div style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    {cert}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
