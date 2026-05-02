export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: [] }],
    sitemap: 'https://www.traksal.com/sitemap.xml',
    host: 'https://www.traksal.com'
  };
}
