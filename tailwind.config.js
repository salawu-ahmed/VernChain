/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "var(--primary-black)",
        "light-green": "var(--light-green)",
        "med-green": "var(--med-greenn)",
        "dark-green": "var(--dark-green)",
        "silver": "var(--silver)",
        "grey": "var(--grey)",
      },
      backgroundImage: {
        "hero-image": "url('src/assets/Frame 27.png')",
        "asset11": "url('src/assets/Asset 11.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
