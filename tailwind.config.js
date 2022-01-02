module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    customForms: (theme) => ({
      borderRadius: theme("borderRadius.lg"),
      backgoundColor: theme("colors.gray.700"),
    }),
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
