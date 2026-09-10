import React from 'react';
import { habitsImg } from '../data/content';
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
            <span className="serif-italic">Daily Growth & Mastery.</span>
          </h2>
          <p className="section-subtitle">
            Forge packs daily habit routines, streak counters, short-term vs long-term goal tracking, and monthly heatmaps into one high-performance experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card 1: Tall Left Dark Blue with REAL Habits Screenshot */}
          <div className="bento-card bento-card-tall">
            <div>
              <span className="section-tag" style={{ color: '#60a5fa' }}>01 / HABITS & STREAKS</span>
              <h3 className="bento-title">Daily Routines & Streak Tracking</h3>
              <p className="bento-desc">
                Turn intention into consistency with daily habit checklists and active streak trackers.
              </p>
            </div>
            <PhoneFrame className="bento-mockup" imgSrc={habitsImg} altText="Forge Habits Screen" />
          </div>

          {/* Card 2: Top Right Obsidian */}
          <div className="bento-card bento-card-dark">
            <div>
              <span className="section-tag" style={{ color: '#94a3b8' }}>02 / GOAL TARGETS</span>
              <h3 className="bento-title">Short-Term & Long-Term Goals</h3>
              <p className="bento-desc">
                Turn ambitious goals into measurable progress with category tags and deadlines.
              </p>
            </div>
            <div className="bento-timeline">
              <div className="timeline-badge">67% COMPLETED</div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Learn MERN Stack</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>4 of 6 tasks completed • Deadline Oct 30</div>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Middle Emerald Green */}
          <div className="bento-card bento-card-emerald">
            <div>
              <span className="section-tag" style={{ color: '#6ee7b7' }}>03 / CONSISTENCY</span>
              <h3 className="bento-title">Discipline Score</h3>
              <p className="bento-desc">Discipline over motivation score.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              <div className="emerald-metric-circle">60%</div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Consistency Score</div>
                <div style={{ fontSize: '0.75rem', color: '#a7f3d0' }}>Discipline over motivation</div>
              </div>
            </div>
          </div>

          {/* Card 4: Bottom Far Right Soft Cyan with REAL Report Heatmap */}
          <div className="bento-card bento-card-cyan">
            <div>
              <span className="section-tag" style={{ color: '#0284c7' }}>04 / HEATMAPS</span>
              <h3 className="bento-title">30-Day Habit Heat-Map</h3>
              <p className="bento-desc">Visualize your progress across the calendar month.</p>
            </div>
            <div className="chat-bubble">
              <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#0284c7', marginBottom: '2px' }}>
                Monthly Habit Heat-Map
              </div>
              "View active calendar completion dots month after month to keep momentum alive!"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
