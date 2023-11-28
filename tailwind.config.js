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
        dark: "#1e3a46",
      },
    },
    boxShadow: {
      '3xl': '0.5rem 0.5rem #483b34',
      '4xl': '0.75rem 0.75rem #483b34',
      'disabled': '0 0 #000',
    },

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