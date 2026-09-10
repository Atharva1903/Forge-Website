import React from 'react';
import { Sparkles, Flame, Play, ArrowRight, Check, Target, Clock, Zap } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';
import './Hero.css';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onOpenVideo }) => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>AI-POWERED HABIT INTELLIGENCE</span>
        </div>

        {/* Main Title */}
        <h1 className="hero-title">
          The Future of Personal <br />
          <span className="hero-title-italic">Growth & Habit Intelligence</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Personalized habit tracking, daily goal intelligence, and consistency analytics—seamlessly integrated into your routine.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <button className="btn btn-primary btn-lg" onClick={onOpenDownload}>
            <span>Download App</span>
            <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary btn-lg" onClick={onOpenVideo}>
            <div className="play-icon-circle">
              <Play size={12} fill="white" style={{ marginLeft: '1px' }} />
            </div>
            <span>See How It Works</span>
          </button>
        </div>

        {/* 3D Smartphone Showcase */}
        <div className="hero-showcase">
          <div className="mockup-container">
            {/* Left Phone Mockup */}
            <PhoneFrame className="phone-left">
              <div className="screen-header">
                <span className="screen-time">09:41 AM</span>
                <div className="screen-greeting">Deep Focus Flow</div>
              </div>
              <div className="screen-body">
                <div className="screen-card">
                  <div className="screen-card-header">
                    <span>Focus Session</span>
                    <span className="streak-pill">ACTIVE</span>
                  </div>
                  <div className="screen-stat-val">45:00</div>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                    Distraction Blocker Enabled
                  </p>
                </div>
                <div className="screen-card">
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#e2e8f0' }}>
                    Focus Score
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981', marginTop: '0.2rem' }}>
                    94 / 100
                  </div>
                </div>
              </div>
            </PhoneFrame>

            {/* Center Main Phone Mockup */}
            <PhoneFrame className="phone-center animate-float">
              <div className="screen-header">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="screen-time">09:41 AM</span>
                  <span className="streak-pill">
                    <Flame size={12} /> 14 DAYS
                  </span>
                </div>
                <div className="screen-greeting">Good Morning, Alex</div>
              </div>
              <div className="screen-body">
                <div className="screen-card" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)' }}>
                  <div className="screen-card-header">
                    <span>Today's Consistency</span>
                    <span style={{ color: '#60a5fa', fontWeight: 700 }}>88%</span>
                  </div>
                  <div className="screen-stat-val">4 of 5 Done</div>
                  <div style={{ width: '100%', height: '6px', background: '#334155', borderRadius: '3px', marginTop: '0.5rem', overflow: 'hidden' }}>
                    <div style={{ width: '80%', height: '100%', background: '#2563eb' }}></div>
                  </div>
                </div>

                <div className="screen-card">
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.4rem' }}>
                    MORNING ROUTINE
                  </div>
                  <div className="routine-list">
                    <div className="routine-item">
                      <div className="check-dot"><Check size={10} /></div>
                      <span>15 Min Meditation</span>
                    </div>
                    <div className="routine-item">
                      <div className="check-dot"><Check size={10} /></div>
                      <span>500ml Hydration</span>
                    </div>
                    <div className="routine-item">
                      <div className="check-dot"><Check size={10} /></div>
                      <span>30 Min Morning Run</span>
                    </div>
                    <div className="routine-item" style={{ opacity: 0.6 }}>
                      <div className="check-dot" style={{ background: '#475569' }}></div>
                      <span>Read 20 Pages</span>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneFrame>

            {/* Right Phone Mockup */}
            <PhoneFrame className="phone-right">
              <div className="screen-header">
                <span className="screen-time">09:41 AM</span>
                <div className="screen-greeting">Goal Milestones</div>
              </div>
              <div className="screen-body">
                <div className="screen-card">
                  <div className="screen-card-header">
                    <span>Quarterly Target</span>
                    <span style={{ color: '#10b981', fontWeight: 700 }}>78%</span>
                  </div>
                  <div className="screen-stat-val">Read 12 Books</div>
                  <p style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                    9 of 12 Completed
                  </p>
                </div>
                <div className="screen-card">
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#e2e8f0' }}>
                    Weekly Consistency
                  </div>
                  <div style={{ display: 'flex', gap: '4px', marginTop: '0.5rem' }}>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: '0.65rem', color: '#94a3b8' }}>
                        <div>{d}</div>
                        <div style={{ width: '100%', height: '18px', background: i < 5 ? '#2563eb' : '#334155', borderRadius: '4px', marginTop: '2px' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </div>
        </div>

        {/* Feature Ticker Pills */}
        <div className="hero-feature-pills">
          <div className="hero-pill-btn">
            <Flame size={16} color="#2563eb" />
            <span>Habit Tracking</span>
          </div>
          <div className="hero-pill-btn">
            <Target size={16} color="#0284c7" />
            <span>Goal Milestones</span>
          </div>
          <div className="hero-pill-btn">
            <Clock size={16} color="#10b981" />
            <span>Custom Routines</span>
          </div>
          <div className="hero-pill-btn">
            <Zap size={16} color="#f59e0b" />
            <span>Smart Predictions</span>
          </div>
        </div>
      </div>
    </section>
  );
};
