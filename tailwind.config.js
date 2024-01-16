/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1290px",
      },
      fontFamily: {
        'nunito': ["Nunito Sans"]
      },
    },
  },
  plugins: [],
};
