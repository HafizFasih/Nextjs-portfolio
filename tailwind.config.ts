import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'clr1':'rgb(25, 0, 35)',
        'clr2':'rgb(39, 3, 53)',
      },
      boxShadow:{
        'picShadow':'0px 0px 10px 6px #0f071d, inset 0px 0px 9px 0px #2f1d50',
        'formShadow':'0px 0px 20px 1px white, inset 0px 0px',
        'boxSh':'0px 0px 20px 1px black, inset 0px 0px',
      },
      dropShadow:{
        'pic':'1px 1px 15px #ffffff9e'
      },
    },
  },
  plugins: [],
};
export default config;
