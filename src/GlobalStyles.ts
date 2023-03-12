import { createGlobalStyle } from "styled-components";
import InterRegularWoff2 from "./fonts/Inter-Regular.woff2";
import InterRegularWoff from "./fonts/Inter-Regular.woff";
import InterRegularTtf from "./fonts/Inter-Regular.ttf";
import InterMediumWoff2 from "./fonts/Inter-Medium.woff2";
import InterMediumWoff from "./fonts/Inter-Medium.woff";
import InterMediumTtf from "./fonts/Inter-Medium.ttf";
import InterExtraBoldWoff2 from "./fonts/Inter-ExtraBold.woff2";
import InterExtraBoldWoff from "./fonts/Inter-ExtraBold.woff";
import InterExtraBoldTtf from "./fonts/Inter-ExtraBold.ttf";

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
    font-family: 'Inter Regular';
    src: url(${InterRegularWoff2}) format('woff2'),
        url(${InterRegularWoff}) format('woff'),
        url(${InterRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter Medium';
    src: url(${InterMediumWoff2}) format('woff2'),
        url(${InterMediumWoff}) format('woff'),
        url(${InterMediumTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter Extra Bold';
    src: url(${InterExtraBoldWoff2}) format('woff2'),
        url(${InterExtraBoldWoff}) format('woff'),
        url(${InterExtraBoldTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter Regular', sans-serif;
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
