import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Small label */}
          <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4">
            Financial Intelligence
          </p>

          {/* Main headline - asymmetric, large */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.1] mb-6">
            Financial data,
            <br />
            <span className="text-text-secondary">without the noise.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-text-secondary max-w-lg mb-10">
            Access company financials, SEC filings, and key metrics. No clickbait,
            no speculation—just the data you need.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/search"
              className="
                inline-flex items-center justify-center
                px-6 py-3 text-base font-medium
                bg-text-primary text-text-inverse
                rounded-medium
                hover:opacity-90
                active:scale-[0.98]
                transition-all duration-150
              "
            >
              Start searching
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              to="/search"
              className="
                inline-flex items-center justify-center
                px-6 py-3 text-base font-medium
                text-text-primary
                border border-border
                rounded-medium
                hover:bg-background-tertiary
                transition-colors duration-150
              "
            >
              View demo
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border">
            <div>
              <p className="text-2xl font-semibold text-text-primary font-mono">10K+</p>
              <p className="text-sm text-text-tertiary mt-1">Companies</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-text-primary font-mono">SEC</p>
              <p className="text-sm text-text-tertiary mt-1">Filings access</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-text-primary font-mono">Real-time</p>
              <p className="text-sm text-text-tertiary mt-1">Data updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
