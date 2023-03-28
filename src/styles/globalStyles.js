import styled, { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";
import bgimage from "../images/layer-min.png";
import variables from "./variables";

export const GlobalStyle = createGlobalStyle`
  ${Fonts}
  ${variables}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none; 
    text-decoration: none;
    transition: .2s ease;
  }

  *::selection {
    color: rgb(32, 180, 227);
    background: rgba(29, 49, 71);
  }

  body {
    font-family: 'Oswald', sans-serif;
    line-height: 1.3;
    /* color: rgba(229,229,229,1.0); */
    /* color: #000; */
    color: #fff;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    /* background-image: url(${bgimage}) no-repeat; */
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
  }

  section {
    margin: 0 auto;
    width: 100%;
    height: 100%;

    padding: 100px 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: #fff;
    position: relative;
  }
  p {
    margin: 0 0 15px 0;
    color: #fff;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }
  }
  h1, h2,h3,h4,h5 {
    color: #fff;
  }
  button {
    background-color: transparent;
    border-style: none;
  }
`;

export const Main__Section = styled.section`
  /* background-color: red; */
`;
