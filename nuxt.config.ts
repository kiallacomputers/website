export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: '%s | Kialla Computers',
      meta: [
        { name: 'description', content: 'Kialla Computers provides local computer repairs, upgrades, sales and practical IT support for homes and small businesses in Kialla and the Shepparton region.' },
        { name: 'theme-color', content: '#0b1f3a' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  },
  nitro: { preset: 'netlify' }
})
