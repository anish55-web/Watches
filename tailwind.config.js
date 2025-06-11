// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        keyframes: {
          underlineGrow: {
            '0%': { backgroundSize: '0% 3px' },
            '100%': { backgroundSize: '100% 3px' },
          },
        },
        animation: {
          underlineGrow: 'underlineGrow 2s linear infinite',
        },
      },
    },
    plugins: [],
  };
  