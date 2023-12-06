import daisyui from "daisyui";
import typo from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  darkMode: "class",

  plugins: [daisyui, typo],
  daisyui: {
    darkTheme: "dark",
    themes: ["light", "dark"],
  },
};
