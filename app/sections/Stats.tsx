'use client';

import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { value: 12, suffix: '+', label: 'Años de experiencia' },
  { value: 340, suffix: '+', label: 'Propiedades gestionadas' },
  { value: 580, suffix: '+', label: 'Clientes acompañados' },
  { value: 25, suffix: '', label: 'Comunas cubiertas' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-progi-darker border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/50 text-sm md:text-base">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}