import React, { useState } from 'react';
import { pricingPlans } from '../data/content';
import { Check } from 'lucide-react';
import './Pricing.css';

interface PricingProps {
  onOpenDownload: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDownload }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="pricing-section" id="plans">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag">PRICING</span>
          <h2 className="section-title">
            One App, Every Goal. <br />
            <span className="serif-italic">Choose Your Plan.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0 auto' }}>
            Select the plan that fits your growth frequency. Upgrade or cancel anytime.
          </p>
        </div>

        {/* Monthly / Annual Toggle */}
        <div className="pricing-toggle-wrapper">
          <div className="pricing-toggle-bg">
            <button
              className={`toggle-pill ${!isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`toggle-pill ${isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </button>
          </div>
          <div className="discount-badge">Save 20%</div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={plan.id}
                className={`pricing-card ${plan.popular ? 'featured' : ''}`}
              >
                {plan.popular && <div className="popular-ribbon">POPULAR</div>}
                <div>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>

                  <div className="plan-price-box">
                    <span className="price-amount">${price}</span>
                    <span className="price-period">/ month</span>
                  </div>

                  <ul className="feature-list">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="feature-item">
                        <Check size={18} className="feature-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`btn ${plan.popular ? 'btn-accent' : 'btn-secondary'} btn-lg`}
                  style={{ width: '100%' }}
                  onClick={onOpenDownload}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
