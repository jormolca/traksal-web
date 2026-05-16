export default function sitemap() {
  return [
    { url: 'https://www.traksal.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://www.traksal.com/en', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.traksal.com/fichaje-diario', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.traksal.com/en/clock-in-clock-out', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.traksal.com/informe-de-horas', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.traksal.com/en/hours-reports', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.traksal.com/informe-legal-mensual', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.traksal.com/en/monthly-legal-report', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
