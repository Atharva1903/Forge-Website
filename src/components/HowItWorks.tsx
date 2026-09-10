import React from 'react';
import { processSteps } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './HowItWorks.css';

interface HowItWorksProps {
  onOpenDownload: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload }) => {
  return (
    <section className="howitworks-section" id="app">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">HOW IT WORKS</span>
          <h2 className="section-title">
            From Goal Mapping to <br />
            <span className="serif-italic">Streak Mastery.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0 auto' }}>
            A seamless end-to-end habit experience powered by intelligence at every milestone.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="howitworks-grid">
          {processSteps.map((step) => (
            <div key={step.step} className="step-card">
              <div className="step-img-box">
                <img src={step.image} alt={step.title} className="step-img" />
                <div className="step-number-tag">STEP {step.step}</div>
              </div>
              <div className="step-body">
                <div>
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
            </div>
          ))}
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
