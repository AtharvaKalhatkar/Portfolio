import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, ExternalLink, Globe, MapPin, CheckCircle2, Phone, Mail, Award, Rocket } from 'lucide-react';
import DeveloperTerminal from './DeveloperTerminal';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audioSynth';

export default function HeroSection() {
  const { profile } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = profile.roles || ['Software Engineer', 'Java & Spring Boot Developer'];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '92vh',
        paddingTop: '120px',
        paddingBottom: '60px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Clear Purpose & Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Pill */}
          <div
            className="glass-panel-sm"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              marginBottom: '20px'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10B981',
                boxShadow: '0 0 8px #10B981'
              }}
            ></span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-main)', fontWeight: 600 }}>
              {profile.status}
            </span>
          </div>

          {/* Profile Avatar & Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img
                src={profile.avatar}
                alt={profile.name}
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '24px',
                  objectFit: 'cover',
                  border: '2px solid var(--accent-primary)',
                  boxShadow: '0 8px 30px -5px var(--accent-glow)'
                }}
              />
            </div>
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em'
                }}
              >
                Hi, I'm <span className="text-gradient">{profile.name} Kalhatkar</span>
              </h1>
              <div style={{ fontSize: '0.95rem', color: '#10B981', fontWeight: 700, marginTop: '4px' }}>
                Founder @ LogicSync Digital • Final-Year B.E. IT (CGPA 8.6)
              </div>
            </div>
          </div>

          {/* Dynamic Role Subtitle */}
          <div
            style={{
              fontSize: '1.1rem',
              color: 'var(--accent-primary)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '18px',
              minHeight: '32px'
            }}
          >
            <Terminal size={18} />
            <span>{roles[roleIndex]}</span>
          </div>

          {/* Clear Purpose Statement */}
          <div
            className="glass-panel-sm"
            style={{
              padding: '16px 20px',
              borderRadius: '14px',
              marginBottom: '24px',
              borderLeft: '4px solid var(--accent-primary)'
            }}
          >
            <div style={{ fontSize: '0.98rem', color: '#FFF', fontWeight: 600, lineHeight: 1.6 }}>
              🎯 <strong>Portfolio Purpose:</strong> I build custom business management software (ERPs, GST Billing, Offline-First Systems & Gen AI Tools) that digitize Indian small and medium enterprises (SMEs).
            </div>
          </div>

          {/* Key Impact Stats Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
            <span style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10B981', color: '#10B981', padding: '4px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>
              🚀 10+ Live Production Systems Shipped
            </span>
            <span style={{ background: 'rgba(59, 130, 246, 0.15)', border: '1px solid #3B82F6', color: '#3B82F6', padding: '4px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>
              💼 15+ Live Dukan Setu Clients
            </span>
            <span style={{ background: 'rgba(139, 92, 246, 0.15)', border: '1px solid #8B5CF6', color: '#8B5CF6', padding: '4px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>
              🎓 B.E. IT CGPA 8.6 @ JSPM BSIOTR
            </span>
          </div>

          {/* Direct Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
            <a
              href="#projects"
              className="btn-primary"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
            >
              <span>Explore Products</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="btn-secondary"
              style={{ color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
            >
              <Phone size={15} />
              <span>{profile.phone}</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
            >
              <Code size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
            >
              <Globe size={16} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Location & Academic Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '20px',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={15} color="var(--accent-primary)" />
              <span>{profile.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#10B981" />
              <span>JSPM BSIOTR Wagholi, Pune</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Developer Terminal Shell */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ width: '100%' }}
        >
          <DeveloperTerminal />
        </motion.div>
      </div>
    </section>
  );
}
