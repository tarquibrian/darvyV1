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

    h2 {
      font-family: "Oswald", sans-serif;
      /* font-size: 5rem; */
      font-size: clamp(40px, 8vw, 80px);
      font-weight: 200;
      margin-bottom: 20px;
      /* color: #dfdfdf; */
      margin-left: -4px;
      color: transparent;
      text-shadow: 0 0 5px rgba(255 255 255 / 1);
      -webkit-text-stroke: 1px white;
    }

    .links {
      .container__arrow-left {
        font-size: 1.4rem;
        margin-right: 0.5rem;
      }
      &:hover {
        color: rgba(255, 255, 255, 0.6);
        .container__arrow-left {
          margin-right: 0.35rem;
        }
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
  }
`;

export default function FourOhFour() {
  return (
    <Layout>
      <FourOhFourStyled>
        <div className="container">
          <h1>404!</h1>
          <h2>Oh dude. Are you lost?</h2>
          <Link href="/" className="links">
            <span className="container__arrow-left">←</span> Go back home
          </Link>
        </div>
      </FourOhFourStyled>
    </Layout>
  );
}
