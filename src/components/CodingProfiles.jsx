import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      username: "aniketyadav22",
      url: "https://leetcode.com/u/aniketyadav22/",
      icon: <SiLeetcode size={32} />,
      stats: "250+ Problems Solved",
      rating: "Max Rating: 1523",
      color: "#FFA116",
    },
    {
      name: "CodeChef",
      username: "aniketyadav22",
      url: "https://www.codechef.com/users/aniketyadav22",
      icon: <SiCodechef size={32} />,
      stats: "Active Competitor",
      rating: "Max Rating: 1195",
      color: "#5B4638",
    },
  ];

  return (
    <section id="coding-profiles" className="section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="font-mono text-accent" style={{ marginBottom: '1rem' }}>
            {">"} fetch_stats: competitive_coding.json
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Coding Profiles</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'pointer',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent top border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: profile.color,
              }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: profile.color }}>
                    {profile.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{profile.name}</h3>
                    <span className="font-mono text-muted" style={{ fontSize: '0.85rem' }}>@{profile.username}</span>
                  </div>
                </div>
                <ExternalLink size={20} className="text-muted" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{
                  padding: '1rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                }}>
                  <div className="font-mono" style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 600 }}>
                    {profile.stats}
                  </div>
                </div>
                <div style={{
                  padding: '1rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                }}>
                  <div className="font-mono" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                    {profile.rating}
                  </div>
                </div>
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
