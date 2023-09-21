/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {

    colors: {
      white: "#ffff",
      primary: {
        200: "#4261FC",
        300: "#3B57E3",
        400: "#20307D",
        DEFAULT: "#10173D",
        600: "#0A0F27",
      },
      secondary: {
        200: "#eaf8f4",
        300: "#cfd0f6",
        400: "#7f81e8",
        DEFAULT: "#5f62e2",
        600: "#5658cb",
      },
      gray: {
        400: "#f2f2f2",
        500: "#e5e5e5",
        600: "#b2b2b2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1d1d1d",
      },
    },

    fontSize: {
      "8xl": [
        "120px",
        {
          fontWeight: "500",
          lineHeight: "120px",
          letterSpacing: "-6px",
        },
      ],
      "7xl": [
        "72px",
        {
          fontWeight: "600",
          lineHeight: "80px",
          letterSpacing: "-4.5px",
        }
      ],
      "6xl": [
        "55px",
        {
          fontWeight: "500",
          lineHeight: "60px",
          letterSpacing: "-2.5px",
        },
      ],
      "5xl": [
        "48px",
        {
          fontWeight: "500",
          lineHeight: "54px",
          letterSpacing: "-1.6px",
        },
      ],
      "4xl": [
        "36px",
        {
          fontWeight: "500",
          lineHeight: "44px",
          letterSpacing: "-1.2px",
        },
      ],
      "3xl": [
        "28px",
        {
          fontWeight: "500",
          lineHeight: "34px",
          letterSpacing: "-0.8px",
        },
      ],
      "2xl": [
        "24px", 
        {
          fontWeight: "400",
          lineHeight: "30px",
          letterSpacing: "-1px",
        },
      ],
      xl: [
        "24px",
        {
          fontWeight: "400",
          lineHeight: "30px",
          letterSpacing: "-1px"
        },
      ],
      lg: [
        "21px",
        {
          fontWeight: "400",
          lineHeight: "30px",
          letterSpacing: "-0.8px",
        },
      ],
      base: [
        "17px",
        {
          fontWeight: "400",
          lineHeight: "25px",
          letterSpacing: "0.69px",
        },
      ],
      sm: [
        "15px",
        {
          fontWeight: "400",
          lineHeight: "23px",
          letterSpacing: "-0.60px",
        },
      ],
      caption1: [
        "20px",
        {
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "-0.6px",
        },
      ],
      caption2: [
        "18px",
        {
          fontWeight: "400",
          lineHeight: "20px",
          letterSpacing: "-0.3px",
        },
      ],
      caption3: [
        "16px",
        {
          fontWeight: "400",
          lineHeight: "18px",
          letterSpacing: "-0.5px",
        },
      ],
      caption4: [
        "13px",
        {
          fontWeight: "400",
          lineHeight: "15px",
          letterSpacing: "-0.2px",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
}

