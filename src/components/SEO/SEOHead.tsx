import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const SEOHead: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const baseUrl = 'https://electrocalc.miguelangelcolmenero.es';

  const title = t('title');
  const description = t('description');

  const keywords =
    currentLang === 'es'
      ? 'calculadora electricidad, precio luz, coste consumo eléctrico, kWh, calculadora energía, factura luz, ahorro energético'
      : 'electricity calculator, power consumption cost, kWh calculator, energy cost calculator, electricity bill, energy savings';

  const siteName = 'Electrocalc';

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <link rel="canonical" href={baseUrl} />

      <link rel="alternate" hrefLang="en" href={`${baseUrl}?lng=en`} />
      <link rel="alternate" hrefLang="es" href={`${baseUrl}?lng=es`} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={currentLang === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLang === 'es' ? 'en_US' : 'es_ES'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={baseUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLang === 'es' ? 'Spanish' : 'English'} />
      <meta name="author" content="macolmenerori" />
      <meta name="application-name" content={siteName} />
    </Helmet>
  );
};
