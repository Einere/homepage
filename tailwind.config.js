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
        "4px": "4px",
        "8px": "8px",
        "12px": "12px",
        "16px": "16px",
        "24px": "24px",
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
