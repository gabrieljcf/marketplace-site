import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 1120px;
  margin: 5rem auto;

  h3 {
    font-size: 1.5rem;
    color: var(--text-body);
    margin-bottom: 1.5rem;
  }

  h2 {
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

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ContactContent = styled.div`
  .informationsContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.25rem 0;

    img {
      width: 350px;
    }

    @media screen and (max-width: 768px) {
      img {
        display: none;
      }
    }
  }
`;
