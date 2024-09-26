/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'blur': 'blur(10px)',
      },
      transitionProperty: {
        background: 'background-color',
      },
      transitionDuration: {
        300: '300ms',
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      animation: {
        'fade-in': 'fadeIn 500ms ease-in-out',
        'marquee-item': 'marquee 25s linear infinite',
        'shine': 'shine 3s infinite linear',
        'blink': 'blink 3s infinite ease-in-out',
        'slowMove1': 'slowMove1 5s ease-in-out infinite',
        'slowMove2': 'slowMove2 4s ease-in-out infinite',
        'slowMove3': 'slowMove3 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, filter: 'blur(30px)' },
          '100%': { opacity: 1, filter: 'blur(0px)' },
        },
        slowMove1: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-50px) translateY(-20px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        slowMove2: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(40px) translateY(20px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        slowMove3: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-90px) translateY(30px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
      filter: {
        'blur': 'blur(5px)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'opacity-transform-filter': 'opacity, transform, filter',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      transitionDuration: {
        '150': '150ms',
      },
      colors: {
        primary: "#15171f",
        secondary: {
          'bg': "#15171f",
        },
      },
      screens: {
        'phone': '360px', // Смартфоны с малым экраном
        'phone-md': '480px', // Смартфоны с большим экраном
        'tablet': '640px', // Планшеты
        'laptop': '1024px', // Ноутбуки
        'desktop': '1280px', // Десктопы
        'large-desktop': '1536px', // Очень большие экраны
      },
    },
  },
  plugins: [],
}

