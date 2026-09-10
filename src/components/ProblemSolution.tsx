import React, { useState } from 'react';
import { solutionFilterTabs, solutionScreens } from '../data/content';
import { ArrowRight } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';
import './ProblemSolution.css';

interface ProblemSolutionProps {
  onOpenDownload: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenDownload }) => {
  const [activeTab, setActiveTab] = useState('streaks');
  const screen = solutionScreens[activeTab] || solutionScreens['streaks'];

  return (
    <section className="problem-solution-section" id="benefits">
      <div className="container">
        {/* Header Statement */}
        <div className="problem-header">
          <h2 className="problem-title">
            Today's achievers are overwhelmed with a dozen different apps for{' '}
            <span className="problem-title-serif">habits, focus, health, and schedules</span> to complete a day.
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="filter-pills-row">
          {solutionFilterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-pill ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* App Showcase Box */}
        <div className="solution-showcase">
          <div className="solution-phones">
            {/* Left Mockup */}
            <PhoneFrame className="solution-phone-card">
              <div className="solution-badge">LIVE STREAK</div>
              <div className="solution-screen-title">Consistency Matrix</div>
              <div className="solution-screen-sub">Auto-synchronized across devices</div>
              <div className="solution-metric-box">
                <div className="solution-metric-label">Weekly Target</div>
                <div className="solution-metric-val">7 / 7 Days Met</div>
              </div>
              <div className="solution-metric-box">
                <div className="solution-metric-label">Best Streak</div>
                <div className="solution-metric-val">28 Days</div>
              </div>
            </PhoneFrame>

            {/* Center Active Featured Mockup */}
            <PhoneFrame className="solution-phone-card featured">
              <div className="solution-badge">{screen.badge}</div>
              <div className="solution-screen-title">{screen.title}</div>
              <div className="solution-screen-sub">{screen.subtitle}</div>
              {screen.metrics.map((m, idx) => (
                <div key={idx} className="solution-metric-box">
                  <div className="solution-metric-label">{m.label}</div>
                  <div className="solution-metric-val">{m.val}</div>
                </div>
              ))}
            </PhoneFrame>

            {/* Right Mockup */}
            <PhoneFrame className="solution-phone-card">
              <div className="solution-badge">AI INSIGHTS</div>
              <div className="solution-screen-title">Nudge Recommendation</div>
              <div className="solution-screen-sub">Optimized for your circadian rhythm</div>
              <div className="solution-metric-box">
                <div className="solution-metric-label">Peak Focus Hour</div>
                <div className="solution-metric-val">10:00 AM - 12:00 PM</div>
              </div>
              <div className="solution-metric-box">
                <div className="solution-metric-label">Action</div>
                <div className="solution-metric-val">Start Deep Work Block</div>
              </div>
            </PhoneFrame>
          </div>

          {/* Sub-headline & CTAs */}
          <div className="solution-footer">
            <h3 className="solution-footer-title">Your All-in-One Personal Growth Companion</h3>
            <p className="solution-footer-sub">
              Forge combines everything into one seamless app. Smart habit predictions, health insights, and instant reminders wherever you go.
            </p>
            <div className="solution-footer-btns">
              <button className="btn btn-primary" onClick={onOpenDownload}>
                <span>Download App</span>
              </button>
              <a href="#features" className="btn btn-secondary">
                <span>Explore Features</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
