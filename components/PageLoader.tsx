'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Growth Architecture...');

  useEffect(() => {
    let hasLoaded = false;
    try {
      hasLoaded = Boolean(sessionStorage.getItem('beez_loader_shown'));
    } catch {
      hasLoaded = false;
    }

    if (hasLoaded) {
      const skipTimer = setTimeout(() => {
        setLoading(false);
      }, 0);
      return () => clearTimeout(skipTimer);
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            try {
              sessionStorage.setItem('beez_loader_shown', 'true');
            } catch {
              // Ignore storage errors
            }
          }, 350);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 15) + 8;
        if (next > 40 && next < 75) {
          setStatusText('Loading Algorithmic Search Graphs...');
        } else if (next >= 75) {
          setStatusText('Finalizing Enterprise Experience...');
        }
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#07070a] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Ambient background glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/15 rounded-full blur-[140px] animate-orb" />
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* Animated Logo Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Logo size="xl" showText={true} />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-4 border border-white/10 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 via-red-500 to-amber-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.7)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Status & Percentage */}
            <div className="flex justify-between items-center w-full text-xs font-semibold">
              <span className="text-gray-400 font-medium truncate pr-2">{statusText}</span>
              <span className="gradient-text font-black font-poppins">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
