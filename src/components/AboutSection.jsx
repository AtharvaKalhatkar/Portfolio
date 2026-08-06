import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Compass, Zap, Sparkles, Rocket, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audioSynth';

export default function AboutSection() {
  const { profile } = portfolioData;
  const services = portfolioData.services || [
    "Backend & REST API Architecture",
    "Custom SME Business Automation Software",
    "ERP Systems for Agencies & Wholesale Distributors",
    "Offline-first Sync Engines & Mobile Apps"
  ];
  const learningJourney = portfolioData.learningJourney || [
    "Advanced Spring Boot & Microservices",
    "Docker & Kubernetes Containerization",
    "AWS Cloud Infrastructure & Deployment",
    "System Design & Distributed Systems"
  ];

  const pillars = [
    {
      title: "Java & Spring Boot Architecture",
      desc: "Building secure, scalable, and maintainable backend microservices and RESTful APIs using Java, Spring Security, and JPA.",
      icon: Cpu,
      color: "var(--accent-primary)"
    },
    {
      title: "Business Automation & Startup",
      desc: "Founder of LogicSync Digital, digitizing SME business operations with offline-first desktop, mobile, and cloud sync systems.",
      icon: Rocket,
      color: "#00FF9D"
    },
    {
      title: "Clean Code & Data Engineering",
      desc: "Efficient database schemas with MySQL, PostgreSQL, SQLite, and MongoDB alongside Data Structures & System Design.",
      icon: Code,
      color: "#A855F7"
    }
  ];

  return (
    <section id="about" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Header */}
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
            <User size={14} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              Personal Story & Startup
            </span>
          </div>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
            About <span className="text-gradient">Me & LogicSync Digital</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto' }}>
            B.E. IT Student at JSPM BSIOTR Wagholi Pune & Founder at LogicSync Digital building software for small & medium businesses.
          </p>
        </div>

        {/* Main Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            alignItems: 'start',
            marginBottom: '48px'
          }}
        >
          {/* Left Column: Glass Card Bio & Startup Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glow-border"
            style={{ padding: '36px', borderRadius: '24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <img
                src={profile.avatar}
                alt={profile.name}
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '20px',
                  objectFit: 'cover',
                  border: '2px solid var(--accent-primary)',
                  boxShadow: '0 6px 24px -4px var(--accent-glow)',
                  flexShrink: 0
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{profile.name}</h3>
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                  {profile.tagline}
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '16px' }}>
              {profile.bio}
            </p>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem', marginBottom: '24px' }}>
              {profile.detailedAbout}
            </p>

            <div
              className="glass-panel-sm"
              style={{ padding: '16px', borderRadius: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Education</div>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-main)' }}>B.E. IT (6th Sem)</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>JSPM BSIOTR Pune</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Startup</div>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#00FF9D' }}>LogicSync Digital</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{profile.status}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass-panel glow-border"
                  onMouseEnter={() => sounds.playHover()}
                  style={{ padding: '24px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${pillar.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: pillar.color,
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={22} />
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>
                      {pillar.title}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Services & Learning Journey Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {/* Services Box */}
          <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Rocket size={18} />
              <span>LogicSync Digital Services</span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {services.map((srv, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="#00FF9D" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Journey Box */}
          <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px', color: '#A855F7', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={18} />
              <span>Current Learning Journey</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {learningJourney.map((lj, i) => (
                <span
                  key={i}
                  style={{
                    background: 'rgba(168, 85, 247, 0.12)',
                    border: '1px solid #A855F7',
                    color: '#fff',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 600
                  }}
                >
                  {lj}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
