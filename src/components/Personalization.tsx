import React, { useState } from 'react';
import { personas } from '../data/content';
import './Personalization.css';

export const Personalization: React.FC = () => {
  const [activeId, setActiveId] = useState('achiever');
  const persona = personas.find((p) => p.id === activeId) || personas[0];

  return (
    <section className="personalization-section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">PERSONALIZATION</span>
          <h2 className="section-title">
            Personalization: Tailored <br />
            <span className="serif-italic">for the Way You Grow.</span>
          </h2>
        </div>

        {/* Persona Tabs */}
        <div className="personalization-tabs">
          {personas.map((p) => (
            <button
              key={p.id}
              className={`persona-tab-btn ${activeId === p.id ? 'active' : ''}`}
              onClick={() => setActiveId(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Banner Showcase */}
        <div className="personalization-banner">
          <img
            src={persona.bgImage}
            alt={persona.title}
            className="personalization-bg-img"
          />
          <div className="personalization-overlay">
            <div className="persona-content-box">
              <h3 className="persona-title">{persona.title}</h3>
              <p className="persona-desc">{persona.description}</p>
              <p className="persona-quote">{persona.quote}</p>
              <div className="persona-metrics-row">
                {persona.metrics.map((m, i) => (
                  <div key={i} className="persona-metric-chip">
                    <span style={{ color: '#94a3b8' }}>{m.label}: </span>
                    <span style={{ fontWeight: 700, color: 'white' }}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
