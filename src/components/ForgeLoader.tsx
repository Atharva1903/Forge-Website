import React, { useEffect, useState } from 'react';
import { forgeLogo } from '../data/content';
import './ForgeLoader.css';

interface ForgeLoaderProps {
  onFinish?: () => void;
}

// 5x5 color matrix derived from Forge logo warm spectrum
// Upper-left (Light Yellow) -> Diagonal (Gold/Orange) -> Lower-right (Red)
const COLOR_MATRIX = [
  ['#fef08a', '#fde047', '#facc15', '#f59e0b', '#fb923c'],
  ['#fde047', '#facc15', '#f59e0b', '#f97316', '#ea580c'],
  ['#facc15', '#f59e0b', '#f97316', '#ea580c', '#ef4444'],
  ['#f59e0b', '#f97316', '#ea580c', '#ef4444', '#dc2626'],
  ['#fb923c', '#ea580c', '#ef4444', '#dc2626', '#b91c1c'],
];

export const ForgeLoader: React.FC<ForgeLoaderProps> = ({ onFinish }) => {
  const [phase, setPhase] = useState<'animating' | 'wordmark' | 'holding' | 'fading' | 'done'>('animating');

  useEffect(() => {
    // 1. Grid wave animation runs (0ms -> ~1400ms)
    // 2. Wordmark reveals at 1400ms
    const wordmarkTimer = setTimeout(() => {
      setPhase('wordmark');
    }, 1400);

    // 3. Holding phase reached at 2200ms
    const holdTimer = setTimeout(() => {
      setPhase('holding');
    }, 2200);

    // 4. Fade out splash screen overlay at 2800ms
    const fadeTimer = setTimeout(() => {
      setPhase('fading');
    }, 2800);

    // 5. Complete and unmount overlay at 3400ms
    const doneTimer = setTimeout(() => {
      setPhase('done');
      if (onFinish) {
        onFinish();
      }
    }, 3400);

    return () => {
      clearTimeout(wordmarkTimer);
      clearTimeout(holdTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  if (phase === 'done') {
    return null;
  }

  return (
    <div className={`forge-loader-overlay ${phase === 'fading' ? 'fade-out' : ''}`}>
      <div className="forge-loader-container">
        {/* 5x5 Grid */}
        <div className="forge-loader-grid">
          {COLOR_MATRIX.map((rowColors, rowIndex) =>
            rowColors.map((color, colIndex) => {
              // Diagonal wave delay: (rowIndex + colIndex) * 110ms
              const delayMs = (rowIndex + colIndex) * 110;
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="forge-loader-cell"
                  style={
                    {
                      '--cell-color': color,
                      '--delay': `${delayMs}ms`,
                    } as React.CSSProperties
                  }
                />
              );
            })
          )}
        </div>

        {/* Forge Wordmark */}
        <div className={`forge-loader-wordmark ${phase !== 'animating' ? 'visible' : ''}`}>
          <img src={forgeLogo} alt="Forge Logo" className="forge-loader-logo-icon" />
          <span className="forge-loader-text">FORGE</span>
        </div>
      </div>
    </div>
  );
};
