import React, { useState } from 'react';
import { dashImg, habitsImg, goalsImg, statsImg, reportImg } from '../data/content';
import { PhoneFrame } from './PhoneFrame';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './AppGallery.css';

interface GalleryItem {
  id: string;
  label: string;
  title: string;
  description: string;
  imgSrc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'home',
    label: 'Home Dashboard',
    title: 'Daily Command Center',
    description: 'Track overall consistency, current active streak days, daily routines, and active goal targets at a glance.',
    imgSrc: dashImg,
  },
  {
    id: 'habits',
    label: 'Habits & Routines',
    title: 'Turn Intention into Consistency',
    description: 'Check off daily habits, review weekly completion bar charts, and keep your 67-day streak alive.',
    imgSrc: habitsImg,
  },
  {
    id: 'goals',
    label: 'Goals & Targets',
    title: 'Ambitious Goals to Measurable Progress',
    description: 'Short-term and long-term goal tracking with percentage progress bars, deadline dates, and task checklists.',
    imgSrc: goalsImg,
  },
  {
    id: 'stats',
    label: 'Statistics & Analytics',
    title: 'See How Far You Have Come',
    description: 'Total goals created, active targets in flight, and completed achievement trophies with clean visual graphs.',
    imgSrc: statsImg,
  },
  {
    id: 'report',
    label: 'Monthly Heat-Map',
    title: 'Your Progress, at a Glance',
    description: 'Interactive 30-day calendar habit heat-map tracking discipline score over motivation month after month.',
    imgSrc: reportImg,
  },
];

export const AppGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const currentItem = galleryItems[activeIndex];

  // Helper indices for carousel
  const leftIdx = (activeIndex - 1 + galleryItems.length) % galleryItems.length;
  const rightIdx = (activeIndex + 1) % galleryItems.length;

  return (
    <section className="app-gallery-section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">FORGE APP SHOWCASE</span>
          <h2 className="section-title">
            Everything you need <br />
            <span className="serif-italic">to keep moving forward.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0 auto' }}>
            Explore actual screenshots of the real Forge application. Designed for focus, clarity, and daily consistency.
          </p>
        </div>

        {/* Gallery Tabs */}
        <div className="gallery-tabs">
          {galleryItems.map((item, idx) => (
            <button
              key={item.id}
              className={`gallery-tab-btn ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 3D Phone Stage */}
        <div className="gallery-stage">
          {/* Left Phone */}
          <div className="gallery-phone-item secondary" onClick={prevItem}>
            <PhoneFrame imgSrc={galleryItems[leftIdx].imgSrc} altText={galleryItems[leftIdx].label} />
          </div>

          {/* Center Primary Active Phone */}
          <div className="gallery-phone-item primary">
            <PhoneFrame imgSrc={currentItem.imgSrc} altText={currentItem.label} />
          </div>

          {/* Right Phone */}
          <div className="gallery-phone-item secondary" onClick={nextItem}>
            <PhoneFrame imgSrc={galleryItems[rightIdx].imgSrc} altText={galleryItems[rightIdx].label} />
          </div>
        </div>

        {/* Controls & Description */}
        <div className="gallery-caption">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
            <button className="icon-btn" onClick={prevItem} aria-label="Previous screenshot">
              <ChevronLeft size={20} />
            </button>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#64748b' }}>
              {activeIndex + 1} of {galleryItems.length}
            </span>
            <button className="icon-btn" onClick={nextItem} aria-label="Next screenshot">
              <ChevronRight size={20} />
            </button>
          </div>
          <h3 className="gallery-caption-title">{currentItem.title}</h3>
          <p className="gallery-caption-desc">{currentItem.description}</p>
        </div>
      </div>
    </section>
  );
};
