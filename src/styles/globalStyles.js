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
    color: rgba(100,50,100,1);
    background: rgba(234,226,183,.5);
  }

  width
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.section::-webkit-scrollbar-thumb {
  border: 5px solid transparent;
  border-radius: 100px;
  background-color: #8070d4;
  background-clip: content-box;
}

  body {
    font-family: 'Oswald', sans-serif;
    line-height: 1.3;
    color: #fff;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    overflow: hidden;
  }

  section {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 5rem 0;
    &:nth-child(2) {
      padding-bottom: 5rem;
    }
    &:last-of-type {
      padding-bottom: 16rem;
    }
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
    font-size: 1rem;
  }
  button {
    background-color: transparent;
    border-style: none;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

`;

export const Main__Section = styled.section``;
