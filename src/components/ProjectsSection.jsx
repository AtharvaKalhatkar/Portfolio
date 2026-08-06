import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Sparkles, Layers, Zap, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { sounds } from '../utils/audioSynth';

function TiltProjectCard({ project, onOpenModal }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ perspective: 1000 }}
    >
      <div
        className="glass-panel glow-border"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => sounds.playHover()}
        onClick={() => {
          sounds.playClick();
          onOpenModal(project);
        }}
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
          transformStyle: 'preserve-3d',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Project Thumbnail Image */}
        <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: 'rgba(14, 19, 31, 0.8)',
              backdropFilter: 'blur(8px)',
              padding: '4px 10px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              color: 'var(--accent-primary)',
              fontWeight: 600,
              border: '1px solid var(--glass-border)'
            }}
          >
            {project.category}
          </div>

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(8, 11, 16, 0.9), transparent)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '16px',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
            className="hover-overlay"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--accent-primary)',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}
            >
              <Eye size={16} />
              <span>Inspect Project Architecture</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>
            {project.title}
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px', flex: 1, lineHeight: 1.6 }}>
            {project.shortDesc}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              color: '#00FF9D',
              marginBottom: '16px',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <Zap size={13} />
            <span>{project.metrics}</span>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .glass-panel:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const rawProjects = portfolioData.products || portfolioData.projects || [];
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterOptions = ['All', 'Flagship SME ERP', 'Desktop ERP', 'Agri Tech PWA', 'Utility ERP', 'Industrial ERP', 'Real Estate Tech'];

  const filteredProjects = selectedFilter === 'All'
    ? rawProjects
    : rawProjects.filter((p) => (p.category && p.category.includes(selectedFilter)) || (p.tags && p.tags.some(t => t.includes(selectedFilter))));

  return (
    <section id="projects" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            <Layers size={14} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              LogicSync Digital Software Portfolio
            </span>
          </div>

          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
            Live Production <span className="text-gradient">Applications Shipped</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', fontSize: '0.98rem' }}>
            Real business software platforms serving live paying clients across Krushi Seva Kendras, stone crushers, water delivery suppliers, wholesale distributors, real estate, and AI expense management.
          </p>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setSelectedFilter(opt);
                sounds.playClick();
              }}
              onMouseEnter={() => sounds.playHover()}
              style={{
                background: selectedFilter === opt ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedFilter === opt ? '#050810' : 'var(--text-muted)',
                border: '1px solid var(--glass-border)',
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredProjects.map((proj) => (
            <TiltProjectCard
              key={proj.id}
              project={proj}
              onOpenModal={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Modal Popup */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
