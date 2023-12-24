/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "ali": "ali"
    },
    animation: {
      dp1: 'dp1 2s linear alternate infinite',
      dp2: 'dp2 2s linear alternate infinite',
      rf: "rf 15s linear infinite",
    },
    screens: {
      "xs": "480px",
      "ss": "620px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
  },
  plugins: [],
}