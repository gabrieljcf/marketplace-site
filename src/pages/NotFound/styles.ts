import styled from "styled-components";

export const NotFoundContainer = styled.div`
  max-width: 1120px;
  margin: 5rem auto calc(5rem - 50px) auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--text-body);

    span {
      color: var(--pink-dark);
    }
  }
`;
