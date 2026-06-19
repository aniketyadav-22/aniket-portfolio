import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const education = [
    {
      institution: "KIET Group of Institutions (A.K.T.U)",
      degree: "Bachelor of Technology in Computer Science and Engineering (Artificial Intelligence)",
      year: "Graduation: 2027",
      location: "Delhi NCR, India",
      score: "74.83%"
    },
    {
      institution: "Dalimss Sunbeam Schools (C.B.S.E)",
      degree: "Intermediate",
      year: "2022",
      location: "Varanasi, India",
      score: "80%"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="font-mono text-accent" style={{ marginBottom: '1rem' }}>
            {">"} fetch_module: about.json
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Background & Education</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card"
              style={{ padding: '2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(0, 255, 102, 0.1)', borderRadius: '12px', color: 'var(--accent)' }}>
                  <BookOpen size={24} />
                </div>
                <h3 style={{ fontSize: '1.3rem', lineHeight: 1.4 }}>{edu.institution}</h3>
              </div>
              
              <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.1rem', marginBottom: '1rem' }}>
                {edu.degree}
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} className="text-muted" />
                  <span>{edu.year}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} className="text-muted" />
                  <span>{edu.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={16} className="text-muted" />
                  <span>Percentage: <span className="text-accent">{edu.score}</span></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
