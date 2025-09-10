import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#404E71",
        PrimaryLight: "#2CB6D5",
        MainHeader: "#4DBDE8",

        PageHeader: "#404E71",
        PageHeaderLight: "#2CB6D5",

        InputPrimary: "#2CB6D5",
        InputBorder: "#2CB6D5",
        InputBorderFocus: "#404E71",
        InputBorderRing: "#2CB6D5",
<<<<<<< HEAD

        ButtonPrimary: "#596F95",
        ButtonPrimaryText: "#404E71",
        ButtonPrimaryBg: "#2CB6D5",
        ButtonPrimaryHover: "#FFF",
        ButtonPrimaryHoverB: "#2CB6D5",
        ButtonPrimaryHoverText: "#596F95",

        ButtonOutline: "#2CB6D5",
        ButtonOutlineHover: "#8BD0DF",
        ButtonOutlineHoverText: "#404E71",
=======
        ButtonPrimary: "#596F95",
        ButtonPrimaryHover: "#8BD0DF",
        ButtonPrimaryHoverText: "#596F95",
        ButtonOutline: "#596F95",
        ButtonOutlineHover: "#8BD0DF",
        ButtonOutlineHoverText: "#596F95",

        ButtonLight: "#8BD0DF",
        ButtonPrimaryText: "#8BD0DF",
        ButtonText: "#596F95",
>>>>>>> 1806ee6291393952912ed735a7e6686f13609e26

        IconColor: "#BED2EF",

        ServiceHeader: "#404E71",
        ServicePrice: "#BED2EF",
        ServiceItems: "#404E71",

        FooterText: "#2CB6D5",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
