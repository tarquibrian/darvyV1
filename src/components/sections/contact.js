import React from "react";
import styled from "styled-components";

const ContactStyled = styled.section``;

const ContactContainer = styled.div`
  max-width: 850px;
  margin: auto;
  font-family: "DM Sans", sans-serif;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  z-index: 9;

  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
    font-weight: 400;
    color: #eae2b7;
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
  &:hover {
    background: rgba(255, 255, 255, 0.05)
      linear-gradient(
        to top right,
        rgba(255, 255, 255, 0),
        rgba(255, 235, 0, 0.15)
      );
  }
`;

const CardContent = styled.div`
  line-height: 1.5;
  display: grid;
  gap: 1rem;

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
    }
  }
`;

const Contact = () => {
  const title = <h1>.Contact</h1>;

  const description = (
    <p>
      Si tiene algo que conversar o preguntarme, no dude en ponerse en contacto
      con mi persona.
    </p>
  );

  const button = <a href="mailto:tarquibrian@gmail.com">Contact Me</a>;

  return (
    <ContactStyled>
      <ContactContainer>
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
