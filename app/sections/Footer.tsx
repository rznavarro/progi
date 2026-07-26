'use client';

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/56958925205' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

const navLinks = [
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-progi-darker border-t border-white/[0.06] overflow-hidden">
      <div className="py-8 border-b border-white/[0.06]">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-bold text-white/[0.03] mx-8 select-none"
            >
              TU CORREDORA DE CABECERA · PROGI ·
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">PROGI</h3>
            <p className="text-white/50 leading-relaxed">
              PRO Gestión Inmobiliaria. Tu corredora de cabecera en Chile. Confianza,
              experiencia y resultados.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-progi-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">
              Síguenos
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-progi-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} PROGI. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-sm">
            PRO Gestión Inmobiliaria · Chile
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}