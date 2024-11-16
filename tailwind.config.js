/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '40'  : ['40px', '48px'],
        '28'  : ['28px', '36px'],
        '14'  : ['14px', '20px'],
        '16'  : ['16px', '18px'], 
        '16-1': ['16px', '22px'],
        '16-2': ['16px', '24px'],
        '16-3': ['16px', '28px'],
        '16-4': ['16px', '32px'],
        '16-5': ['18px', '32px'],
        '24'  : ['24px', '32px'],
        'inter-r': ['16px', '18px'],
      },
    },
    screens: {
      'ms':  '240px',
      'ls':  '368px', 
      'xs':  '480px', 
      'sm':  '640px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};