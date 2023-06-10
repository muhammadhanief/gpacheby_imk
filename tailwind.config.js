/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        12: "12px",
      },
      colors: {
        cheby: "#FFF400",
        yellow: {
          100: "#fff500",
          200: "rgba(247, 255, 0, 0.94)",
        },
        darkslategray: "#2d2d2d",
        silver: "#b5b5b5",
        gray: "#191919",
        "gray-4": "#bdbdbd",
        gold: "#ffda1e",
        color: "#000",
        bfbfbf: "#bfbfbf",
        color1: "#666",
        ffffff: "#fff",
        ff6060: "#ff6060",
        darkslategray: {
          100: "#353535",
          200: "#2d2d2d",
        },
        silver: "#b5b5b5",
        gray: {
          100: "#838383",
          200: "#777",
          300: "#222",
          400: "#191919",
          500: "rgba(0, 0, 0, 0.55)",
          600: "rgba(34, 34, 34, 0.35)",
          700: "rgba(0, 0, 0, 0.1)",
        },
        "gray-4": "#bdbdbd",
        gold: {
          100: "#ffda1e",
          200: "rgba(255, 218, 30, 0.94)",
        },
        color: "#000",
        bfbfbf: "#bfbfbf",
        color1: "#666",
        ffffff: "#fff",
        ff6060: "#ff6060",
        olive: "rgba(171, 164, 0, 0.9)",
        orange: "#ffa800",
        darkgray: "#aaa",
        whitesmoke: "#eee",
        abu: "#2D2D2D",
      },
      fontFamily: {
        montserrat: "Montserrat",
        "montserrat-alternates": "'Montserrat Alternates'",
        poppins: "Poppins",
        inter: "Inter",
        regular: "Roboto",
      },
      borderRadius: {
        "11xl": "30px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
