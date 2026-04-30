import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#081327",
        "accent-teal": "#01FFCD",
        "accent-green": "#2F9C86",
        blue: "#0052CC",
        "text-white": "#ffffff",
        "text-gray": "#6b778c",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        body: ["var(--font-roboto)", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at 50% 0%, rgba(1,255,205,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(0,82,204,0.06) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
