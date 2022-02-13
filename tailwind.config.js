module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    fontFamily: {
      "zuan-su": ["FZuanSu"],
    },
    extend: {
      spacing: {
        "banner-height": "calc(100vh - var(--navigation-height))",
      },
      grayscale: {
        70: "70%",
      },
    },
  },
  plugins: [],
};
