import React from "react";
import styled from "styled-components";

const ContactStyled = styled.section``;

const ContactContainer = styled.div`
  max-width: 850px;
  margin: auto;
  font-family: "DM Sans", sans-serif;

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
`;

const Contact = () => {
  const title = <h1>.Contact</h1>;

  const description = (
    <p>
      Although I’m not currently looking for any new opportunities, my inbox is
      always open. Whether you have a question or just want to say hi, I’ll try
      my best to get back to you!
    </p>
  );

  const button = <button>Say Hello</button>;

  return (
    <ContactStyled>
      <ContactContainer>
        {title}
        {description}
        {button}
      </ContactContainer>
    </ContactStyled>
  );
};

export default Contact;
