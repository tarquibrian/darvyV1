import React from "react";
import styled from "styled-components";

const AuthorSection = styled.section`
  padding: 0rem;
  color: white;
  width: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: var(--fz-smm);
`;

const Author = () => {
  return (
    <AuthorSection>
      <span>Designed & Build by Brian Tarqui</span>
      <span>Made with Love💖 and Work💪</span>
    </AuthorSection>
  );
};

export default Author;
