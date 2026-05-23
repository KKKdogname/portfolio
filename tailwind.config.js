/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkroom: {
          bg: '#1e1e1e',
          surface: '#252525',
          border: '#333333',
          text: '#e8e0d4',
          'text-dim': '#8a8580',
          accent: '#d4a853',
          'accent-glow': 'rgba(212,168,83,0.12)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};
