/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F17',
          cardDark: '#131926',
          borderDark: '#1E293B',
          primary: '#1D4ED8', // Deep Blue accent
          primaryHover: '#1E40AF',
          slate: '#64748B',
          cyan: '#06B6D4',
          cyanGlow: 'rgba(6, 182, 212, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(29, 78, 216, 0.25)',
      },
    },
  },
  plugins: [],
}
