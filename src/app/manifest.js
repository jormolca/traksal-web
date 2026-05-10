export default function manifest() {
  return {
    name: 'Traksal | CRM para Redes Comerciales',
    short_name: 'Traksal',
    description: 'Software CRM para gestión de equipos comerciales y fichaje gratuito.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1A2A',
    theme_color: '#0F1A2A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
