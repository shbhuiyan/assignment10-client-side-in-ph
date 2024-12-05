import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-1': "url('https://i.postimg.cc/XqNkhHbj/sports-1.webp')",
        'hero-2': "url('https://i.postimg.cc/44w5tg6m/football.jpg')",
        'hero-3': "url('https://i.postimg.cc/QxyJ4JnD/badminton.jpg')",
        'hero-4': "url('https://i.postimg.cc/L5sjvJth/cricket.avif')",
      },
    },
  },
  plugins: [daisyui],
}

