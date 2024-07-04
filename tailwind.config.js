/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": " 2px 5px 20px 0 ",
      },
      fontFamily: {
        mark: ["Markazi Text", "serif"],
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        blueblack: "#191F26",
      },

      keyframes: {
        ani: {
          "0%, 100%": {
            "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 30% / 50% 60% 30% 60%",
          },
        },
      },
      animation: {
        animate: "ani 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
