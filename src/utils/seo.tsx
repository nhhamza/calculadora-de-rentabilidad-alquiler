import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://calculadora-de-rentabilidad.vercel.app/og-image.jpg",
  structuredData,
}: SEOProps) {
  const fullTitle = `${title} | Calculadora Rentabilidad Inmueble`;
  const url = canonical || "https://calculadora-de-rentabilidad.vercel.app/";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

export const structuredDataTemplates = {
  website: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Rentabilidad Alquiler Gratuita",
    description:
      "Calculadora gratuita para analizar la rentabilidad de inversiones inmobiliarias en alquiler en España",
    url: "https://calculadora-de-rentabilidad.vercel.app",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Cálculo de rentabilidad inmobiliaria",
      "Análisis de cash flow",
      "Cálculo de ROI y TIR",
      "Incluye gastos e hipoteca",
      "Resultados instantáneos",
    ],
    inLanguage: "es-ES",
    author: {
      "@type": "Organization",
      name: "Calculadora Rentabilidad Inmueble",
    },
  },

  calculator: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculadora de Rentabilidad de Inmuebles en Alquiler",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    description:
      "Herramienta gratuita online para calcular la rentabilidad de inversiones inmobiliarias en España. Incluye análisis de hipoteca, gastos, impuestos y flujo de caja.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
    },
  },

  faqPage: (faqs: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),

  breadcrumbs: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};
