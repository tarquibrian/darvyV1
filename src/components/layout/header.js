import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import darvyImg from "../../images/darvy-icon.png";
import { useScrollDirection } from "@hooks";
import { motion } from "framer-motion";
import { useAppContext } from "src/context/app.context";
import Head from "next/head";
import { useRouter } from "next/router";

const NavbarHeader = styled(motion.header)`
  position: fixed;
  bottom: 5%;
  left: 0%;
  right: 0%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  transition: 0.3s ease-in;

  .dark {
    border: 2px solid rgba(255, 255, 255, 0.5);
    button {
      color: white;
    }
    .text {
      a {
        color: white;
      }
    }
    .resumelink {
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
  .light {
    border: 2px solid rgba(0, 0, 0, 0.5);
    button {
      color: black;
    }
    .text {
      a {
        color: black;
      }
    }
    .resumelink {
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }

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
const NavbarContent = styled(motion.div)`
  margin: auto;
  height: 100%;
  width: 80%;
  max-width: 1280px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
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
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 40px;
  img {
    width: 100%;
    width: 50px;
    height: 50px;
    height: 100%;
    object-fit: cover;
  }
  button {
    font-size: 1rem;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
      cursor: pointer;
      text-shadow: 0 0 5px rgba(255 255 255 / 0.8);
    }
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
      transition: 0.1s ease;
      /* font-family: var(--ff-sofia); */
      font-size: var(--fz-smm);
      &:hover {
        text-shadow: 0 0 5px rgba(255 255 255 / 0.8);
      }
    }
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
export const ResumeLink = styled.div`
  padding: 8px 14px;
  display: grid;
  place-content: center;
  font-size: var(--fz-sm);
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarContentResponsive = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 80%;
  padding: 0 4%;

  .dark {
    border: 2px solid rgba(255, 255, 255, 0.5);
    button {
      color: white;
    }
    .text {
      a {
        color: white;
      }
    }
    .resumelink {
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
  .light {
    border: 2px solid rgba(0, 0, 0, 0.5);
    button {
      color: black;
    }
    .text {
      a {
        color: black;
      }
    }
    .resumelink {
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }

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

  @media screen and (max-width: 640px) {
    width: 90%;
    justify-content: center;
  }
`;

const Header = () => {
  const { state, toggleLanguage, changeTheme, updateColor } = useAppContext();
  const [scrollIsTop, setIscrollIsTop] = useState(true);
  const [scrollIsBottom, setIscrollIsBottom] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection("up");

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
      <NavbarContent
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={`${state.currentTheme === "dark" ? "dark" : "light"}`}
      >
        <LogoContainer>
          <Link onClick={scrollTop} href={`/`}>
            <Image src={darvyImg} alt="portfolio icon" />
          </Link>
          <button onClick={() => toggleLanguage()}>
            {state.currentLanguage}
          </button>
        </LogoContainer>

        <span className="text">
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
            </ol>
          </LinksContainer>
          <ResumeLink className="resumelink">
            <a
              href="./resumeV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume"
            >
              Resume &gt;
            </a>
          </ResumeLink>
        </span>
      </NavbarContent>
      <NavbarContentResponsive
        className={`${state.currentTheme === "dark" ? "dark" : "light"}`}
      >
        <LogoContainer>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image src={darvyImg} alt="portfolio icon" />
          </button>
          <button onClick={() => toggleLanguage()}>
            {state.currentLanguage}
          </button>
        </LogoContainer>
        <span className="text">
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
          <ResumeLink className="resumelink">
            <a href="./resumeV1.pdf" target="_blank" rel="noopener noreferrer">
              Resume &gt;
            </a>
          </ResumeLink>
        </span>
      </NavbarContentResponsive>
    </NavbarHeader>
  );
};

export default Header;
