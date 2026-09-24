/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#111111',
          card: '#161616',
          'card-hover': '#1c1c1c',
        },
        border: {
          DEFAULT: '#222222',
          subtle: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#c8f04d',
          dim: 'rgba(200, 240, 77, 0.08)',
          'dim-hover': 'rgba(200, 240, 77, 0.14)',
        },
        text: {
          primary: '#f0f0f0',
          secondary: '#888888',
          tertiary: '#555555',
          muted: '#3a3a3a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      maxWidth: {
        container: '1100px',
      },
    },
  },
  plugins: [],
};
