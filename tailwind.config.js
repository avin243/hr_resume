/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary color - Deep Olive Green
        primary: {
          50: '#f0f5f1',
          100: '#d9e5db',
          200: '#b4cbb8',
          300: '#8fb195',
          400: '#6a9771',
          500: '#3D5A40', // Main primary
          600: '#35503a',
          700: '#2d4631',
          800: '#253c29',
          900: '#1e3221',
          950: '#101b12',
        },
        // Secondary color - Charcoal Gray
        secondary: {
          50: '#f7f7f7',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#2F2F2F', // Main secondary
          600: '#2a2a2a',
          700: '#242424',
          800: '#1f1f1f',
          900: '#191919',
          950: '#0d0d0d',
        },
        // Accent color - Muted Gold
        accent: {
          50: '#faf8ef',
          100: '#f4efd6',
          200: '#eae0ae',
          300: '#e0d086',
          400: '#d6c15e',
          500: '#D4AF37', // Main accent
          600: '#be9d31',
          700: '#a79029',
          800: '#8c7822',
          900: '#73641c',
          950: '#3a320e',
        },
        // Background - Ivory
        background: {
          DEFAULT: '#FDFCFB',
          secondary: '#EDEDED',
        },
        // Additional UI colors
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
        },
        info: {
          DEFAULT: '#6A8EAE', // Cool Slate Blue
          light: '#E0F2FE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '0.25': '2px',
        '0.5': '4px',
        '1': '8px',
        '1.5': '12px',
        '2': '16px',
        '2.5': '20px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}