'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink =
    'https://wa.me/56958925205?text=Hola,%20quiero%20que%20me%20contacten%20por%20temas%20relacionados%20al%20corretaje%20de%20una%20propiedad.%20Muchas%20gracias';

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          scrolled ? 'top-4 opacity-100' : 'top-6 opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'
        }`}
      >
        <div
          className={`flex items-center gap-2 md:gap-8 px-4 md:px-8 py-3 rounded-full border transition-all duration-500 ${
            scrolled
              ? 'bg-progi-darker/80 backdrop-blur-xl border-white/10 shadow-2xl'
              : 'bg-transparent border-transparent'
          }`}
        >
          <Link href="/" className="text-xl font-bold tracking-tight text-white mr-4">
            PROGI
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex ml-4 px-5 py-2.5 bg-progi-red hover:bg-[#8e1f2d] text-white text-sm font-medium rounded-full transition-all duration-300"
          >
            Hablemos por WhatsApp
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-white"
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-progi-dark transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-bold text-white">PROGI</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Cerrar menú">
              <X size={28} className="text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-medium text-white/90 hover:text-progi-red transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-progi-red text-white font-medium rounded-xl"
            >
              Hablemos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}