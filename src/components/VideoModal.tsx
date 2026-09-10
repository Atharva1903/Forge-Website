import React from 'react';
import { X, Play } from 'lucide-react';
import './Modals.css';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" style={{ maxWidth: '720px', padding: '1.5rem' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#090d16', borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(15,23,42,0.95) 100%)' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(37,99,235,0.6)', cursor: 'pointer' }}>
              <Play size={28} fill="white" style={{ marginLeft: '4px' }} />
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '1rem' }}>Forge Walkthrough & Product Demo</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>Experience how Forge AI transforms daily habit loops (2:15)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
