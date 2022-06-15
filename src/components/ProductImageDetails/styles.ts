import styled from "styled-components";

export const Content = styled.div`
  width: 450px;
  height: 450px;
  padding: 1.25rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 70%;
  }
`;

export const ImagesToSelectContainer = styled.div`
  align-self: flex-start;
  div {
    max-width: 65px;
    max-height: 75px;
    
    border: 1px solid var(--text-paragraph);
    border-radius: 0.5rem;
    
    padding: 0.5rem;
    margin: 0.5rem;
    
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  .active {
    border: 2px solid var(--pink);
  }
`;
