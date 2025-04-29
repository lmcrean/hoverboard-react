import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'mobile': '375px',
      'tablet': '768px',
      'laptop-small': '1024px',
      'laptop': '1366px',
      'desktop': '1920px',
      'desktop-large': '2560px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightblue: 'var(--lightblue)',
        lightsalmon: 'var(--lightsalmon)',
      },
    },
  },
  plugins: [],
};
export default config;
