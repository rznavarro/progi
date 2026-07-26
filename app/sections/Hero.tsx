'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from('.hero-line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
      })
        .from(
          subtitleRef.current,
          { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background - reemplazar src con /videos/hero.mp4 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-progi-dark/70 via-progi-dark/50 to-progi-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-progi-dark/60 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 overflow-hidden">
          <span className="hero-line block">Tu corredora</span>
          <span className="hero-line block text-progi-red">de cabecera</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Vendemos y arrendamos tu propiedad, acompañándote en cada paso del camino.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#propiedades"
            className="px-8 py-4 bg-progi-red hover:bg-[#8e1f2d] text-white font-medium rounded-full transition-all duration-300 text-base"
          >
            Ver propiedades disponibles
          </a>
          <a
            href="https://wa.me/56958925205?text=Hola,%20quiero%20conversar%20sobre%20una%20propiedad"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 text-base"
          >
            Conversemos por WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/40" size={28} />
      </div>
    </section>
  );
}