import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="section" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            borderTop: '1px solid var(--border-color)', 
            paddingTop: '4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}
        >
          <div>
            <div className="font-mono text-accent" style={{ marginBottom: '1rem' }}>
              {">"} establish_connection()
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Let's Connect</h2>
            <p className="text-secondary font-mono" style={{ maxWidth: '600px', lineHeight: 1.8 }}>
              After years of parsing data and training models, a secure channel to communicate with Aniket Yadav has been established...
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="mailto:aniketyadav22work@gmail.com" className="glass-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mail className="text-accent" />
              <span>aniketyadav22work@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/aniket-yadav-work22/" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaLinkedin className="text-accent-secondary" />
            </a>
            <a href="https://github.com/aniketyadav-22" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaGithub className="text-accent-secondary" />
            </a>
          </div>

          <div className="font-mono text-muted" style={{ 
            marginTop: '4rem', 
            paddingTop: '2rem', 
            borderTop: '1px dashed var(--border-color)',
            fontSize: '0.85rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{">"} boot_sequence: aniket.footer</div>
              <div style={{ marginBottom: '0.5rem' }}>{">"} system_status: ACTIVE</div>
              <div>{">"} location: INDIA</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p>© {new Date().getFullYear()} Aniket Yadav</p>
              <p>Software Developer | AI Engineer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
