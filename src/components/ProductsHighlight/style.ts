import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 4rem auto;

  h2 {
    text-align: center;
    font-size: 2rem;
    color: var(--text-body);
    margin-bottom: 2rem;

    span {
      color: var(--pink-dark);
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 95%;

    h2 {
      font-size: 1.5rem;
    }
  }
`;
