module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    fontFamily: {
      "zuan-su": ["FZuanSu"],
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        emphasis: "var(--emphasis)",
        "primary-hover": "var(--primary-hover)",
        "primary-focus": "var(--primary-focus)",
      },
      spacing: {
        "nav-height": "var(--navigation-height)",
        "banner-height": "calc(100vh - var(--navigation-height))",
      },
      grayscale: {
        70: "70%",
      },
    },
  },
  plugins: [],
};
