"use client";

import { useState, useEffect } from "react";
import VideoBackground from "./VideoBackground";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  videoSrc?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA = "Explore Devices",
  secondaryCTA = "Learn More",
  videoSrc = "/free_by_ma_background1.mp4",
}: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full">
      <VideoBackground src={videoSrc}>
        {/* Animated background elements (subtle parallax behind video overlay) */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 -left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brand-500/10 dark:bg-brand-600/5 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div
            className="absolute bottom-1/4 -right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brand-400/10 dark:bg-brand-500/5 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          />
        </div>

        {/* Content */}
        <div className="min-h-screen flex items-center justify-center">
          <div
            className={`max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-3 sm:space-y-4">
              <p className="text-brand-300 dark:text-brand-200 font-semibold text-xs sm:text-sm tracking-widest uppercase animate-fade-in">
                Welcome to the Future of Self
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-lg">
                {title}
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-100 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-600 dark:bg-brand-500 text-white rounded-full font-semibold hover:bg-brand-700 dark:hover:bg-brand-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-brand-500/50 hover:scale-105 active:scale-95 backdrop-blur-sm bg-opacity-90">
                {primaryCTA}
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/60 dark:border-white/40 text-white rounded-full font-semibold hover:border-white dark:hover:border-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95">
                {secondaryCTA}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 pointer-events-none w-full">
          <svg
            className="w-6 h-6 text-white/70 drop-shadow-lg"
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
      </VideoBackground>
    </section>
  );
}
