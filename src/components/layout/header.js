import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import darvyImg from "../../images/darvy-icon.png";
import { useScrollDirection } from "@hooks";

const NavbarHeader = styled.header`
  position: fixed;
  bottom: 5%;
  left: 8%;
  right: 8%;
  height: 100px;

  /* bottom: 0;
  left:0;
  width:100%;
  height: 100%; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  /* color: var(--fg-primary-F3); */
  /* background: var(--bg-primary-B1); */
  /* border: 1px solid var(--fg-primary-F3); */
  border-radius: 4px;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  z-index: 999;
  transition: 0.3s ease-in;
  @media (prefers-reduced-motion: no-preference) {
    ${({ scrollIsTop }) =>
      !scrollIsTop &&
      css`
        /* height: 3.5rem; */
        transform: translateY(200px);
      `};
    ${({ scrollIsBottom }) =>
      scrollIsBottom &&
      css`
        /* height: 3.5rem; */
        transform: translateY(0);
      `};
    ${({ scrollDirection }) =>
      scrollDirection === "up" &&
      css`
        /* height: 3.5rem; */
        transform: translateY(0);
      `};
  }
`;
const NavbarContent = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 92%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }
  /* background-color: red; */
`;

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    &:hover {
      cursor: pointer;
    }
  }
`;
const LinksContainer = styled.div`
  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      margin: 0 1rem;
    }
  }
`;
export const ResumeLink = styled.div`
  padding: 8px 14px;
  display: grid;
  place-content: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  /* border: 1px solid var(--fg-primary-F3); */
  border-radius: 4px;
  /* color: var(--fg-primary-F3); */

  &:hover {
    /* background: var(--fg-primary-F1); */
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

const Header = () => {
  const [scrollIsTop, setIscrollIsTop] = useState(true);
  const [scrollIsBottom, setIscrollIsBottom] = useState(false);
  const scrollDirection = useScrollDirection("up");

  // const Logo = (
  //   <LogoContainer>
  //     <a>
  //       <Image src={darvyImg} alt="portfolio icon" />
  //     </a>
  //   </LogoContainer>
  // );

  const Links = (
    <LinksContainer>
      <ol>
        <li>
          <a href="#about">.About</a>
        </li>
        <li>
          <a href="#experience">.Experience</a>
        </li>
        <li>
          <a href="#projects">.Projects</a>
        </li>
        <li>
          <a href="#contact">.Contact</a>
        </li>
        {/* <Link href={"/"}>Adios</Link> */}
      </ol>
    </LinksContainer>
  );

  const Resume = (
    <ResumeLink>
      <a href="./resumeV1.pdf" target="_blank" rel="noopener noreferrer">
        Resume &gt;
      </a>
    </ResumeLink>
  );

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if (window.scrollY === 0) {
      // console.log("is top");
      setIscrollIsTop(window.scrollY === 0);
      // }
      // if (
      // window.innerHeight + window.pageYOffset >=
      // document.body.offsetHeight
      // ) {
      // console.log("is bottom");
      setIscrollIsBottom(
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight
      );
      // }
    });
    console.log(scrollDirection);
  }, [scrollIsBottom, scrollIsTop, scrollDirection]);

  return (
    <NavbarHeader
      scrollIsTop={scrollIsTop}
      scrollIsBottom={scrollIsBottom}
      scrollDirection={scrollDirection}
    >
      <NavbarContent>
        {/* {Logo} */}
        <LogoContainer>
          <a onClick={scrollTop}>
            <Image src={darvyImg} alt="portfolio icon" />
          </a>
        </LogoContainer>
        <span>
          {Links}
          {Resume}
        </span>
      </NavbarContent>
    </NavbarHeader>
  );
};

export default Header;
