'use client';

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const iconSizes = {
    sm: 32,
    md: 42,
    lg: 52,
    xl: 68,
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subTextSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  const px = iconSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Custom Vector Hexagonal 'B' Monogram */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: px, height: px }}
      >
        <svg
          viewBox="0 0 100 100"
          width={px}
          height={px}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_4px_16px_rgba(239,68,68,0.35)]"
        >
          <defs>
            {/* Primary Crimson-Red Gradient */}
            <linearGradient id="beezGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="45%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>

            {/* Amber-Gold Highlight for the "Bee" identity */}
            <linearGradient id="beezAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>

            {/* Background Shield Gradient */}
            <linearGradient id="beezBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f1414" />
              <stop offset="100%" stopColor="#0d0808" />
            </linearGradient>
          </defs>

          {/* Hexagon Outer Badge */}
          <polygon
            points="50,4 90,26 90,74 50,96 10,74 10,26"
            fill="url(#beezBg)"
            stroke="url(#beezGradient)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Geometric Honeycomb Rings */}
          <polygon
            points="50,13 81,31 81,69 50,87 19,69 19,31"
            fill="none"
            stroke="rgba(239, 68, 68, 0.2)"
            strokeWidth="1.5"
          />

          {/* Stylized Modern 'B' with Wing Cutouts */}
          {/* Vertical stem */}
          <rect x="33" y="27" width="8" height="46" rx="4" fill="url(#beezGradient)" />

          {/* Upper B Loop / Wing */}
          <path
            d="M38 27 H56 C64 27 69 32 69 38 C69 44 64 48 56 48 H38 V27 Z"
            fill="url(#beezGradient)"
          />
          {/* Upper inner counter */}
          <path
            d="M42 33 H54 C58 33 61 35 61 38 C61 41 58 43 54 43 H42 V33 Z"
            fill="#120b0b"
          />

          {/* Lower B Loop / Wing */}
          <path
            d="M38 48 H60 C68 48 73 53 73 60 C73 67 68 73 60 73 H38 V48 Z"
            fill="url(#beezGradient)"
          />
          {/* Lower inner counter */}
          <path
            d="M42 53 H56 C61 53 64 56 64 60 C64 64 61 67 56 67 H42 V53 Z"
            fill="#120b0b"
          />

          {/* Dynamic Golden Energy Node / Stinger Accent */}
          <circle cx="72" cy="28" r="3.5" fill="url(#beezAccent)" />
          <circle cx="72" cy="28" r="6" stroke="url(#beezAccent)" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`${textSizes[size]} font-black tracking-tight gradient-text font-poppins leading-none`}
            >
              Beez
            </span>
            <span className={`${textSizes[size]} font-bold text-white font-poppins leading-none`}>
              Digital
            </span>
          </div>
          <span
            className={`${subTextSizes[size]} tracking-[0.22em] uppercase font-bold text-gray-400 mt-1`}
          >
            Growth Architecture
          </span>
        </div>
      )}
    </div>
  );
}
