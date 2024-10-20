/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-orange": "#FF8C00",
        "red": "#E23744",
        "pos": "#B0FF37",
        "inventory": "#24007E",
        "Ecommerce": "#A90030",
      },
      height: {
        "height-full": "100vh",
        "height-10": "10vh",
        "height-20": "20vh",
        "height-30": "30vh",
        "height-40": "40vh",
        "height-half": "50vh",
        "height-60": "60vh",
        "height-70": "70vh",
        "height-80": "80vh",
      },
      borderRadius:{
        "card-radius": "89px 0px 97px 0px;",
      },
      backgroundImage: {
        'career': "url('https://posbytz.com/wp-content/uploads/2024/02/FUN-@-WORK.png')"
      },
      boxShadow:{
        "test-card": "2px 9px 16px -1px rgb(227, 227, 227)",
        "about-us": "6px 10px 29px 0px rgba(219,219,219,1)",
        "careers": " -6px -3px 22px 0px rgba(209,209,209,1);"
      },
      width: {
        "width-full": "100%",
        "width-half": "50%",
      },
    },
  },
  plugins: [],
};
