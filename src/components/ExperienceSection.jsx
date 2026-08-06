import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audioSynth';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            className="glass-panel-sm"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              marginBottom: '12px'
            }}
          >
            <Briefcase size={14} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              Career Track
            </span>
          </div>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
            Professional <span className="text-gradient">Experience</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto' }}>
            A timeline of roles, 3D graphics leadership, and high-impact engineering milestones.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              left: '11px',
              top: '10px',
              bottom: '10px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent)'
            }}
          ></div>

          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              style={{ marginBottom: '40px', position: 'relative' }}
            >
              {/* Timeline Node */}
              <div
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '4px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--accent-primary)',
                  boxShadow: '0 0 12px var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--accent-primary)'
                  }}
                ></div>
              </div>

              {/* Glass Card */}
              <div
                className="glass-panel glow-border"
                onMouseEnter={() => sounds.playHover()}
                style={{ padding: '24px', borderRadius: '20px' }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
                      {item.role}
                    </h3>
                    <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                      {item.company}
                    </div>
                  </div>

                  <div
                    className="glass-panel-sm"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  {item.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.85rem',
                        color: 'var(--text-main)'
                      }}
                    >
                      <CheckCircle size={15} color="var(--accent-tertiary)" style={{ marginTop: '2px', shrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
