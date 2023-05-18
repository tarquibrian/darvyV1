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

  ::-webkit-scrollbar {
    width: 10px;
  }
        
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: rgba(255,255,255,1);
  }
        
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid transparent;
    background-clip: content-box;
    background-color: rgba(0,0,0,.7);
  }

  body {
    font-family: 'Oswald', sans-serif;
    line-height: 1.3;
    color: #fff;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
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

  .button {
    position: relative;
    background-color: red;

    left: 10rem;
    cursor: pointer;
  }

`;

export const Main__Section = styled.section``;
