/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fa824c",
        "primary-hover": "#d66b3b",
        "soft-bg": "#f9fafb",
        "dark-nav": "#242733",
        "text-main": "#111827",
        "border-light": "#e5e7eb",
        "product-bg": "#e8e8e8",
      },
    },
  },
  plugins: [],
};
