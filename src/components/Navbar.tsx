import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/content';
import { Flame, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
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
          <div className="brand-icon">
            <Flame size={20} strokeWidth={2.5} />
          </div>
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
          <button className="icon-btn" aria-label="Select Language">
            <Globe size={18} />
          </button>

          <button className="btn btn-primary btn-sm" onClick={onOpenDownload}>
            <span>Get App</span>
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
          Download Forge App
        </button>
      </div>
    </header>
  );
};
