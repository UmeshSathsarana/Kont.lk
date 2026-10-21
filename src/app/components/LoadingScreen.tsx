"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // තත්පර 1.8 කට පසු Loading screen එක Smooth ලෙස Fade out වේ
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); // Animation එක ඉවර වූ පසු DOM එකෙන් ඉවත් කරයි
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050507] transition-opacity duration-500 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Glow Effect */}
      <div className="absolute h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl animate-pulse" />

      {/* Logo & Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* මෙතැනට ඔබේ Logo image එක දමා ඇත */}
        <div className="mb-4 flex items-center justify-center p-2 animate-bounce">
          <img 
            src="/logo.png" 
            alt="Knot.lk Logo" 
            className="h-16 w-auto object-contain" 
          />
        </div>

        <h1 className="text-3xl font-bold tracking-wide text-white md:text-4xl">
          Knot<span className="text-[#d4af37]">.lk</span>
        </h1>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-400">
          Connecting Hearts Digitally
        </p>

        {/* Loading Progress Bar */}
        <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left bg-gradient-to-r from-[#d4af37]/40 via-[#d4af37] to-[#d4af37]/40 animate-pulse" />
        </div>
      </div>
    </div>
  );
}