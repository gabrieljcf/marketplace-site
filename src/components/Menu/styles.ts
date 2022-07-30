import styled from "styled-components";

export const Container = styled.nav`
  background: var(--pink);
  border-radius: 2.5rem;
  max-height: 80px;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li a {
      text-decoration: none;
      color: var(--text-light);
      font-weight: 600;
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
      font-size: 1rem;

      &:hover,
      &.active {
        color: var(--pink);
        background: var(--background);
        border-radius: 2.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;
