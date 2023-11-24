/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        textMuted: "rgb(var(--text-muted) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
