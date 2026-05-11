/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd4ff',
          300: '#8eb6ff',
          400: '#598dff',
          500: '#3168f0',
          600: '#1a4ae6',
          700: '#1638d4',
          800: '#182fab',
          900: '#1a2e87',
          950: '#131e55',
        },
        accent: {
          50:  '#edfff6',
          100: '#d5ffeb',
          200: '#aefed9',
          300: '#70fabb',
          400: '#2bee93',
          500: '#04d474',
          600: '#00b05c',
          700: '#008a4b',
          800: '#046b3e',
          900: '#055834',
          950: '#01311d',
        },
        surface: {
          DEFAULT: '#f4f6fb',
          card:    '#ffffff',
          border:  '#e4e9f2',
          muted:   '#8a94a6',
        },
        navy: {
          DEFAULT: '#0f1c3f',
          light:   '#1a2e55',
          mid:     '#22375f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(15,28,63,0.07)',
        'card-hover': '0 6px 24px 0 rgba(15,28,63,0.13)',
      },
    },
  },
  plugins: [],
}
