"use client";

import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

interface HeaderProps {
  navLinks?: NavLinkProps[];
}

export default function Header({ navLinks = [] }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-gradient">FREE</div>
          <div className="text-xs text-gray-600 font-medium">by Ma™</div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-brand-600 text-white px-6 py-2 rounded-full font-medium hover:bg-brand-700 transition-smooth">
          Get Started
        </button>
      </nav>
    </header>
  );
}
