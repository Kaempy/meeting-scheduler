/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: '#646cff' },
      fontFamily: {
        baskerville: 'var(--font-baskerville)',
        fira: 'var(--font-fira)',
        bricolage: 'var(--font-bricolage)',
      },
      backgroundImage: {
        light: "url('/img/ai_meeting.jpeg')",
        dark: "url('/img/ai_meeting2.jpeg')",
      },
    },
  },
  plugins: [],
};
