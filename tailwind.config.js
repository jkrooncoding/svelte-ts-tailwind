const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sveltered: {
          50: "#FF3E00",
        },
        tailwindblue: {
          50: "#38BDF8",
        },
        typescriptblue: {
          50: "#3178C6",
        },
      },
    },
  },
  plugins: [],
};
