/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#3B82F6',
        accent: '#22D3EE',
        background: '#F8FAFC',
        text: '#1E293B',
      },
    },
  },
  plugins: [],
}
