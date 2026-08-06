import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SmartSpendSection from './components/SmartSpendSection';
import ArchitectureSection from './components/ArchitectureSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import BackgroundParticles from './components/canvas/BackgroundParticles';

export default function App() {
  const [activeTheme, setActiveTheme] = useState('cyan');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const themeColors = {
    cyan: '#3B82F6',
    purple: '#8B5CF6',
    emerald: '#10B981',
    rose: '#F43F5E'
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
  }, [activeTheme]);

  return (
    <div className="cyber-grid" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Layer */}
      <BackgroundParticles />

      {/* Floating Header */}
      <Navbar
        activeTheme={activeTheme}
        setTheme={setActiveTheme}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Hero Section with Interactive Shell Terminal */}
      <HeroSection activeThemeColor={themeColors[activeTheme]} />

      {/* About & Startup Story */}
      <AboutSection />

      {/* Flagship Gen AI Project — SmartSpend Spotlight */}
      <SmartSpendSection />

      {/* System Engineering Architecture Flow */}
      <ArchitectureSection />

      {/* Skills & Tech Stack */}
      <SkillsSection />

      {/* Projects Showcase Section */}
      <ProjectsSection />

      {/* Career Experience Timeline */}
      <ExperienceSection />

      {/* Contact Hub */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Command Palette Overlay */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        setTheme={setActiveTheme}
      />
    </div>
  );
}
