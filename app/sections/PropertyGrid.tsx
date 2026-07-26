'use client';

import { useState, useRef, useEffect } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import ScrollReveal from '../components/ScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const operationFilters = ['Todas', 'Venta', 'Arriendo'] as const;
const typeFilters = ['Todos', 'Casa', 'Departamento', 'Oficina', 'Terreno'] as const;

export default function PropertyGrid() {
  const [opFilter, setOpFilter] = useState<string>('Todas');
  const [typeFilter, setTypeFilter] = useState<string>('Todos');
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = properties.filter((p) => {
    const opMatch = opFilter === 'Todas' || p.operation === opFilter.toLowerCase();
    const typeMatch = typeFilter === 'Todos' || p.type === typeFilter.toLowerCase();
    return opMatch && typeMatch;
  });

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.property-card');
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    );
  }, [filtered]);

  return (
    <section id="propiedades" className="py-24 md:py-32 bg-progi-dark">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Propiedades <span className="text-progi-red">destacadas</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              Encuentra tu próxima inversión entre nuestro catálogo exclusivo.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {operationFilters.map((f) => (
              <button
                key={f}
                onClick={() => setOpFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  opFilter === f
                    ? 'bg-white text-progi-dark'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {f}
              </button>
            ))}
            <div className="w-px h-8 bg-white/10 mx-2 hidden sm:block" />
            {typeFilters.map((f) => (
              <button
                key={f}
                onClick={() => setTypeFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  typeFilter === f
                    ? 'bg-progi-red text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          {filtered.map((property, index) => (
            <div
              key={property.id}
              className={`property-card ${property.featured && index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/40">
            No hay propiedades que coincidan con los filtros seleccionados.
          </div>
        )}

        <ScrollReveal className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-progi-red hover:text-white transition-colors duration-300 font-medium"
          >
            Ver catálogo completo
            <span className="text-lg">→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}