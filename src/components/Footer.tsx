import React, { useState } from 'react';
import { forgeLogo } from '../data/content';
import { ArrowRight, Check } from 'lucide-react';
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
            <button className="btn btn-accent" type="submit">
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
              <li><a href="#how-it-works" className="footer-link">Daily Habits</a></li>
              <li><a href="#how-it-works" className="footer-link">Goal Tracker</a></li>
              <li><a href="#features" className="footer-link">Discipline Score</a></li>
              <li><a href="#features" className="footer-link">Monthly Heatmaps</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About Forge</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Press Kit</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Privacy */}
          <div>
            <h4 className="footer-col-title">Legal & Privacy</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Cookie Settings</a></li>
              <li><a href="#" className="footer-link">Security Overview</a></li>
              <li><a href="https://github.com/Atharva1903/Forge-Website" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub Repository</a></li>
            </ul>
          </div>
        </div>

        {/* Centered Copyright with Author GitHub Link */}
        <div className="footer-bottom-centered">
          <p>
            © {new Date().getFullYear()} Forge. Developed by{' '}
            <a
              href="https://github.com/Atharva1903"
              target="_blank"
              rel="noopener noreferrer"
              className="author-link"
            >
              Atharva Kakade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
