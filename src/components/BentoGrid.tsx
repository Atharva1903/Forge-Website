import React from 'react';
import { Flame, Check } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';
import './BentoGrid.css';

export const BentoGrid: React.FC = () => {
  return (
    <section className="bento-section" id="features">
      <div className="container">
        {/* Section Header */}
        <div className="bento-header">
          <span className="section-tag">FEATURES</span>
          <h2 className="section-title">
            Everything You Need for <br />
            <span className="serif-italic">a Smarter Routine.</span>
          </h2>
          <p className="section-subtitle">
            Discover how AI-driven habit intelligence transforms every stage of your personal growth experience from morning rituals to evening reflection.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card 1: Tall Left Dark Blue */}
          <div className="bento-card bento-card-tall">
            <div>
              <span className="section-tag" style={{ color: '#60a5fa' }}>01 / REAL-TIME</span>
              <h3 className="bento-title">Real-Time Habit & Streak Tracking</h3>
              <p className="bento-desc">
                Instant synchronization across Apple Watch, iPhone, and desktop with zero delay.
              </p>
            </div>
            <PhoneFrame className="bento-mockup">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>LIVE STREAK</span>
                  <Flame size={14} color="#f59e0b" />
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white' }}>
                  14 Days Active
                </div>
                <div style={{ fontSize: '0.65rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Check size={12} /> Today's Routine Complete
                </div>
              </div>
            </PhoneFrame>
          </div>

          {/* Card 2: Top Right Obsidian */}
          <div className="bento-card bento-card-dark">
            <div>
              <span className="section-tag" style={{ color: '#94a3b8' }}>02 / NOTIFICATIONS</span>
              <h3 className="bento-title">Live Milestone & Routine Alerts</h3>
              <p className="bento-desc">
                Receive proactive reminders right when your energy levels peak.
              </p>
            </div>
            <div className="bento-timeline">
              <div className="timeline-badge">NUDGE 10:00 AM</div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Start 45 Min Deep Work Session</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Phone notifications paused • Focus mode active</div>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Middle Emerald Green */}
          <div className="bento-card bento-card-emerald">
            <div>
              <span className="section-tag" style={{ color: '#6ee7b7' }}>03 / WELL-BEING</span>
              <h3 className="bento-title">Consistency Analytics</h3>
              <p className="bento-desc">88% consistency score this month.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              <div className="emerald-metric-circle">88%</div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Optimal Recovery</div>
                <div style={{ fontSize: '0.75rem', color: '#a7f3d0' }}>Rest & sleep score in sync</div>
              </div>
            </div>
          </div>

          {/* Card 4: Bottom Far Right Soft Cyan */}
          <div className="bento-card bento-card-cyan">
            <div>
              <span className="section-tag" style={{ color: '#0284c7' }}>04 / AI ASSISTANT</span>
              <h3 className="bento-title">Smart AI Goal Assistant</h3>
              <p className="bento-desc">Ask your coach for routine optimization.</p>
            </div>
            <div className="chat-bubble">
              <div style={{ fontWeight: 600, fontSize: '0.75rem', color: '#0284c7', marginBottom: '2px' }}>
                Forge AI Coach:
              </div>
              "You complete 95% of habits when scheduled before 11 AM. Let's move your reading stack to morning!"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
