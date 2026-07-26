'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const columns = [
  ['/images/prop-1.jpg', '/images/prop-4.jpg', '/images/prop-6.jpg'],
  ['/images/prop-2.jpg', '/images/prop-5.jpg', '/images/prop-7.jpg'],
  ['/images/prop-3.jpg', '/images/prop-1.jpg', '/images/prop-4.jpg'],
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      colRefs.current.forEach((col, i) => {
        if (!col) return;
        const direction = i % 2 === 0 ? -80 : 80;
        gsap.to(col, {
          y: direction,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-progi-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white/20 uppercase tracking-widest text-center">
          Nuestro portafolio
        </h2>
      </div>

      <div className="flex gap-4 md:gap-6 px-6 h-[70vh] md:h-[85vh]">
        {columns.map((images, colIndex) => (
          <div
            key={colIndex}
            ref={(el) => { colRefs.current[colIndex] = el; }}
            className={`flex-1 flex flex-col gap-4 md:gap-6 ${colIndex === 1 ? 'mt-12' : ''}`}
          >
            {images.map((src, imgIndex) => (
              <div
                key={imgIndex}
                className="relative flex-1 rounded-2xl overflow-hidden min-h-[200px]"
              >
                <Image
                  src={src}
                  alt={`Galería propiedad ${colIndex}-${imgIndex}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 33vw"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}