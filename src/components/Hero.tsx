import React from 'react';
import { ArrowRight, Flame, Target, BarChart2, Calendar } from 'lucide-react';
import { forgeLogo, dashImg, habitsImg, goalsImg } from '../data/content';
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
        {/* Logo & Tagline Pill Badge */}
        <div className="hero-badge">
          <img src={forgeLogo} alt="Forge Logo" style={{ width: 16, height: 16, objectFit: 'contain' }} />
          <span>BUILD. TRACK. IMPROVE.</span>
        </div>

        {/* Main Title */}
        <h1 className="hero-title">
          Build better habits. <br />
          <span className="hero-title-italic">Become better every day.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Forge is your productivity companion to build daily routines, track active streaks, achieve ambitious goals, and continuously improve through analytics.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <button className="btn btn-primary btn-lg" onClick={onOpenDownload}>
            <span>Get Started</span>
            <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary btn-lg" onClick={onOpenVideo}>
            <span>Explore Forge Demo</span>
          </button>
        </div>

        {/* 3D Smartphone Showcase featuring REAL Forge App Screenshots */}
        <div className="hero-showcase">
          <div className="mockup-container">
            {/* Left Phone: Real Habits Screenshot */}
            <PhoneFrame className="phone-left" imgSrc={habitsImg} altText="Forge Habits Screenshot" />

            {/* Center Main Phone: Real Dashboard Screenshot */}
            <PhoneFrame className="phone-center animate-float" imgSrc={dashImg} altText="Forge Dashboard Screenshot" />

            {/* Right Phone: Real Goals Screenshot */}
            <PhoneFrame className="phone-right" imgSrc={goalsImg} altText="Forge Goals Screenshot" />
          </div>
        </div>

        {/* Feature Ticker Pills */}
        <div className="hero-feature-pills">
          <div className="hero-pill-btn">
            <Flame size={16} color="#f97316" />
            <span>Daily Routines</span>
          </div>
          <div className="hero-pill-btn">
            <Target size={16} color="#0284c7" />
            <span>Goal Progress</span>
          </div>
          <div className="hero-pill-btn">
            <BarChart2 size={16} color="#10b981" />
            <span>Progress Analytics</span>
          </div>
          <div className="hero-pill-btn">
            <Calendar size={16} color="#a855f7" />
            <span>Habit Heatmaps</span>
          </div>
        </div>
      </div>
    </section>
  );
};
