import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-text': '#FFFCF3',
        'merc-blue': '#A9EAE5',
        'merc-yellow': '#E5E288',
        'merc-green': '#95FF9A',
      },
    },
  },
  plugins: [],
} satisfies Config;
