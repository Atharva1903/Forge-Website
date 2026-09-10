import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { forgeLogo, dashImg } from '../data/content';
import { PhoneFrame } from './PhoneFrame';
import './CTABanner.css';

interface CTABannerProps {
  onOpenDownload: () => void;
  onOpenVideo: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenDownload, onOpenVideo }) => {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <img src={forgeLogo} alt="Forge Logo" style={{ width: 28, height: 28, objectFit: 'contain' }} />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>FORGE</span>
            </div>
            <h2 className="cta-title">
              Build. Track. Improve. <br />
              <span className="serif-italic">Start your journey today.</span>
            </h2>
            <p className="cta-sub">
              Start building the version of yourself you want to become. Download Forge today and turn intention into lasting consistency.
            </p>
            <div className="cta-btns">
              <button className="btn btn-primary btn-lg" onClick={onOpenDownload}>
                <span>Get Started Free</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary btn-lg" onClick={onOpenVideo}>
                <Play size={14} fill="#0f172a" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Floating Phone Mockup with REAL Forge Screenshot */}
          <PhoneFrame className="cta-phone-box" imgSrc={dashImg} altText="Forge App Screenshot" />
        </div>
      </div>
    </section>
  );
};
