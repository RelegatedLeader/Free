"use client";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-brand-50/30 to-white pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.5}px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-4">
          <p className="text-brand-600 font-semibold text-sm tracking-widest uppercase">
            Welcome to the Future of Self
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient">{title}</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-4 bg-brand-600 text-white rounded-full font-semibold hover:bg-brand-700 transition-smooth hover:shadow-lg">
            {primaryCTA}
          </button>
          <button className="px-8 py-4 border-2 border-brand-600 text-brand-600 rounded-full font-semibold hover:bg-brand-50 transition-smooth">
            {secondaryCTA}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
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
