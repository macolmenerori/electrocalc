import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const JsonLd: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const baseUrl = 'https://electrocalc.miguelangelcolmenero.es';

  const title = t('title');
  const description = t('description');

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Electrocalc',
    description: description,
    url: baseUrl,
    inLanguage: currentLang,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    description: description,
    url: baseUrl,
    applicationCategory: 'UtilityApplication',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR'
    },
    featureList:
      currentLang === 'es'
        ? 'Cálculo de coste eléctrico por hora, día, semana y mes, Soporte multiidioma, Tema claro y oscuro'
        : 'Electricity cost calculation per hour, day, week, and month, Multi-language support, Light and dark theme',
    author: {
      '@type': 'Person',
      name: 'macolmenerori',
      url: 'https://github.com/macolmenerori'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: title,
        item: baseUrl
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webApplicationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};
