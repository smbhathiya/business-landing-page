'use client';

import { useState, useEffect } from 'react';

export interface DeviceCapability {
  isCapable: boolean;
  isMobile: boolean;
  isLoaded: boolean;
  hardwareTier: 'low' | 'medium' | 'high';
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    isCapable: false,
    isMobile: false,
    isLoaded: false,
    hardwareTier: 'medium',
  });

  useEffect(() => {
    try {
      const isMobileScreen = window.innerWidth < 768;
      const isTouchDevice =
        'ontouchstart' in window || navigator.maxTouchPoints > 1;

      // Check for prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 4;

      // Check device memory (if supported by Chrome/Edge)
      const nav = navigator as unknown as { deviceMemory?: number };
      const memory = nav.deviceMemory || 4;

      // Check WebGL 2 / WebGL availability
      let hasWebGL = false;
      try {
        const canvas = document.createElement('canvas');
        hasWebGL = Boolean(
          window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch {
        hasWebGL = false;
      }

      // Determine hardware tier
      let tier: 'low' | 'medium' | 'high' = 'high';
      if (cores <= 2 || memory <= 2 || !hasWebGL || isMobileScreen) {
        tier = 'low';
      } else if (cores <= 4 || memory <= 4) {
        tier = 'medium';
      }

      // Advanced 3D graphics should run if:
      // 1. Not prefers reduced motion
      // 2. Has WebGL capability
      // 3. Not on a small mobile device (screen >= 768px for optimal performance and battery life)
      // 4. Hardware is medium or high tier
      const isCapable =
        hasWebGL &&
        !prefersReducedMotion &&
        !isMobileScreen &&
        tier !== 'low';

      setCapability({
        isCapable,
        isMobile: isMobileScreen || isTouchDevice,
        isLoaded: true,
        hardwareTier: tier,
      });
    } catch {
      // Graceful fallback
      setCapability({
        isCapable: false,
        isMobile: false,
        isLoaded: true,
        hardwareTier: 'low',
      });
    }
  }, []);

  return capability;
}
