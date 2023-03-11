import { createGlobalStyle } from "styled-components";
import InterWoff2 from "./fonts/Inter-Regular.woff2";
import InterWoff from "./fonts/Inter-Regular.woff";
import InterTtf from "./fonts/Inter-Regular.ttf";

export const colors = {
  white: "#FFFFFF",
  whitishGray: "#F3F4F6",
  lightGray: "#E2E3E5",
  gray: "#C4C4C4",
  mediumGray: "#6B7280",
  darkGray: "#4D5562",
  graishBlack: "#111827",
  black: "#000000",
  sky: "#F0F9FF",
  electric: "#5D5FEF",
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterWoff2}) format('woff2'),
        url(${InterWoff}) format('woff'),
        url(${InterTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    color: ${colors.black};
    scrollbar-width: thin;
    scrollbar-color: ${colors.gray} ${colors.white};
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: ${colors.white};
    border-radius: 1rem;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${colors.gray};
    border: 1px solid ${colors.white};
    border-radius: 1rem;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
`;

export default GlobalStyles;
