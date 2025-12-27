"use client";

import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  gradient = "from-brand-500 to-brand-600",
}: FeatureCardProps) {
  return (
    <div className="group card-hover bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-brand-200 dark:hover:border-brand-800 transition-colors">
      {/* Icon container */}
      <div
        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-smooth text-xl sm:text-2xl`}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>

      {/* Arrow */}
      <div className="mt-4 flex items-center space-x-2 text-brand-600 dark:text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm font-medium">Learn more</span>
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}
