/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        trust: {
          navy: '#1a365d',
          'navy-light': '#2d4a73',
          peach: '#fdf0e8',
          'peach-warm': '#f5e6dc',
          accent: '#c45c7a',
          'accent-light': '#d4738a',
          white: '#ffffff',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      animationDelay: {
        100: '100ms',
        150: '150ms',
        200: '200ms',
        250: '250ms',
        350: '350ms',
        450: '450ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(26, 54, 93, 0.08)',
        'soft-hover': '0 12px 40px rgba(26, 54, 93, 0.12)',
      },
    },
  },
  plugins: [],
};
