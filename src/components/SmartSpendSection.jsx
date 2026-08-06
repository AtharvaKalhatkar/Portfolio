import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Server, Cpu, ShieldCheck, Container, Cloud, ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audioSynth';

export default function SmartSpendSection() {
  const { flagshipAi } = portfolioData;

  return (
    <section id="smartspend" style={{ padding: '90px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel glow-border"
          style={{
            padding: '40px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))',
            borderLeft: '5px solid #8B5CF6'
          }}
        >
          {/* Header Badge */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div
              className="glass-panel-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid #8B5CF6'
              }}
            >
              <Bot size={16} color="#A855F7" />
              <span style={{ fontSize: '0.85rem', color: '#A855F7', fontWeight: 700 }}>
                Flagship Gen AI & Portfolio Project
              </span>
            </div>

            <span
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10B981',
                color: '#10B981',
                padding: '4px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600
              }}
            >
              {flagshipAi.metrics}
            </span>
          </div>

          {/* Title & Tagline */}
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFF', marginBottom: '8px' }}>
            {flagshipAi.title}
          </h2>
          <div style={{ fontSize: '1.05rem', color: '#A855F7', fontWeight: 600, fontFamily: 'var(--font-mono)', marginBottom: '20px' }}>
            {flagshipAi.tagline}
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px', maxWidth: '880px' }}>
            {flagshipAi.description}
          </p>

          {/* Technical Architecture Pills Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}
          >
            <div className="glass-panel-sm" style={{ padding: '16px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3B82F6', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                <Sparkles size={16} />
                <span>Spring AI & Groq LLaMA3</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Natural language expense parsing & intelligent categorizations.</div>
            </div>

            <div className="glass-panel-sm" style={{ padding: '16px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                <ShieldCheck size={16} />
                <span>Spring Security & RBAC</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Role-based access control and JWT token authentication.</div>
            </div>

            <div className="glass-panel-sm" style={{ padding: '16px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                <Container size={16} />
                <span>Docker on Render</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Containerized production deployment with PostgreSQL database.</div>
            </div>

            <div className="glass-panel-sm" style={{ padding: '16px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#A855F7', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                <Bot size={16} />
                <span>Planned RAG Extension</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Retrieval-Augmented Generation for conversational financial insights.</div>
            </div>
          </div>

          {/* Action Link */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ background: '#8B5CF6' }}
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
            >
              <span>Inspect SmartSpend Codebase</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
