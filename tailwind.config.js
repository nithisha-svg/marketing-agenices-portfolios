/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f5f7fa',
        ink: '#000000',
        coral: {
          DEFAULT: '#ec5a4f',
          400: '#f79276',
          500: '#ec5a4f',
          600: '#d94a3f',
        },
        peach: '#f79276',
        forest: '#16854a',
        night: '#141414',
        soft: '#dbe3f6',
        cream: '#f8f1ee',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '48px',
        '6xl': '64px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
        'spin-slower': 'spin 45s linear infinite reverse',
        'float': 'float 5s ease-in-out infinite',
        'ping-soft': 'pingSoft 1.8s ease-out infinite',
        'grow': 'grow 1.4s cubic-bezier(.22,.8,.24,1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        pingSoft: {
          '0%': { boxShadow: '0 0 0 0 rgba(39,179,106,.5)' },
          '100%': { boxShadow: '0 0 0 8px rgba(39,179,106,0)' },
        },
        grow: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};
