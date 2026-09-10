import React from 'react';
import { articles } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import './Articles.css';

export const Articles: React.FC = () => {
  return (
    <section className="articles-section" id="articles">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">ARTICLES & INSIGHTS</span>
          <h2 className="section-title">
            The Future of Consistency <br />
            <span className="serif-italic">Starts with a Habit.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0 auto' }}>
            Read the latest science-backed habit tips, focus intelligence insights, and routine wellness guides.
          </p>
        </div>

        {/* 3 Article Cards */}
        <div className="articles-grid">
          {articles.map((item) => (
            <div key={item.id} className="article-card" onClick={() => alert(`Opening article: ${item.title}`)}>
              <div className="article-img-box">
                <img src={item.image} alt={item.title} className="article-img" />
                <div className="article-tag">{item.tag}</div>
              </div>
              <div className="article-body">
                <h3 className="article-title">{item.title}</h3>
                <div className="article-footer">
                  <span>{item.date} • {item.readTime}</span>
                  <ArrowUpRight size={18} color="#2563eb" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
