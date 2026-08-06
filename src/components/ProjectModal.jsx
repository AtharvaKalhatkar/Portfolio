import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, Sparkles, CheckCircle2, Zap, Users } from 'lucide-react';
import { sounds } from '../utils/audioSynth';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          background: 'rgba(5, 8, 16, 0.85)',
          backdropFilter: 'blur(16px)'
        }}
        onClick={() => {
          sounds.playClick();
          onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel"
          style={{
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '32px',
            borderRadius: '24px',
            position: 'relative'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid var(--glass-border)',
              color: '#fff',
              padding: '8px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          {/* Project Preview Image */}
          <div
            style={{
              width: '100%',
              height: '300px',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '24px',
              position: 'relative',
              border: '1px solid var(--glass-border)'
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                background: 'rgba(14, 19, 31, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                border: '1px solid var(--glass-border)'
              }}
            >
              {project.category}
            </div>

            {project.liveClients && (
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(16, 185, 129, 0.9)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  color: '#fff',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Users size={13} />
                <span>{project.liveClients}</span>
              </div>
            )}
          </div>

          {/* Title & Subtitle */}
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '4px' }}>
            {project.title}
          </h2>
          {project.subtitle && (
            <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
              {project.subtitle}
            </div>
          )}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: '#10B981',
              marginBottom: '20px',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <Zap size={15} />
            <span>{project.metrics}</span>
          </div>

          {/* Full Description */}
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
            {project.fullDesc}
          </p>

          {/* Features Checklist */}
          {project.features && project.features.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: 700, marginBottom: '10px' }}>
                Key Application Modules & Features
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
                {project.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} color="#10B981" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Tags */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '8px' }}>
              Technology Stack
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid var(--glass-border)',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => sounds.playClick()}
            >
              <span>View Live Product / Repo</span>
              <ExternalLink size={16} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              onClick={() => sounds.playClick()}
            >
              <span>Source Repository</span>
              <Code size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
