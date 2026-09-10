import React from 'react';
import { ArrowRight, Play, Flame } from 'lucide-react';
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
            <h2 className="cta-title">
              Take Your Personal Habit <br />
              <span className="serif-italic">Coach Wherever You Go.</span>
            </h2>
            <p className="cta-sub">
              Download Forge today on iOS and Android to experience the future of personal habit intelligence and goal tracking.
            </p>
            <div className="cta-btns">
              <button className="btn btn-primary btn-lg" onClick={onOpenDownload}>
                <span>Download App</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary btn-lg" onClick={onOpenVideo}>
                <Play size={14} fill="#0f172a" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Floating Phone Mockup */}
          <PhoneFrame className="cta-phone-box">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '0.5rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
                  <span>09:41 AM</span>
                  <Flame size={12} color="#f59e0b" />
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, marginTop: '0.5rem', color: 'white' }}>
                  Forge Dashboard
                </div>
                <div style={{ background: '#182232', borderRadius: '12px', padding: '0.75rem', marginTop: '1rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>TODAY'S SCORE</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>96% Complete</div>
                </div>
              </div>
              <div style={{ background: '#2563eb', padding: '0.75rem', borderRadius: '14px', textAlign: 'center', fontWeight: 700, fontSize: '0.85rem', color: 'white' }}>
                Consistency Active
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};
