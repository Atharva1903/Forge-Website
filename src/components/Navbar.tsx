import React, { useState, useEffect } from 'react';
import { navLinks, forgeLogo } from '../data/content';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  onOpenDownload: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand">
          <img src={forgeLogo} alt="Forge Logo" className="brand-logo-img" />
          <span>Forge</span>
        </a>

        {/* Desktop Links */}
        <nav>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#0f172a" />}
          </button>

          <button className="btn btn-primary btn-sm" onClick={onOpenDownload}>
            <span>Get Started</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <button
          className="btn btn-accent btn-lg"
          style={{ marginTop: '0.5rem' }}
          onClick={() => {
            setMobileOpen(false);
            onOpenDownload();
          }}
        >
          Get Started with Forge
        </button>
      </div>
    </header>
  );
};
