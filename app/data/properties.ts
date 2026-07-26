export interface Property {
  id: string;
  title: string;
  location: string;
  operation: 'venta' | 'arriendo';
  type: 'casa' | 'departamento' | 'oficina' | 'terreno';
  priceUF: number;
  priceCLP: number;
  meters: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: 'PRO-001',
    title: 'Mansión Moderna Beverly Hills',
    location: 'Lo Barnechea, Santiago',
    operation: 'venta',
    type: 'casa',
    priceUF: 18500,
    priceCLP: 850000000,
    meters: 1200,
    bedrooms: 6,
    bathrooms: 8,
    image: '/images/prop-1.jpg',
    featured: true,
  },
  {
    id: 'PRO-002',
    title: 'Villa con Vista al Lago',
    location: 'Pucón, Araucanía',
    operation: 'venta',
    type: 'casa',
    priceUF: 9200,
    priceCLP: 420000000,
    meters: 650,
    bedrooms: 4,
    bathrooms: 5,
    image: '/images/prop-2.jpg',
  },
  {
    id: 'PRO-003',
    title: 'Penthouse de Lujo',
    location: 'Las Condes, Santiago',
    operation: 'arriendo',
    type: 'departamento',
    priceUF: 180,
    priceCLP: 8500000,
    meters: 280,
    bedrooms: 3,
    bathrooms: 3,
    image: '/images/prop-3.jpg',
    featured: true,
  },
  {
    id: 'PRO-004',
    title: 'Bodega Subterránea + Residencia',
    location: 'Colchagua, O\'Higgins',
    operation: 'venta',
    type: 'casa',
    priceUF: 12400,
    priceCLP: 580000000,
    meters: 800,
    bedrooms: 5,
    bathrooms: 6,
    image: '/images/prop-4.jpg',
  },
  {
    id: 'PRO-005',
    title: 'Home Cinema Residence',
    location: 'Vitacura, Santiago',
    operation: 'venta',
    type: 'casa',
    priceUF: 15600,
    priceCLP: 720000000,
    meters: 950,
    bedrooms: 5,
    bathrooms: 7,
    image: '/images/prop-5.jpg',
  },
  {
    id: 'PRO-006',
    title: 'Wellness Spa Home',
    location: 'Zapallar, Valparaíso',
    operation: 'arriendo',
    type: 'casa',
    priceUF: 220,
    priceCLP: 10500000,
    meters: 420,
    bedrooms: 3,
    bathrooms: 4,
    image: '/images/prop-6.jpg',
  },
  {
    id: 'PRO-007',
    title: 'Oficina Biblioteca Privada',
    location: 'Providencia, Santiago',
    operation: 'venta',
    type: 'oficina',
    priceUF: 3400,
    priceCLP: 158000000,
    meters: 180,
    bedrooms: 0,
    bathrooms: 2,
    image: '/images/prop-7.jpg',
  },
  {
    id: 'PRO-008',
    title: 'Casa Mirador con Vista Panorámica',
    location: 'Concón, Valparaíso',
    operation: 'venta',
    type: 'casa',
    priceUF: 21000,
    priceCLP: 970000000,
    meters: 1100,
    bedrooms: 6,
    bathrooms: 7,
    image: '/images/hero-poster.jpg',
  },
];