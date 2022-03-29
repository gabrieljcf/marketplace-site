import styled from "styled-components";
import circleImg from '../../assets/circle.svg';

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

  @media (max-width: 768px) {
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
    margin-top: 2.5rem;
    max-width: 400px;
    color: var(--text-paragraph);
    font-size: 1rem;
    font-weight: 500;
  }

  a button {
    border: none;
    background: var(--pink);
    color: var(--text-light);
    border-radius: 2.5rem;
    height: 3rem;
    padding: 0 1rem;
    margin-top: 1.25rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;