import styled from "styled-components";
import circleImg from "../../assets/circle.svg";

export const Container = styled.section`
  height: 460px;
  max-height: 480px;
  background: var(--pink-light);

  @media screen and (max-width: 768px) {
    height: 390px;
  }
`;

interface ContentProps {
  reverse: boolean;
}

export const Content = styled.div<ContentProps>`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;

  img {
    width: 280px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

export const ContainerText = styled.div`
  background-image: url(${circleImg});
  background-repeat: no-repeat;
  background-position: 80% 0%;
  margin-top: 1.25rem;
  height: 345px;

  h1 {
    color: var(--text-body);
    font-size: 1rem;
  }

  h2 {
    margin-top: 2.5rem;
    max-width: 470px;
    color: var(--text-body);
    font-size: 2rem;
  }

  span {
    color: var(--pink-dark);
  }

  p {
    margin: 2.5rem 0;
    max-width: 400px;
    color: var(--text-paragraph);
    font-size: 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    background-position: 0% 0%;
    h2 {
      font-size: 1.5rem;
    }
  }
`;
