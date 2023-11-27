/* eslint-disable no-undef */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '0.5rem',
      },
    },
    extend: {
      colors: {
        primary: '#dfcfab',
        secondary: '#79a4d7',
        block: "#23736b",
        background: "#f7f3ee",
        button: "#d13832",
        buttonShadow: "#b51b2d",
        dark: "#483b34",
      },
    },
    boxShadow: {
      'full': '0.25rem 0.25rem #483b34',
      'disabled': '0 0 #000',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}