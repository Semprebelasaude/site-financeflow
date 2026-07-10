import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          gold: '#D4AF37',
          'gold-hover': '#C9A030',
          'gold-subtle': 'rgba(212,175,55,0.12)',
          offwhite: '#F5F5F0',
          cream: '#FAFAF7',
          dark: '#1A1A1A',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
        narrow: '48rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(212,175,55,0.12)',
        glow: '0 0 30px rgba(212,175,55,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
