import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Copy, Check, Play, CornerDownLeft } from 'lucide-react';
import { sounds } from '../utils/audioSynth';
import { portfolioData } from '../data/portfolioData';

export default function DeveloperTerminal() {
  const profile = portfolioData.profile || {};
  const skills = portfolioData.skills || [];
  const productsList = portfolioData.products || portfolioData.projects || [];
  const contact = portfolioData.contact || {};

  const [history, setHistory] = useState([
    { type: 'sys', text: 'Welcome to Atharva Kalhatkar Shell v2.4 (x86_64-java-springboot)' },
    { type: 'sys', text: 'Type "help" or click quick commands below to execute system queries.' },
    { type: 'cmd', text: 'cat bio.json' },
    {
      type: 'out',
      text: JSON.stringify(
        {
          name: profile.name,
          role: 'Founder @ LogicSync Digital | Java 21 & Spring Boot 3.3',
          education: 'B.E. IT (6th Sem) @ JSPM BSIOTR (CGPA 8.6)',
          location: profile.location,
          status: 'Open for Opportunities'
        },
        null,
        2
      )
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim().toLowerCase();
    sounds.playClick();

    const newLogs = [...history, { type: 'cmd', text: cmdStr }];

    if (raw === 'help') {
      newLogs.push({
        type: 'out',
        text: `Available Shell Commands:
  - cat bio.json        : Print profile bio & education details
  - list skills         : Output Java, Spring Boot & DB tech stack
  - list projects       : Display Dukan Setu, VEGA ERP, AgriSync, SmartSpend
  - contact             : Output email, phone number & social links
  - clear               : Clear terminal output screen`
      });
    } else if (raw === 'cat bio.json' || raw === 'bio' || raw === 'about') {
      newLogs.push({
        type: 'out',
        text: JSON.stringify(
          {
            name: profile.name,
            tagline: profile.tagline,
            startup: 'LogicSync Digital (Founder & Dev)',
            college: 'JSPM BSIOTR Wagholi Pune (CGPA 8.6)',
            motto: profile.motto
          },
          null,
          2
        )
      });
    } else if (raw === 'list skills' || raw === 'skills') {
      newLogs.push({
        type: 'out',
        text: skills.map((s) => `[${s.category.toUpperCase()}] ${s.name} (${s.level}%)`).join('\n')
      });
    } else if (raw === 'list projects' || raw === 'projects' || raw === 'list products') {
      newLogs.push({
        type: 'out',
        text: productsList.map((p) => `• ${p.title} -> ${p.shortDesc} [${p.tags ? p.tags.join(', ') : ''}]`).join('\n\n')
      });
    } else if (raw === 'contact' || raw === 'email' || raw === 'phone') {
      newLogs.push({
        type: 'out',
        text: `Name     : Atharva Kalhatkar
Email    : kalhatkaratharva01@gmail.com
Phone    : +91 83907 68833
Location : Pune, Maharashtra, India
GitHub   : https://github.com/AtharvaKalhatkar
LinkedIn : https://www.linkedin.com/in/atharva-kalhatkar/`
      });
    } else if (raw === 'clear') {
      setHistory([]);
      return;
    } else {
      newLogs.push({
        type: 'out',
        text: `zsh: command not found: ${cmdStr}. Type "help" for a list of valid system commands.`
      });
    }

    setHistory(newLogs);
    setInputVal('');
  };

  const handleCopyLogs = () => {
    const fullText = history.map((h) => (h.type === 'cmd' ? `$ ${h.text}` : h.text)).join('\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    sounds.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="glass-panel"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.7)',
        fontFamily: 'var(--font-mono)',
        width: '100%'
      }}
    >
      {/* Terminal Titlebar Header */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.9)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--glass-border)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }}></span>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }}></span>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#10B981' }}></span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '8px', fontWeight: 600 }}>
            atharva@logicsync:~ (zsh)
          </span>
        </div>

        <button
          onClick={handleCopyLogs}
          onMouseEnter={() => sounds.playHover()}
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--glass-border)',
            color: copied ? '#10B981' : 'var(--text-muted)',
            padding: '4px 8px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Terminal Window Output */}
      <div
        style={{
          padding: '18px',
          minHeight: '260px',
          maxHeight: '340px',
          overflowY: 'auto',
          fontSize: '0.85rem',
          lineHeight: 1.6,
          color: '#E2E8F0'
        }}
      >
        {history.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '8px' }}>
            {item.type === 'cmd' ? (
              <div style={{ color: 'var(--accent-primary)', fontWeight: 600, display: 'flex', gap: '8px' }}>
                <span style={{ color: '#10B981' }}>atharva@logicsync:~$</span>
                <span>{item.text}</span>
              </div>
            ) : (
              <pre
                style={{
                  fontFamily: 'inherit',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  color: item.type === 'sys' ? '#94A3B8' : '#F1F5F9',
                  margin: 0
                }}
              >
                {item.text}
              </pre>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Action Commands */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.6)',
          padding: '10px 16px',
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflowX: 'auto'
        }}
        className="no-scrollbar"
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Quick:</span>
        {['cat bio.json', 'list skills', 'list projects', 'contact', 'clear'].map((btnCmd) => (
          <button
            key={btnCmd}
            onClick={() => handleCommand(btnCmd)}
            onMouseEnter={() => sounds.playHover()}
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: 'var(--accent-primary)',
              padding: '3px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            ${btnCmd}
          </button>
        ))}
      </div>

      {/* Command Prompt Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputVal) handleCommand(inputVal);
        }}
        style={{
          background: 'rgba(15, 23, 42, 0.95)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderTop: '1px solid var(--glass-border)'
        }}
      >
        <span style={{ color: '#10B981', fontWeight: 700 }}>$</span>
        <input
          type="text"
          placeholder="Type command (e.g. help, skills, projects)..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            color: '#FFF',
            fontFamily: 'inherit',
            fontSize: '0.85rem',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          style={{ background: 'transparent', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer' }}
        >
          <CornerDownLeft size={14} />
        </button>
      </form>
    </div>
  );
}
