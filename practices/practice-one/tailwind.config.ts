import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    /** 1- Responsive design */
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '2rem',
        '3xl': '2rem',
        '4xl': '2rem',
      },
      // Breakpoint
      screens: {
        xs: '360px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px',
      },
    },
    colors: {
      ...require('tailwindcss/colors'),
      black: '#222324',
      white: '#ffffff',
      warning: {
        50: '#FFC600',
        100: '#ECD345',
        200: '#FFAF38',
        300: '#FFC000',
      },
      danger: {
        50: '#FF6875',
        100: '#FF4858',
        200: '#E63737',
      },
      secondary: {
        50: '#FAFAFB',
        100: '#F6F7F8',
        200: '#F1F3F4',
        300: '#F1F1F1',
        400: '#CCCCCC',
        500: '#9098B1',
      },
      primary: {
        50: '#BCDDFE',
        100: '#33A0FF',
        200: '#40BFFF',
        300: '#03A9F4',
        400: '#2E90E5',
      },
    },
    borderRadius: {
      none: '0px',
      DEFAULT: '4px',
      sm: '2px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      '2xl': '16px',
      full: '999px',
    },
    fontFamily: {
      sans: ['Poppins', 'Proxima Nova', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
