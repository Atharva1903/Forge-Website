import React, { useState } from 'react';
import { solutionFilterTabs, solutionScreens } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';
import './ProblemSolution.css';

interface ProblemSolutionProps {
  onOpenDownload: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenDownload }) => {
  const [activeTab, setActiveTab] = useState('habits');
  const screen = solutionScreens[activeTab] || solutionScreens['habits'];

  return (
    <section className="problem-solution-section" id="product">
      <div className="container">
        {/* Header Statement */}
        <div className="problem-header">
          <span className="section-tag">PRODUCT SHOWCASE</span>
          <h2 className="problem-title">
            Build habits. Track goals. <br />
            <span className="problem-title-serif">Continuously improve every day.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0 auto' }}>
            Forge brings daily routines, short & long-term goals, progress analytics, and monthly heatmaps into one high-contrast interface.
          </p>
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

        {/* App Showcase Box with REAL Forge Screenshots */}
        <div className="solution-showcase">
          <div className="solution-phones">
            {/* Center Active Featured Mockup with REAL screenshot */}
            <PhoneFrame className="solution-phone-card featured" imgSrc={screen.screenshot} altText={screen.title} />
          </div>

          {/* Details below screenshot */}
          <div className="solution-footer">
            <span className="solution-badge">{screen.badge}</span>
            <h3 className="solution-footer-title">{screen.title}</h3>
            <p className="solution-footer-sub">{screen.subtitle}</p>

            <div className="solution-metrics-row">
              {screen.metrics.map((m, idx) => (
                <div key={idx} className="solution-metric-chip">
                  <CheckCircle2 size={16} color="#0284c7" />
                  <span><strong>{m.label}:</strong> {m.val}</span>
                </div>
              ))}
            </div>

            <div className="solution-footer-btns">
              <button className="btn btn-primary" onClick={onOpenDownload}>
                <span>Get Started Free</span>
              </button>
              <a href="#features" className="btn btn-secondary">
                <span>See All Features</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
