import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Smartphone, Cloud, Cpu, CheckCircle2, Layers, Repeat } from 'lucide-react';
import { sounds } from '../utils/audioSynth';

export default function ArchitectureSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 0,
      title: "1. Offline-First Frontend & PWA",
      sub: "React, TypeScript, Vite PWA, WatermelonDB / Dexie.js",
      desc: "Instant desktop & mobile applications designed for Indian shopkeepers and distributors with full offline transaction capabilities.",
      icon: Smartphone,
      color: "#3B82F6",
      details: ["WatermelonDB / Dexie.js local database persistence", "Instant barcode billing without internet lag", "Service Worker offline PWA caching"]
    },
    {
      id: 1,
      title: "2. Java 21 & Spring Boot 3.3 Backend",
      sub: "Spring Boot 3.3, Spring Security, Spring AI, Redis",
      desc: "Production microservices handling authentication, purchase OCR processing via Tesseract.js, GST calculation, and background queues.",
      icon: Server,
      color: "#10B981",
      details: ["Java 21 Virtual Threads & Spring Boot 3.3", "Redis & RabbitMQ asynchronous message queues", "Tesseract.js OCR purchase invoice extraction"]
    },
    {
      id: 2,
      title: "3. PostgreSQL 15 & Bidirectional Sync",
      sub: "PostgreSQL 15, Flyway Migrations, Supabase",
      desc: "Robust relational data layer with Flyway schema migrations, ACID transactional ledgers, and bidirectional offline-to-cloud synchronization.",
      icon: Database,
      color: "#8B5CF6",
      details: ["PostgreSQL 15 relational schema & Flyway migrations", "Party Ledger & Udhari Credit balance tracking", "Supabase cloud backup & warm buyer lead sync"]
    },
    {
      id: 3,
      title: "4. Cloud Infrastructure & 33 Verticals",
      sub: "Docker, GitHub Actions CI/CD, Plugin Architecture",
      desc: "Plugin/vertical configuration engine built to power 33 industry vertical presets with Docker containerization and GitHub Actions.",
      icon: Cloud,
      color: "#F59E0B",
      details: ["33 Planned SME industry vertical configurations", "Docker containerization & Render hosting", "GitHub Actions CI/CD automated pipeline"]
    }
  ];

  return (
    <section id="architecture" style={{ padding: '90px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            className="glass-panel-sm"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              marginBottom: '12px'
            }}
          >
            <Cpu size={14} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.82rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              LogicSync Digital Architecture
            </span>
          </div>

          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '10px' }}>
            Universal <span className="text-gradient">Offline-First Engine</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '0.95rem' }}>
            Engineered to digitize Indian SMEs — powering Dukan Setu, VEGA ERP, AgriSync, AquaSync, Crusher Sync, and Property Sync.
          </p>
        </div>

        {/* Visual Node Flow Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '32px'
          }}
        >
          {steps.map((st) => {
            const IconComp = st.icon;
            const isSelected = activeStep === st.id;
            return (
              <div
                key={st.id}
                className="glass-panel card-hover"
                onClick={() => {
                  setActiveStep(st.id);
                  sounds.playClick();
                }}
                onMouseEnter={() => sounds.playHover()}
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  borderColor: isSelected ? st.color : 'var(--glass-border)',
                  background: isSelected ? 'rgba(30, 41, 59, 0.8)' : 'var(--glass-bg)',
                  boxShadow: isSelected ? `0 0 20px -5px ${st.color}` : 'none'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${st.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: st.color,
                    marginBottom: '14px'
                  }}
                >
                  <IconComp size={20} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>
                  {st.title}
                </h3>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {st.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Inspector Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel glow-border"
          style={{ padding: '32px', borderRadius: '20px', borderLeft: `5px solid ${steps[activeStep].color}` }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF' }}>
              {steps[activeStep].title}
            </h3>
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--glass-border)',
                padding: '4px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                color: steps[activeStep].color,
                fontFamily: 'var(--font-mono)'
              }}
            >
              {steps[activeStep].sub}
            </span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>
            {steps[activeStep].desc}
          </p>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 700, marginBottom: '10px' }}>
            Architecture Technical Highlights:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
            {steps[activeStep].details.map((dt, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} color={steps[activeStep].color} />
                <span>{dt}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
