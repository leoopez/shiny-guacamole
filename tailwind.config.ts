import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Quicksand"',
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        caviet: ["Caveat"],
      },
      gridColumn: {
        "span-16": "span 16 / span 16",
      },
      gridRow: {
        "span-16": "span 16 / span 16",
      },
      gridRowStart: {
        "15": "15",
        "16": "16",
        "21": "21",
        "26": "26",
        "28": "28",
        "30": "30",
        "34": "34",
      },
      gridColumnStart: {
        "15": "15",
        "16": "16",
        "18": "18",
        "20": "20",
        "21": "21",
        "22": "22",
        "24": "24",
        "26": "26",
        "30": "30",
        "32": "32",
        "40": "40",
        "41": "41",
        "44": "44",
        "50": "50",
      },
    },
  },
  plugins: [],
} satisfies Config;
