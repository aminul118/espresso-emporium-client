/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      raleway: '"Raleway", sans-serif',
      rancho: '"Rancho", cursive',
    },
    extend: {
      backgroundImage: {
        "header-image": "url(/src/assets/more/15.jpg)",
        "contact-image": "url(/src/assets/more/13.jpg)",
        "hero-banner": "url(/src/assets/more/3.png)",
        "our-products": "url(/src/assets/more/1.png)",
      },
    },
  },
  plugins: [require("daisyui")],
};
