import { scopedPreflightStyles } from 'tailwindcss-scoped-preflight';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      lily: ['Lily Script One', 'Poppins', 'Segoe UI', 'San Francisco', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          primary: '#BB017A',
          pink: {
            100: '#C62B90',
            200: '#D256A6',
            300: '#DD80BD',
            400: '#EBAAD3',
            500: '#F1CCE4',
          },
          accent: {
            orange: '#FF5117',
            pink: '#FF1093',
            blue: '#17A6FF',
            yellow: '#FFC300',
            green: '#17FF70',
            purple: '#803EC2',
          },
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      screens: {
        retina: {
          raw: '@media not all and (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
        },
        hsx: {
          raw: '(max-height: 320px)',
        },
        hsm: {
          raw: '(min-height: 321px) and (max-height: 480px)',
        },
        'max-md': {
          raw: '(max-width: 768px)',
        },
      },
      animation: {
        breathe: 'breathe 1s infinite',
        vibrate: 'vibrate 0.4s linear',
        distort: 'distort 0.3s infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-scoped-preflight').scopedPreflightStyles({
      cssSelector: '.toddler-games',
      mode: 'matched only',
    }),
  ],
};
