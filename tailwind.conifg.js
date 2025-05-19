// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        steppedFadeIn: {
          "0%": { opacity: "0.1" },
          "25%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
          "75%": { opacity: "0.9" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        steppedFadeIn: "steppedFadeIn 2s steps(4, end) forwards",
      },
    },
  },
};
