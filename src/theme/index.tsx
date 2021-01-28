// 1. Import the extendTheme function
import { extendTheme, theme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  yellow: {
    400: "#ffe66d",
  },
  red: {
    400: "#D90368"
  },
  blue: {
    400: "#011936"
  },
  green: {
    400: "#4ECDC4"
  },
  white : "#ffffff"
}

const textStyles = {
    h1: {
        fontSize: ["35px", "60px"],
        lineHeight: "110%",
        letterSpacing: "-2%",
      },
    h2: {
      fontSize: ["25px", "30px"],
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h3: {
      fontSize: ["18px", "20px"],
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
}

const sizes = {
    ...theme.space,
    "140": '140px',
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
}

const fonts = {
  heading: "Abril Fatface",
  body: "Open Sans",
}

export const customTheme = extendTheme({ colors, textStyles, fonts })
