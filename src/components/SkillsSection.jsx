import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Orbit, Grid, Server, Database, Code2, Container, Cpu, Box, CheckCircle2 } from 'lucide-react';
import SkillCosmosCanvas from './canvas/SkillCosmosCanvas';
import { portfolioData } from '../data/portfolioData';
import { sounds } from '../utils/audioSynth';

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [viewMode, setViewMode] = useState('grid'); // Default to clean Grid View for professional clarity
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSkillNode, setActiveSkillNode] = useState(skills[0]);

  const categories = ['All', 'Backend', 'Database', 'Frontend', 'DevOps & Tools', 'Core CS'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((s) => s.category.includes(selectedCategory));

  return (
    <section id="skills" style={{ padding: '90px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
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
            <Server size={14} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.82rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              Technical Capabilities
            </span>
          </div>

          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '10px' }}>
            Skills & <span className="text-gradient">Technology Stack</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto', fontSize: '0.95rem' }}>
            Core competencies in Java backend development, Spring ecosystem, database design, and software architecture.
          </p>
        </div>

        {/* Controls Bar: Category Filter & View Mode Switcher */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px'
          }}
        >
          {/* Category Filter Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  sounds.playClick();
                }}
                onMouseEnter={() => sounds.playHover()}
                style={{
                  background: selectedCategory === cat ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-muted)',
                  border: '1px solid var(--glass-border)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Switcher */}
          <div
            className="glass-panel-sm"
            style={{ display: 'inline-flex', padding: '3px', borderRadius: 'var(--radius-md)' }}
          >
            <button
              onClick={() => {
                setViewMode('grid');
                sounds.playClick();
              }}
              style={{
                background: viewMode === 'grid' ? 'var(--accent-primary)' : 'transparent',
                color: viewMode === 'grid' ? '#FFF' : 'var(--text-muted)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              <Grid size={14} />
              <span>Grid View</span>
            </button>

            <button
              onClick={() => {
                setViewMode('3d');
                sounds.playClick();
              }}
              style={{
                background: viewMode === '3d' ? 'var(--accent-primary)' : 'transparent',
                color: viewMode === '3d' ? '#FFF' : 'var(--text-muted)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              <Orbit size={14} />
              <span>3D Sphere</span>
            </button>
          </div>
        </div>

        {/* View Mode Display */}
        {viewMode === 'grid' ? (
          /* Clean Grid View */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="glass-panel card-hover"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => {
                  setActiveSkillNode(skill);
                  sounds.playClick();
                }}
                style={{
                  padding: '18px 20px',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${skill.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: skill.color,
                    flexShrink: 0
                  }}
                >
                  <CheckCircle2 size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#FFF' }}>{skill.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
                    {skill.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 3D Sphere View */
          <div className="glass-panel" style={{ padding: '20px', borderRadius: '20px', position: 'relative' }}>
            <SkillCosmosCanvas
              skills={filteredSkills}
              onSelectNode={(skill) => {
                setActiveSkillNode(skill);
                sounds.playClick();
              }}
              activeSkill={activeSkillNode}
            />

            {activeSkillNode && (
              <div
                className="glass-panel-sm"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  maxWidth: '380px',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  borderLeft: `4px solid ${activeSkillNode.color}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>
                    {activeSkillNode.name}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: activeSkillNode.color, fontFamily: 'var(--font-mono)' }}>
                    {activeSkillNode.category}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
