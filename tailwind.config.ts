import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#3B3B3B",
        "fill-primary": "#585660",
        "stroke-secondary": "#8F8F8F",
        "neutral-500": "#737373",
        "neutral-700": "#404040",
        "surface-secondary": "#EEEEEE",
      },
    },
    fontSize: {
      "ag/regular": [
        "16px",
        {
          fontWeight: 400,
          lineHeight: "20px",
        },
      ],
      "ag/bold": [
        "16px",
        {
          fontWeight: 700,
          lineHeight: "16px",
        },
      ],
      "lg/lg-regular": [
        "18px",
        {
          fontWeight: 400,
          lineHeight: "24px",
          letterSpacing: "0.4px",
        },
      ],
      "lg/lg-bold": [
        "18px",
        {
          fontWeight: 700,
          lineHeight: "20px",
          letterSpacing: "0.4px",
        },
      ],
      "xs/xs-regular": [
        "20px",
        {
          fontWeight: 400,
          lineHeight: "24px",
          letterSpacing: "0.4px",
        },
      ],
      "xs/xs-bold": [
        "20px",
        {
          fontWeight: 700,
          lineHeight: "24px",
          letterSpacing: "0.4px",
        },
      ],
      "xl/xl-bold": [
        "24px",
        { fontWeight: 700, lineHeight: "28px", letterSpacing: "0.4px" },
      ],
    },
  },
  plugins: [],
};
export default config;
