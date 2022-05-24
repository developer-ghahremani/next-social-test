module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazir FD"],
      },
      colors: {
        dark: "#180A0A",
        grayDark: "#707070",
        theme: {
          1: "#E91E63",
          2: "#C21858",
          3: "#9C2780",
          4: "#572780",
          5: "#272A80",
          6: "#276880",
          7: "#57ACDC",
          8: "#60C689",
        },
      },
    },
  },
  plugins: [],
};
