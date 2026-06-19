import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "> boot_sequence: ai_engineer.aniket()";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="section flex-center crt" style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Terminal Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2rem' }}
        >
          <div className="font-mono text-accent" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
            <Terminal size={18} />
            <span>
              {text}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ display: 'inline-block', width: '8px', height: '1.2rem', background: 'var(--accent)', marginLeft: '4px', verticalAlign: 'middle' }}
              />
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isTyping ? 0 : 1, y: isTyping ? 20 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Aniket <span className="gradient-text">Yadav</span>
          </h1>
          
          <h2 className="text-secondary" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 400, marginBottom: '2rem' }}>
            Software Developer <span className="text-muted">|</span> AI Engineer
          </h2>
          
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '3rem' }}>
            Building AI-powered products that solve real-world problems.
            Specializing in scalable architecture, machine learning models, and intuitive interfaces.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ 
              padding: '0.8rem 2rem', 
              background: 'var(--text-primary)', 
              color: 'var(--bg-color)', 
              borderRadius: 'var(--border-radius)',
              fontWeight: 600,
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              View Work
            </a>
            <a href="#contact" className="glass-card" style={{ 
              padding: '0.8rem 2rem',
              color: 'var(--text-primary)',
              fontWeight: 600
            }}>
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isTyping ? 0 : 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
