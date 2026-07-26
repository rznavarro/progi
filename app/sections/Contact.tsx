'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío - reemplazar con integración real
    setFormState('success');
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-progi-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contacto <span className="text-progi-red">directo</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-md">
                ¿Tienes una propiedad para vender o arrendar? Escríbenos y te respondemos en minutos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/[0.06]">
                    <Mail size={20} className="text-progi-red" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Email propiedades</p>
                    <a href="mailto:propiedades@progi.cl" className="text-white hover:text-progi-red transition-colors">
                      propiedades@progi.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/[0.06]">
                    <Mail size={20} className="text-progi-red" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Contacto general</p>
                    <a href="mailto:contacto@progi.cl" className="text-white hover:text-progi-red transition-colors">
                      contacto@progi.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/[0.06]">
                    <Phone size={20} className="text-progi-red" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Teléfono</p>
                    <a href="tel:+56958925205" className="text-white hover:text-progi-red transition-colors">
                      +56 9 5892 5205
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/[0.06]">
                    <MapPin size={20} className="text-progi-red" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm mb-1">Cobertura</p>
                    <p className="text-white">Santiago y regiones de Chile</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 p-6 bg-progi-red/10 border border-progi-red/20 rounded-2xl">
                <p className="text-progi-red font-medium mb-2">¿Necesitas respuesta inmediata?</p>
                <p className="text-white/70 text-sm mb-4">
                  WhatsApp es nuestra vía más rápida. Te respondemos en minutos.
                </p>
                <a
                  href="https://wa.me/56958925205?text=Hola,%20quiero%20que%20me%20contacten%20por%20temas%20relacionados%20al%20corretaje%20de%20una%20propiedad.%20Muchas%20gracias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium hover:underline"
                >
                  Escríbenos ahora →
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="bg-progi-card rounded-2xl p-8 border border-white/[0.06]"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-white/60 text-sm mb-2">Asunto</label>
                  <select
                    required
                    className="w-full bg-progi-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-progi-red transition-colors"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="arriendo">Arrendar mi propiedad</option>
                    <option value="venta">Vender mi propiedad</option>
                    <option value="otra">Otras consultas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">Nombre</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    className="w-full bg-progi-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-progi-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">Email o teléfono</label>
                  <input
                    type="text"
                    required
                    placeholder="correo@ejemplo.com o +56 9..."
                    className="w-full bg-progi-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-progi-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">Mensaje</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu propiedad o consulta..."
                    className="w-full bg-progi-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-progi-red transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-progi-red hover:bg-[#8e1f2d] text-white font-medium py-4 rounded-xl transition-all duration-300"
                >
                  <Send size={18} />
                  {formState === 'success' ? 'Mensaje enviado' : 'Enviar mensaje'}
                </button>

                {formState === 'success' && (
                  <p className="text-center text-green-400 text-sm">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}