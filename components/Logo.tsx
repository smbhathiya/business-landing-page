'use client';

import React, { useId } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  glow?: boolean;
}

export default function Logo({
  size = 'md',
  showText = true,
  className = '',
  glow = true,
}: LogoProps) {
  const uid = useId().replace(/:/g, '');

  const iconSizes = {
    sm: 34,
    md: 44,
    lg: 54,
    xl: 72,
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

  const ids = {
    grad: `beez-brand-grad-${uid}`,
    core: `beez-brand-core-${uid}`,
    shield: `beez-brand-shield-${uid}`,
  };

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* ── Minimalist Geometric Honeycomb 'B' Monogram ── */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-105"
        style={{ width: px, height: px }}
      >
        {/* Ambient Backlight Glow */}
        {glow && (
          <div
            className="absolute inset-0 rounded-full blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.45) 0%, rgba(245, 158, 11, 0.2) 60%, transparent 80%)',
            }}
          />
        )}

        <svg
          viewBox="0 0 100 100"
          width={px}
          height={px}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 filter drop-shadow-[0_4px_16px_rgba(239,68,68,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_6px_22px_rgba(239,68,68,0.55)]"
        >
          <defs>
            {/* Primary Crimson-Amber Brand Gradient */}
            <linearGradient id={ids.grad} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="50%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>

            {/* Glowing Golden Energy Core Gradient */}
            <radialGradient id={ids.core} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#ef4444" />
            </radialGradient>

            {/* Shield Subtle Rim Gradient */}
            <linearGradient id={ids.shield} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Hexagon Outer Badge */}
          <polygon
            points="50,5 90,27 90,73 50,95 10,73 10,27"
            fill="#0c060a"
            stroke={`url(#${ids.shield})`}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Minimalist Bold 'B' Monogram */}
          {/* Vertical Spine */}
          <rect x="27" y="24" width="10" height="52" rx="3.5" fill={`url(#${ids.grad})`} />

          {/* Upper Loop */}
          <path
            d="M34 24 H56 C65 24 71 29 71 38 C71 46 65 50 56 50 H34 Z"
            fill={`url(#${ids.grad})`}
          />
          <path
            d="M39 31 H54 C58 31 61 34 61 38 C61 42 58 44 54 44 H39 Z"
            fill="#0c060a"
          />

          {/* Lower Loop */}
          <path
            d="M34 50 H59 C69 50 75 55 75 63 C75 72 69 76 59 76 H34 Z"
            fill={`url(#${ids.grad})`}
          />
          <path
            d="M39 56 H56 C60 56 64 59 64 63 C64 67 60 70 56 70 H39 Z"
            fill="#0c060a"
          />

          {/* Radiant Apex Gold Spark */}
          <circle cx="75" cy="24" r="4.5" fill={`url(#${ids.core})`} />
          <circle cx="75" cy="24" r="7" stroke="#fbbf24" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </div>

      {/* ── Brand Wordmark Typography ── */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`${textSizes[size]} font-black tracking-tight bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 bg-clip-text text-transparent font-poppins`}
            >
              Beez
            </span>
            <span
              className={`${textSizes[size]} font-bold text-white font-poppins transition-colors group-hover:text-red-100`}
            >
              Digital
            </span>
          </div>
          <span
            className={`${subTextSizes[size]} tracking-[0.22em] uppercase font-semibold text-gray-400 group-hover:text-red-300 transition-colors mt-1`}
          >
            Growth Architecture
          </span>
        </div>
      )}
    </div>
  );
}
