import React from 'react';
import { X, QrCode, Smartphone, Apple } from 'lucide-react';
import './Modals.css';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <h3 className="section-title" style={{ fontSize: '1.75rem' }}>
          Get <span className="serif-italic">Forge App</span>
        </h3>
        <p className="section-subtitle" style={{ fontSize: '0.9375rem', marginTop: '0.5rem' }}>
          Scan the QR code with your phone camera or select your platform below to download directly.
        </p>

        {/* QR Code Demo */}
        <div className="qr-code-placeholder">
          <QrCode size={100} color="#0f172a" />
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b' }}>SCAN TO INSTALL</span>
        </div>

        {/* Store Buttons */}
        <div className="store-buttons">
          <button className="btn btn-primary btn-lg" onClick={() => alert('Redirecting to Apple App Store...')}>
            <Apple size={20} />
            <span>Download for iOS</span>
          </button>
          <button className="btn btn-secondary btn-lg" onClick={() => alert('Redirecting to Google Play Store...')}>
            <Smartphone size={20} />
            <span>Download for Android</span>
          </button>
        </div>
      </div>
    </div>
  );
};
