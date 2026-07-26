'use client';

import Image from 'next/image';
import { Bed, Bath, Maximize } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export default function PropertyCard({ property, className = '' }: PropertyCardProps) {
  const formatPrice = (uf: number, clp: number) => {
    if (property.operation === 'arriendo') {
      return `UF ${uf.toLocaleString('es-CL')} / $${clp.toLocaleString('es-CL')}`;
    }
    return `UF ${uf.toLocaleString('es-CL')}`;
  };

  const whatsappLink = `https://wa.me/56958925205?text=Hola,%20vi%20la%20propiedad%20${encodeURIComponent(
    property.title
  )}%20(${property.id})%20en%20su%20sitio%20web%20y%20quiero%20más%20información.`;

  return (
    <article
      className={`group relative bg-progi-card rounded-2xl overflow-hidden border border-white/[0.06] transition-transform duration-500 hover:scale-[1.02] ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={`${property.title} en ${property.location}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase ${
            property.operation === 'venta'
              ? 'bg-progi-red text-white'
              : 'bg-white/90 text-progi-dark'
          }`}
        >
          {property.operation}
        </span>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white/80 text-sm mb-1">{property.type} · {property.location}</p>
          <h3 className="text-white text-lg font-medium leading-tight">{property.title}</h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-2xl font-medium text-progi-text mb-4">
          {formatPrice(property.priceUF, property.priceCLP)}
        </p>

        <div className="flex items-center gap-4 text-sm text-white/60 mb-5">
          <div className="flex items-center gap-1.5">
            <Maximize size={16} />
            <span>{property.meters} m²</span>
          </div>
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <Bed size={16} />
              <span>{property.bedrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Bath size={16} />
            <span>{property.bathrooms}</span>
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 rounded-xl bg-white/5 hover:bg-progi-red text-white/90 hover:text-white font-medium transition-all duration-300 border border-white/10 hover:border-progi-red"
        >
          Consultar por esta propiedad
        </a>
      </div>
    </article>
  );
}