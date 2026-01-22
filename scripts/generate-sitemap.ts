import fs from 'fs';
import path from 'path';

const baseUrl = 'https://electrocalc.miguelangelcolmenero.es';

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}?lng=en"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}?lng=es"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}"/>
  </url>
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap.trim());

  console.log('✅ Sitemap generated at:', sitemapPath);
};

generateSitemap();
