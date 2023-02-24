import React from "react";
import styled from "styled-components";

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
`;

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
export const ResumeLink = styled.a`
  padding: 8px 14px;
  display: grid;
  place-content: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  /* border: 1px solid var(--fg-primary-F3); */
  border-radius: var(--border-radius);
  /* color: var(--fg-primary-F3); */

  &:hover {
    /* background: var(--fg-primary-F1); */
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

const Header = () => {
  return <nav>Header</nav>;
};

export default Header;
