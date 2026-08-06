import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, X, ArrowRight, Sparkles, Box, Mail, Code } from 'lucide-react';
import { sounds } from '../utils/audioSynth';

export default function CommandPalette({ isOpen, onClose, setTheme, onSelectProject }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        sounds.playClick();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { type: 'nav', title: 'Jump to 3D Skills Cosmos', href: '#skills', icon: Box },
    { type: 'nav', title: 'View Flagship Projects', href: '#projects', icon: Code },
    { type: 'nav', title: 'Explore Career History', href: '#experience', icon: ArrowRight },
    { type: 'nav', title: 'Send Direct Message', href: '#contact', icon: Mail },

    { type: 'theme', title: 'Switch Theme: Neon Cyan', themeId: 'cyan', icon: Sparkles },
    { type: 'theme', title: 'Switch Theme: Electric Purple', themeId: 'purple', icon: Sparkles },
    { type: 'theme', title: 'Switch Theme: Cyber Emerald', themeId: 'emerald', icon: Sparkles },
    { type: 'theme', title: 'Switch Theme: Rose Gold', themeId: 'rose', icon: Sparkles }
  ];

  const filteredActions = query.trim() === ''
    ? actions
    : actions.filter(a => a.title.toLowerCase().includes(query.toLowerCase()));

  const handleAction = (act) => {
    sounds.playClick();
    if (act.type === 'nav') {
      window.location.href = act.href;
    } else if (act.type === 'theme') {
      setTheme(act.themeId);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          background: 'rgba(5, 8, 16, 0.85)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '120px',
          paddingLeft: '16px',
          paddingRight: '16px'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel"
          style={{
            maxWidth: '640px',
            width: '100%',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
          }}
        >
          {/* Search Input Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: '1px solid var(--glass-border)',
              gap: '12px'
            }}
          >
            <Search size={18} color="var(--accent-primary)" />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or section name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: 'none',
                color: 'var(--text-muted)',
                padding: '4px 8px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.75rem'
              }}
            >
              ESC
            </button>
          </div>

          {/* Results List */}
          <div style={{ maxHeight: '320px', overflowY: 'auto', padding: '8px' }}>
            {filteredActions.length === 0 ? (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                No commands matching "{query}"
              </div>
            ) : (
              filteredActions.map((act, index) => {
                const IconComp = act.icon;
                return (
                  <div
                    key={index}
                    onClick={() => handleAction(act)}
                    onMouseEnter={() => sounds.playHover()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'background 0.15s ease',
                      color: 'var(--text-main)'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                    onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <IconComp size={16} color="var(--accent-primary)" />
                    <span style={{ fontSize: '0.9rem', fontWeight: 500, flex: 1 }}>{act.title}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {act.type === 'nav' ? 'Navigate' : 'Theme'}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
