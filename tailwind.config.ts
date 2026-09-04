import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      boxShadow: {
        kc: '0 18px 45px rgba(11, 31, 58, 0.14)',
      },
    },
  },
  plugins: [typography],
}
