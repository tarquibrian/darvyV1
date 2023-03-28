import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactStyled = styled(motion.section)``;

const ContactContainer = styled.div`
  width: 80%;
  max-width: 850px;
  margin: auto;
  font-family: "DM Sans", sans-serif;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  z-index: 9;
  margin-bottom: 150px;

  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
    font-weight: 400;
    color: #eae2b7;

    font-size: clamp(40px, 8vw, 80px);
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
    z-index: 0;
  }

  &:hover {
    /* background: rgba(255, 255, 255, 0.05)
        linear-gradient(
          to top right,
          rgba(255, 255, 255, 0),
          rgba(255, 235, 0, 0.15)
        ); */

    background: rgba(255, 225, 142, 0.1);
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
    font-size: clamp(14px, 2vw, 18px);
  }

  a {
    padding: 16px 28px;
    display: grid;
    place-content: center;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--border-radius);
    margin: auto;
    border-radius: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
    }
  }
`;

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 1 },
};

const Contact = () => {
  const cardref = useRef(null);
  const controls = useAnimation();
  const [refView, inView] = useInView();

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    // const rect = target.getBoundingClientRect(),
    const rect = cardref.current.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    cardref.current.style.setProperty("--mouse1-x", `${x}px`);
    cardref.current.style.setProperty("--mouse1-y", `${y}px`);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    window.addEventListener("mousemove", handleOnMouseMove);
  }, [controls, inView]);
  const title = <h1>.Contact</h1>;

  const description = (
    <p>
      Si tiene algo que conversar o preguntarme, no dude en ponerse en contacto
      con mi persona.
    </p>
  );

  const button = <a href="mailto:tarquibrian@gmail.com">Contact Me</a>;

  return (
    <ContactStyled
      id="contact"
      ref={refView}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <ContactContainer ref={cardref}>
        {title}
        <CardContent>
          {description}
          {button}
        </CardContent>
      </ContactContainer>
    </ContactStyled>
  );
};

export default Contact;
