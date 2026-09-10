import React, { useState } from 'react';
import { testimonials } from '../data/content';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[carouselIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="section-title">
            AI-Powered <br />
            <span className="serif-italic">By Our Achievers.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0 auto' }}>
            Read how thousands of individuals have transformed their consistency with Forge.
          </p>
        </div>

        {/* Top 3D Carousel */}
        <div className="testimonial-carousel">
          <div className="carousel-card">
            <img
              src={activeTestimonial.avatar}
              alt={activeTestimonial.name}
              className="carousel-avatar"
            />
            <p className="carousel-content">"{activeTestimonial.content}"</p>
            <div className="carousel-author">{activeTestimonial.name}</div>
            <div className="carousel-role">{activeTestimonial.role}</div>
          </div>

          {/* Nav Controls */}
          <div className="carousel-nav">
            <button className="icon-btn" onClick={prevSlide} aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: 'flex', gap: '6px' }}>
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`carousel-dot ${carouselIndex === idx ? 'active' : ''}`}
                  onClick={() => setCarouselIndex(idx)}
                ></div>
              ))}
            </div>

            <button className="icon-btn" onClick={nextSlide} aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="review-card">
              <div>
                <div className="review-header">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="review-avatar"
                  />
                  <div>
                    <div className="review-name">{item.name}</div>
                    <div className="review-handle">{item.handle}</div>
                  </div>
                </div>
                <div className="review-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="review-content">{item.content}</p>
              </div>
              <div className="review-footer">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
