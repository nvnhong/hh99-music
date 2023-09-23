/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      userSelect: ["group", "hover"],
      fontFamily: {
        TAEBAEKmilkyway: ["TAEBAEKmilkyway"],
      },
      fontFamily: {
        양진체: ["양진체"],
      },
    },
  },
  plugins: [],
};
