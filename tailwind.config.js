/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce7ff',
          300: '#8ed7ff',
          400: '#59bdff',
          500: '#339dff',
          600: '#1a7ef5',
          700: '#1366e1',
          800: '#1653b6',
          900: '#18488f',
          950: '#132d57',
        },
        surface: {
          light: '#f8fafc',
          dark: '#0b1120',
          card: {
            light: '#ffffff',
            dark: '#111827',
          },
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(51, 157, 255, 0.25), transparent)',
        'mesh-light':
          'radial-gradient(at 40% 20%, rgba(51, 157, 255, 0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%)',
        'mesh-dark':
          'radial-gradient(at 40% 20%, rgba(51, 157, 255, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.12) 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
