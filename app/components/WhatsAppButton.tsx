'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const link =
    'https://wa.me/56958925205?text=Hola,%20quiero%20que%20me%20contacten%20por%20temas%20relacionados%20al%20corretaje%20de%20una%20propiedad.%20Muchas%20gracias';

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={22} fill="white" />
      <span className="font-medium text-sm hidden sm:inline">Hablemos</span>
    </a>
  );
}