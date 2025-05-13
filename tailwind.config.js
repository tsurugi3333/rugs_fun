module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1d29",
        secondary: "#252836",
        accent: "#16a34a",
        danger: "#e11d48",
        darkGray: "#1e212d",
        lightGray: "#374151",
        chartGreen: "#22c55e",
        chartRed: "#dc2626",
      },
      fontFamily: {
        dynapuff: ['DynaPuff', 'cursive'],
        montserrat: ['Montserrat', 'cursive'],
      },
    },
  },
  plugins: [],
};
