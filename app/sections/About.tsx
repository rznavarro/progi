'use client';

import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-progi-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <ScrollReveal className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/prop-3.jpg"
              alt="Interior de propiedad de lujo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-progi-red text-sm font-medium tracking-widest uppercase mb-4 block">
                Cómo lo hacemos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Generamos confianza con hechos, no con promesas
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-white/65 text-lg leading-relaxed">
                Dedicamos el tiempo necesario a conocer tu idea y tu realidad como persona o empresa,
                intentando siempre generar la confianza necesaria con hechos, lo cual nos avala en los
                negocios realizados con éxito hasta ahora.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <span className="text-progi-red text-sm font-medium tracking-widest uppercase mb-4 block">
                Qué hacemos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Contigo desde la idea hasta el cierre
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-white/65 text-lg leading-relaxed">
                Te apoyamos desde el inicio de la idea relacionada con un bien inmobiliario hasta la
                concreción del negocio, acompañándote en todo momento para resolver dudas y gestionar
                lo necesario con el fin de llegar al mejor resultado posible.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="relative aspect-[4/5] rounded-2xl overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/prop-7.jpg"
              alt="Espacio de trabajo y biblioteca privada"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}