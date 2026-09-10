import React, { useState } from 'react';
import { faqItems } from '../data/content';
import { ChevronDown, Headset, MessageSquare } from 'lucide-react';
import './FAQ.css';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        {/* Section Header */}
        <div>
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            Common Questions, <br />
            <span className="serif-italic">Clear Answers.</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about Forge features, subscriptions, and security.
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="faq-layout">
          {/* Left Support Card */}
          <div className="faq-support-card">
            <div>
              <div className="support-icon">
                <Headset size={24} />
              </div>
              <h3 className="support-title">Need Custom Help?</h3>
              <p className="support-desc">
                Have questions before starting? Our dedicated personal growth support team is available 24/7.
              </p>
            </div>
            <button className="btn btn-primary" onClick={() => alert('Support chat opening...')}>
              <MessageSquare size={16} />
              <span>Contact 24/7 Support</span>
            </button>
          </div>

          {/* Right Accordion List */}
          <div className="accordion-list">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`accordion-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    className="accordion-question"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={20}
                      className={`chevron-icon ${isOpen ? 'open' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="accordion-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
