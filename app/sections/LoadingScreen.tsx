'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ['Gestionamos', 'Asesoramos', 'Ejecutamos', 'PROGI'];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1800;

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      const wordPhase = Math.floor((elapsed / duration) * words.length);
      setWordIndex(Math.min(wordPhase, words.length - 1));

      if (elapsed >= duration) {
        clearInterval(timer);
        setTimeout(onComplete, 400);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-progi-dark flex flex-col items-center justify-center transition-transform duration-700 ${
        progress >= 100 ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="text-center">
        <p className="text-progi-red text-lg font-medium tracking-widest uppercase mb-8 h-8">
          {words[wordIndex]}
        </p>
        <div className="text-6xl md:text-8xl font-light text-progi-text tabular-nums">
          {progress}
          <span className="text-3xl md:text-4xl text-white/30 ml-1">%</span>
        </div>
        <div className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-progi-red transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}