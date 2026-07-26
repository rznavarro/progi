'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Corretaje de propiedades',
    desc: 'Venta y arriendo de casas, departamentos, oficinas y terrenos. Gestión completa del proceso.',
  },
  {
    num: '02',
    title: 'Administración de arriendos',
    desc: 'Nos encargamos de cobranzas, mantención y relación con arrendatarios. Tu propiedad en buenas manos.',
  },
  {
    num: '03',
    title: 'Asesoría legal y comercial',
    desc: 'Te guiamos en contratos, normativas y estrategias de precio para maximizar tu inversión.',
  },
  {
    num: '04',
    title: 'Evaluación de propiedades',
    desc: 'Tasaciones realistas basadas en el mercado actual. Sabemos cuánto vale tu propiedad.',
  },
  {
    num: '05',
    title: 'Marketing inmobiliario',
    desc: 'Fotografía profesional, videos y exposición en los principales portales del país.',
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-progi-darker">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-progi-red">servicios</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl">
            Todo lo que necesitas para gestionar tu propiedad en un solo lugar.
          </p>
        </ScrollReveal>

        <div className="space-y-0">
          {services.map((service, i) => (
            <ScrollReveal key={service.num} delay={i * 0.08}>
              <div
                className="group border-t border-white/[0.08] py-8 cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-6 md:gap-12">
                    <span className="text-progi-red font-medium text-sm mt-2">{service.num}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-progi-red transition-colors duration-300 mb-2">
                        {service.title}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          active === i ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-white/60 max-w-xl pt-2">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`text-white/30 group-hover:text-progi-red transition-all duration-300 mt-2 shrink-0 ${
                      active === i ? 'translate-x-1' : ''
                    }`}
                    size={24}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}