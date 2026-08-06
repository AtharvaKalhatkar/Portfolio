import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Code, Globe, Share2, MessageSquare, Sparkles, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audioSynth';

export default function ContactSection() {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    sounds.playSuccess();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sounds.playSuccess();
    setSubmitted(true);

    // Trigger Canvas Confetti Celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#7000FF', '#00FF9D', '#FF007A']
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            <Mail size={14} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              Initiate Contact
            </span>
          </div>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto' }}>
            Have a 3D web project, Java backend engineering inquiry, or collaboration offer? Reach out below.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Links & Copy Box */}
          <div>
            <div className="glass-panel" style={{ padding: '32px', borderRadius: '24px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>
                Direct Connection & Contact
              </h3>

              {/* Email Box */}
              <div
                className="glass-panel-sm"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  marginBottom: '12px'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)' }}>
                  {contact.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sounds.playHover()}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid var(--glass-border)',
                    color: copiedEmail ? '#00FF9D' : 'var(--text-main)',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Number Box */}
              <div
                className="glass-panel-sm"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={15} color="#00FF9D" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#fff' }}>
                    {contact.phone}
                  </span>
                </div>

                <a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  style={{
                    background: 'rgba(0, 255, 157, 0.15)',
                    border: '1px solid #00FF9D',
                    color: '#00FF9D',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Call Now
                </a>
              </div>

              {/* Social Channels */}
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '12px' }}>
                Social Channels
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '10px 14px', fontSize: '0.85rem', justifyContent: 'center' }}
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                >
                  <Code size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '10px 14px', fontSize: '0.85rem', justifyContent: 'center' }}
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                >
                  <Globe size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={contact.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '10px 14px', fontSize: '0.85rem', justifyContent: 'center' }}
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                >
                  <Share2 size={16} />
                  <span>Twitter/X</span>
                </a>
                <div
                  className="btn-secondary"
                  style={{ padding: '10px 14px', fontSize: '0.85rem', justifyContent: 'center', cursor: 'default' }}
                >
                  <MessageSquare size={16} />
                  <span>{contact.discord}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-panel glow-border" style={{ padding: '32px', borderRadius: '24px' }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 20px' }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 157, 0.15)',
                    border: '1px solid #00FF9D',
                    color: '#00FF9D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}
                >
                  <Sparkles size={28} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
                  Transmission Sent!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '8px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '8px' }}>
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@cyberdyne.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '8px' }}>
                    Project Details / Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project scope, timeline, or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Transmit Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
