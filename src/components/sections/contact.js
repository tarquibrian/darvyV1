import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "src/context/app.context";
import { contactData } from "@data";

const ContactStyled = styled(motion.section)``;

const ContactContainer = styled.div`
  width: 80%;
  max-width: 850px;
  margin: auto;
  padding: 40px;
  background: var(--bg-light);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius);
  z-index: 9;

  h1 {
    font-family: var(--ff-oswald);
    font-size: 5rem;
    font-weight: 400;
    color: #eae2b7;

    font-size: var(--fz-header);
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
      height: 3px;
      background: #eae2b7;
    }
  }
  &:hover::before {
    opacity: 1;
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse1-x) var(--mouse1-y),
      rgba(255, 255, 255, 0.15),
      transparent 40%
    );
    border-radius: inherit;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    left: 0%;
    opacity: 0;
    transition: opacity 500ms;
    z-index: -1;
  }

  &:hover {
    /* background: rgba(255, 255, 255, 0.05)
        linear-gradient(
          to top right,
          rgba(255, 255, 255, 0),
          rgba(255, 235, 0, 0.15)
        ); */
    background: var(--bg-light-hover);
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const CardContent = styled.div`
  line-height: 1.5;
  display: grid;
  gap: 1rem;

  p {
    font-family: var(--ff-sofia);
    font-size: var(--fz-md);
  }

  a {
    padding: 16px 28px;
    display: grid;
    place-content: center;
    border: var(--border-size) solid var(--border-light);
    border-radius: var(--border-radius);
    margin: auto;

    &:hover {
      background: var(--bg-light);
      cursor: pointer;
      filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
    }
  }
`;

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hidden: { opacity: 0, scale: 1 },
};

const languages = {
  es: contactData.es,
  en: contactData.en,
};

const Contact = () => {
  const cardref = useRef(null);
  const controls = useAnimation();
  const [refView, inView] = useInView();
  const { state } = useAppContext();

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  const handleOnMouseMove = (e) => {
    const rect = cardref?.current?.getBoundingClientRect(),
      x = e?.clientX - rect?.left,
      y = e?.clientY - rect?.top;

    cardref?.current?.style?.setProperty("--mouse1-x", `${x}px`);
    cardref?.current?.style?.setProperty("--mouse1-y", `${y}px`);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    window.addEventListener("mousemove", handleOnMouseMove);
  }, [controls, inView]);

  return (
    <ContactStyled
      id="contact"
      ref={refView}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <ContactContainer ref={cardref}>
        <h1>{currentLanguage.lenguage.title}</h1>
        <CardContent>
          <p>✷ {currentLanguage.lenguage.description}</p>
          <a href="mailto:tarquibrian@gmail.com">
            {currentLanguage.lenguage.button} →
          </a>
        </CardContent>
      </ContactContainer>
    </ContactStyled>
  );
};

export default Contact;
