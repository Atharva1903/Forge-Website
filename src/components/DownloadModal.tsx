import React from 'react';
import { X, Download, Smartphone, CheckCircle } from 'lucide-react';
import { forgeLogo } from '../data/content';
import './Modals.css';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Construct absolute APK download URL for QR code scan
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const apkPath = '/app/Forge.apk';
  const fullDownloadUrl = `${origin}${apkPath}`;
  
  // Real QR Code API URL
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    fullDownloadUrl
  )}&color=000000&bgcolor=ffffff&margin=10`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <img src={forgeLogo} alt="Forge Logo" className="modal-logo" />
          <h3 className="modal-title">Get Forge App</h3>
        </div>

        <p className="modal-subtitle">
          Scan the QR code with your phone camera to download directly, or click the download button below.
        </p>

        {/* Dynamic QR Code */}
        <div className="qr-code-wrapper">
          <img
            src={qrApiUrl}
            alt="Scan QR code to download Forge APK"
            className="qr-code-img"
          />
          <div className="qr-code-label">
            <span>SCAN TO DOWNLOAD APK</span>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="modal-highlights">
          <div className="modal-highlight-item">
            <CheckCircle size={14} color="#f97316" />
            <span>Direct Android APK (Forge.apk)</span>
          </div>
          <div className="modal-highlight-item">
            <CheckCircle size={14} color="#f97316" />
            <span>Fast installation & offline ready</span>
          </div>
        </div>

        {/* Store & Direct Download Buttons */}
        <div className="store-buttons">
          <a
            href={apkPath}
            download="Forge.apk"
            className="btn btn-primary btn-lg modal-download-btn"
          >
            <Download size={20} />
            <span>Download Forge.apk</span>
          </a>

          <a
            href={apkPath}
            download="Forge.apk"
            className="btn btn-secondary btn-lg modal-download-btn"
          >
            <Smartphone size={20} />
            <span>Direct Mobile Install</span>
          </a>
        </div>
      </div>
    </div>
  );
};
