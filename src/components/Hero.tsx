"use client";

import { ReactNode } from "react";
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: string;
  secondaryCTA?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA = "Explore Devices",
  secondaryCTA = "Learn More",
}: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-light-to-dark pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brand-200/20 dark:bg-brand-900/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brand-300/20 dark:bg-brand-800/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.5}px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-brand-600 dark:text-brand-400 font-semibold text-xs sm:text-sm tracking-widest uppercase">
            Welcome to the Future of Self
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-gradient">{title}</span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-600 dark:bg-brand-600 text-white rounded-full font-semibold hover:bg-brand-700 dark:hover:bg-brand-700 transition-smooth hover:shadow-lg dark:hover:shadow-brand-600/50">
            {primaryCTA}
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-brand-600 dark:border-brand-500 text-brand-600 dark:text-brand-400 rounded-full font-semibold hover:bg-brand-50 dark:hover:bg-gray-900 transition-smooth">
            {secondaryCTA}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400 dark:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
