"use client";

import { useState } from "react";
import SettingsDropdown from "./SettingsDropdown";

interface NavLinkProps {
  href: string;
  label: string;
}

interface HeaderProps {
  navLinks?: NavLinkProps[];
}

export default function Header({ navLinks = [] }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-xl sm:text-2xl font-bold text-gradient">
            FREE
          </div>
          <div className="text-xs sm:text-xs text-gray-600 dark:text-gray-400 font-medium">
            by Ma™
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side - CTA and Settings */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="hidden sm:block bg-brand-600 dark:bg-brand-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-brand-700 dark:hover:bg-brand-700 transition-colors">
            Get Started
          </button>

          {/* Settings Dropdown */}
          <SettingsDropdown />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full bg-brand-600 dark:bg-brand-600 text-white px-4 py-3 rounded-full font-medium hover:bg-brand-700 dark:hover:bg-brand-700 transition-colors mt-4">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
