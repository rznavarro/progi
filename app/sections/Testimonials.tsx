'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'Muy buen servicio, muy serios, responsables y rápidos en responder. Los recomiendo de todas maneras, conocen muy bien su rubro. Además son muy cordiales en su trato.',
    author: 'Cliente PROGI',
    role: 'Vendedor de propiedad',
  },
];

export default function Testimonials() {
  const [current] = useState(0);
  const t = testimonials[current];

  return (
    <section className="py-24 md:py-32 bg-progi-darker">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="relative bg-progi-card rounded-3xl p-8 md:p-16 border border-white/[0.06]">
            <Quote className="absolute top-8 left-8 text-progi-red/20" size={64} />

            <div className="relative z-10 text-center">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-10">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div>
                <p className="text-white font-medium text-lg">{t.author}</p>
                <p className="text-white/50">{t.role}</p>
              </div>
            </div>

            {testimonials.length > 1 && (
              <div className="flex justify-center gap-4 mt-10">
                <button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <ChevronLeft size={20} className="text-white" />
                </button>
                <button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}