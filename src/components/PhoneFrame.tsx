import React from 'react';
import './PhoneFrame.css';

interface PhoneFrameProps {
  children?: React.ReactNode;
  imgSrc?: string;
  altText?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  imgSrc,
  altText = 'Forge App Screenshot',
  className = '',
  style,
}) => {
  return (
    <div className={`phone-frame-wrapper ${className}`} style={style}>
      <img src="/Iphone.png" alt="iPhone Frame" className="phone-frame-img" />
      <div className="phone-screen-content">
        <div className="phone-screen-inner">
          {imgSrc ? (
            <img src={imgSrc} alt={altText} className="phone-screen-img" />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};
