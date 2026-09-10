import React from 'react';
import './PhoneFrame.css';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = '', style }) => {
  return (
    <div className={`phone-frame-wrapper ${className}`} style={style}>
      <img src="/Iphone.png" alt="iPhone Frame" className="phone-frame-img" />
      <div className="phone-screen-content">
        <div className="phone-screen-inner">{children}</div>
      </div>
    </div>
  );
};
