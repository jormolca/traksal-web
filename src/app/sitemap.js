export default function sitemap() {
  return [
    { url: 'https://www.traksal.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://www.traksal.com/en', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];
}
