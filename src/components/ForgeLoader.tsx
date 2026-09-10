import React, { useEffect, useState } from 'react';
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
  const [phase, setPhase] = useState<'animating' | 'holding' | 'fading' | 'done'>('animating');

  useEffect(() => {
    // 1. Grid wave animation completes around ~1400ms
    const holdTimer = setTimeout(() => {
      setPhase('holding');
    }, 1400);

    // 2. Fade out splash screen overlay at ~1800ms
    const fadeTimer = setTimeout(() => {
      setPhase('fading');
    }, 1800);

    // 3. Complete and unmount overlay at ~2400ms
    const doneTimer = setTimeout(() => {
      setPhase('done');
      if (onFinish) {
        onFinish();
      }
    }, 2400);

    return () => {
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
      </div>
    </div>
  );
};
