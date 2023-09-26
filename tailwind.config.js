/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fade 0.5s ease",
      },
      keyframes: {
        fade: {
          from: { opacity: 0.2 },
          to: { opacity: 100 },
        },
      },
    },
  },
  plugins: [],
};
