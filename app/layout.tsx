import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "PROGI — PRO Gestión Inmobiliaria | Corredora de Propiedades",
  description: "Tu corredora de cabecera en Chile. Vendemos y arrendamos tu propiedad, acompañándote en cada paso del proceso.",
  keywords: "corredora de propiedades, inmobiliaria Chile, venta de departamentos, arriendo de casas, PROGI",
  authors: [{ name: "PROGI" }],
  openGraph: {
    title: "PROGI — PRO Gestión Inmobiliaria",
    description: "Tu corredora de cabecera. Vendemos y arrendamos tu propiedad en Chile.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={GeistSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "PROGI — PRO Gestión Inmobiliaria",
              description: "Corredora de propiedades en Chile",
              url: "https://progi.cl",
              telephone: "+56-9-5892-5205",
              email: "propiedades@progi.cl",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CL",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}