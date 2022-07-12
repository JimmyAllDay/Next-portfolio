/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Source Sans Pro", "sans-serif"],
      primaryLight: ["Source Sans Pro", "sans-serif"],
      secondary: ["Source Code Pro", "monospace"],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    colors: {
      light: "#fff",
      dark: "#303030",
      accent: "#85b685",
      accentd: "#689c68",
      nav: "#9c9c9c",
      gray: "#857683",
      hamburger: "#D3D3D3",
      blog: "#f2f2f7",
      blogd: "#cfcfd8",
    },
    extend: {
      dropShadow: {
        "3xl": "10px 10px 10px rgba(0, 0, 0, 0.4)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        accent: "15px 15px 0px rgb(133, 182, 133)",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
