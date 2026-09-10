import React from 'react';
import { processSteps } from '../data/content';
import { CheckCircle2, ArrowRight, Layers, Flame, TrendingUp } from 'lucide-react';
import './HowItWorks.css';

interface HowItWorksProps {
  onOpenDownload: () => void;
}

const stepIcons = [Layers, Flame, TrendingUp];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload }) => {
  return (
    <section className="howitworks-section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">HOW IT WORKS</span>
          <h2 className="section-title">
            From Daily Routine to <br />
            <span className="serif-italic">Continuous Improvement.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0 auto' }}>
            A clear 3-step framework designed to eliminate friction and turn daily goals into long-term habits.
          </p>
        </div>

        {/* 3 Step Process Cards without images */}
        <div className="howitworks-grid">
          {processSteps.map((step, idx) => {
            const IconComponent = stepIcons[idx % stepIcons.length];
            return (
              <div key={step.step} className="step-card">
                <div>
                  <div className="step-header-badge">
                    <IconComponent size={14} />
                    <span>STEP {step.step}</span>
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
                <div className="step-highlights">
                  {step.highlights.map((h, i) => (
                    <div key={i} className="step-highlight-item">
                      <CheckCircle2 size={16} color="#f97316" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="howitworks-ctas">
          <button className="btn btn-primary btn-lg" onClick={onOpenDownload}>
            <span>Get Started Now</span>
          </button>
          <a href="#features" className="btn btn-secondary btn-lg">
            <span>Explore Features</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
