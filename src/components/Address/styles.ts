import styled from "styled-components";
import circleImg from "../../assets/circle.svg";

export const Container = styled.section`
  background: var(--pink-light);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    img {
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
    img {
      display: none;
    }

    button {
      margin: 2.5rem 0;
      align-self: flex-start;
    }
  }
`;

export const ContainerText = styled.div`
  width: 50%;
  margin: 1.25rem auto auto;
  background-image: url(${circleImg});
  background-repeat: no-repeat;
  background-position: 20% 0%;
  margin-top: 1.25rem;

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
    color: var(--text-paragraph);
    font-size: 1rem;
    font-weight: 500;
    margin-top: 0.3125rem;
  }

  @media (max-width: 768px) {
    background-position: 0% 0%;
    width: 100%;
    padding: 1rem 0;
  }
`;
