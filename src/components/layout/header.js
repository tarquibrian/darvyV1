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
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 999;

  transition: 0.3s ease-in;
  @media (prefers-reduced-motion: no-preference) {
    ${({ scrollIsTop, isOpen }) =>
      !scrollIsTop &&
      isOpen === false &&
      css`
        transform: translateY(200px);
      `};
    ${({ scrollIsBottom }) =>
      scrollIsBottom &&
      css`
        transform: translateY(0);
      `};
    ${({ scrollDirection }) =>
      scrollDirection === "up" &&
      css`
        transform: translateY(0);
      `};
    ${({ isOpen }) =>
      isOpen &&
      css`
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        ${LinksContainer} {
          display: flex;
          ol {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
          }
        }
        ${NavbarContentResponsive} {
          width: 100%;
        }
      `};
  }
`;
const NavbarContent = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  z-index: 999;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    /* width: fit-content; */
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 500px) {
    display: none;
  }
`;
export const ResumeLink = styled.div`
  padding: 8px 14px;
  display: grid;
  place-content: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarContentResponsive = styled.div`
  margin: 0 auto;
  height: 100%;
  /* width: 100%; */
  padding: 0 4%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  z-index: 999;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = () => {
  const [scrollIsTop, setIscrollIsTop] = useState(true);
  const [scrollIsBottom, setIscrollIsBottom] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection("up");

  const Links = (
    <LinksContainer>
      <ol>
        <li>
          <a href="#about" onClick={() => toggle()}>
            .About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => toggle()}>
            .Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => toggle()}>
            .Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => toggle()}>
            .Contact
          </a>
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

  const toggle = () => {
    if (scrollDirection === "up") {
      setIsOpen(isOpen);
    }
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIscrollIsTop(window.scrollY === 0);
      setIscrollIsBottom(
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight
      );
    });
  }, [scrollIsBottom, scrollIsTop, scrollDirection]);

  return (
    <NavbarHeader
      scrollIsTop={scrollIsTop}
      scrollIsBottom={scrollIsBottom}
      scrollDirection={scrollDirection}
      isOpen={isOpen}
    >
      <NavbarContent>
        <LogoContainer>
          <a onClick={scrollTop} href={`#`}>
            <Image src={darvyImg} alt="portfolio icon" />
          </a>
        </LogoContainer>
        <span>
          {Links}
          {Resume}
        </span>
      </NavbarContent>
      <NavbarContentResponsive>
        <LogoContainer>
          <a onClick={() => setIsOpen(!isOpen)}>
            <Image src={darvyImg} alt="portfolio icon" />
          </a>
        </LogoContainer>
        <span>
          {Links}
          {Resume}
        </span>
      </NavbarContentResponsive>
    </NavbarHeader>
  );
};

export default Header;
