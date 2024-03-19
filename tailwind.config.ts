import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       backgroundImage: {
        "gradient-blue":
          "linear-gradient(135deg, #0EA5E9 0%, #22D3EE 52.7%, #818CF8 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;