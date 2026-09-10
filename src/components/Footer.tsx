import React, { useState } from 'react';
import { forgeLogo } from '../data/content';
import { ArrowRight, Check, Share2, Globe, MessageCircle } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Box */}
        <div className="footer-newsletter-box">
          <div className="newsletter-text">
            <h3 className="newsletter-title">Build. Track. Improve.</h3>
            <p className="newsletter-desc">
              Subscribe to our weekly productivity & habit newsletter. Direct science-backed consistency tips, no spam.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              {subscribed ? (
                <>
                  <Check size={16} />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-info">
            <div className="footer-logo">
              <img src={forgeLogo} alt="Forge Logo" className="brand-logo-img" />
              <span>Forge</span>
            </div>
            <p className="footer-desc">
              Build. Track. Improve. Forge is the personal productivity companion designed to help you build habits, track goals, and continuously improve.
            </p>
          </div>

          {/* Col 1 */}
          <div>
            <h4 className="footer-col-title">Product</h4>
            <ul className="footer-links">
              <li><a href="#product" className="footer-link">Daily Habits</a></li>
              <li><a href="#product" className="footer-link">Goal Tracker</a></li>
              <li><a href="#product" className="footer-link">Progress Analytics</a></li>
              <li><a href="#plans" className="footer-link">Pricing Plans</a></li>
              <li><a href="#how-it-works" className="footer-link">Monthly Heatmaps</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About Forge</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Press Kit</a></li>
              <li><a href="#articles" className="footer-link">Blog & Insights</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Habit Science Guide</a></li>
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="https://github.com/Atharva1903/Forge-Website" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub Repository</a></li>
              <li><a href="#" className="footer-link">Security & Privacy</a></li>
              <li><a href="#" className="footer-link">API Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Forge, Inc. All rights reserved.</div>
          <div className="footer-legal-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Cookie Settings</a>
          </div>
          <div className="footer-socials">
            <button className="icon-btn" aria-label="Share"><Share2 size={16} /></button>
            <button className="icon-btn" aria-label="Global"><Globe size={16} /></button>
            <button className="icon-btn" aria-label="Community"><MessageCircle size={16} /></button>
          </div>
        </div>
      </div>
    </footer>
  );
};
