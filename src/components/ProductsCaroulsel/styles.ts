import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const ErrorContainer = styled.div`
  margin: 2rem 0;
  text-align: center;

  span {
    color: var(--pink);
    font-weight: 600;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
      font-size: 1.1rem;
    }
  }
`;
