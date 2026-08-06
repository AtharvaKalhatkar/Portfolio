import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audioSynth';

export default function Footer() {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--glass-border)',
        padding: '32px 24px',
        background: 'rgba(8, 11, 16, 0.9)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00FF9D', boxShadow: '0 0 8px #00FF9D' }}></span>
          <span>© {new Date().getFullYear()} Alex Vance. Built with Vite, Three.js, & Custom WebGL Shaders.</span>
        </div>

        <button
          onClick={scrollToTop}
          onMouseEnter={() => sounds.playHover()}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--glass-border)',
            color: 'var(--accent-primary)',
            padding: '8px 16px',
            borderRadius: '9999px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            transition: 'all 0.2s ease'
          }}
        >
          <span>Back to Top</span>
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}
