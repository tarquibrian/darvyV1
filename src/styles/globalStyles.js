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
    width: 12px;
    background: transparent;
  }
        
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: transparent;
  }
        
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid transparent;
    background-clip: content-box;
    background-color: rgba(80,80,80,1);
  }

  body {
    font-family: 'Sofia Sans Condensed', sans-serif;
    line-height: 1.3;
    /* color: #fff; */
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    overflow-x: hidden;
    /* overflow-y: overlay; */
    
    /* overflow: overlay; */
    /* -moz-osx-font-smoothing: grayscale; */
    /* -webkit-font-smoothing: antialiased; */
  }

  main {
    position: relative;
    margin: 0 auto;
    min-height: 100vh;
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
      padding-bottom: 14.5rem;
    }
  }


  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    color: #fff;
  }
  
  p {
    font-family: var(--ff-sofia);
    font-size: var(--fz-md);
    margin: 0 0 15px 0;
    color: #fff;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }
  }
  h1, h2,h3,h4,h5 {
    
  }
  button {
    color: #fff;
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


  .title-content {
    font-family: var(--ff-oswald);
    font-size: var(--fz-header);
    font-weight: 400;
    color: #eae2b7;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    margin: 0 0 15px -4px;
    display: grid;
    grid-template-columns: max-content auto;
    gap: 0.2rem;
    &::after {
      content: "";
      display: block;
      align-self: end;
      margin-bottom: 12px;
      width: auto;
      height: 4px;
      background: #eae2b7;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    }
  }
  .images {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

`;

export const Main__Section = styled.section``;
