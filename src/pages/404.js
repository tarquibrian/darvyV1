import { Layout } from "@components";
import Link from "next/link";
import styled from "styled-components";

const FourOhFourStyled = styled.section`
  width: 80%;
  margin: auto;
  /* background-color: red; */
  display: grid;
  place-content: center;
  height: 100vh;
  .container {
    border-radius: 4px;
    font-family: "DM Sans", sans-serif;
    font-weight: normal;
    padding: 40px;
    background: rgba(255, 255, 255, 0.1);
    /* background: rgba(255, 255, 255, 0.05)
    linear-gradient(to top right, rgba(255, 235, 0, 0.15)); */
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 9;
    transition: 0.8s ease;
    h1 {
      color: #eae2b7;
      font-size: clamp(40px, 8vw, 80px);
    }
    &:hover {
      background: rgba(255, 255, 255, 0.05)
        linear-gradient(
          to top right,
          rgba(255, 255, 255, 0),
          rgba(255, 235, 0, 0.15)
        );
    }
  }
`;

export default function FourOhFour() {
  return (
    <Layout>
      <FourOhFourStyled>
        <div className="container">
          <h1>404 - Page Not Found</h1>
          <Link href="/">Go back home</Link>
        </div>
      </FourOhFourStyled>
    </Layout>
  );
}
