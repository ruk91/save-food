const colors = require("./tailwind/colors");
const fontSize = require("./tailwind/font-size");

module.exports = {
  content: ["./App.tsx", "./screens/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.blue[500],
        "dark-primary": colors.blue[200],
        error: colors.red[500],
        "dark-error": colors.red[600],
        warning: colors.orange[500],
      },
      fontSize,
      fontFamily: {
        "rajdhani-light": ["rajdhani-light"],
        rajdhani: ["rajdhani"],
        "rajdhani-regular": ["rajdhani-regular"],
        "rajdhani-normal": ["rajdhani-normal"],
        "rajdhani-semibold": ["rajdhani-semibold"],
        "rajdhani-bold": ["rajdhani-bold"],
        "rajdhani-medium": ["rajdhani-medium"],
        "roboto-bolditalic": ["roboto-bolditalic"],
      },
      borderWidth: {
        10: "10px",
        40: "40px",
        72: "72px",
      },
    },
  },
  plugins: [],
};
