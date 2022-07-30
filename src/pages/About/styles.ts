import styled from "styled-components";

export const AboutContent = styled.div`
  max-width: 1120px;
  margin: 5rem auto;

  h3 {
    font-size: 2rem;
    color: var(--text-body);
    margin-bottom: 1.5rem;
  }

  h4 {
    font-size: 1.5rem;
    color: var(--text-body);
    margin: 1.5rem 0;
    max-width: 50px;

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 5px;
      background: var(--pink);
      border-radius: 2.5rem;
    }
  }

  span {
    color: var(--pink-dark);
  }

  p {
    color: var(--text-description);
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 768px){
    padding: 0 1rem;
  }
`;
