import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Command, Menu, X } from 'lucide-react';
import { sounds } from '../utils/audioSynth';

export default function Navbar({ activeTheme, setTheme, onOpenCommandPalette }) {
  const [soundOn, setSoundOn] = useState(true);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const themes = [
    { id: 'cyan', name: 'Neon Cyan', color: '#00F0FF' },
    { id: 'purple', name: 'Electric Purple', color: '#A855F7' },
    { id: 'emerald', name: 'Cyber Emerald', color: '#00FF9D' },
    { id: 'rose', name: 'Rose Gold', color: '#FF007A' }
  ];

  const toggleAudio = () => {
    const newState = sounds.toggleSound();
    setSoundOn(newState);
    if (newState) sounds.playClick();
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'SmartSpend AI', href: '#smartspend' },
    { label: 'Products', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav style={{ position: 'fixed', top: '16px', left: 0, right: 0, zIndex: 100, padding: '0 24px' }}>
      <div
        className="glass-panel"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '9999px'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={() => sounds.playClick()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'var(--text-main)',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.02em'
          }}
        >
          <span
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'var(--accent-primary)',
              boxShadow: '0 0 12px var(--accent-primary)',
              display: 'inline-block'
            }}
          ></span>
          ATHARVA<span style={{ color: 'var(--accent-primary)' }}>.DEV</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', gap: '24px', alignItems: 'center' }} className="desktop-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => sounds.playHover()}
              onClick={() => sounds.playClick()}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color var(--transition-fast)'
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Command Palette Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCommandPalette();
            }}
            onMouseEnter={() => sounds.playHover()}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-muted)',
              padding: '6px 14px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <Command size={13} color="var(--accent-primary)" />
            <span>Search</span>
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '10px'
              }}
            >
              Ctrl+K
            </span>
          </button>

          {/* Theme Switcher */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => {
                sounds.playClick();
                setThemeDropdownOpen(!themeDropdownOpen);
              }}
              onMouseEnter={() => sounds.playHover()}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--glass-border)',
                color: 'var(--accent-primary)',
                padding: '8px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Change Theme Accent"
            >
              <Sparkles size={16} />
            </button>

            {themeDropdownOpen && (
              <div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  top: '46px',
                  right: 0,
                  padding: '8px',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  minWidth: '160px',
                  zIndex: 200
                }}
              >
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setThemeDropdownOpen(false);
                      sounds.playClick();
                    }}
                    style={{
                      background: activeTheme === t.id ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                      border: 'none',
                      color: 'var(--text-main)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: t.color,
                        boxShadow: `0 0 8px ${t.color}`
                      }}
                    ></span>
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => sounds.playHover()}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--glass-border)',
              color: soundOn ? 'var(--accent-primary)' : 'var(--text-muted)',
              padding: '8px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title={soundOn ? 'Sound Effects Enabled' : 'Sound Effects Muted'}
          >
            {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-links {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
