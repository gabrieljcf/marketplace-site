import styled from "styled-components";

export const Card = styled.div`

  padding: 2rem;
  
  max-width: 220px;
  max-height: 270px;
  
  border-radius: 2rem;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
  
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-body);

    margin: 1.25rem 0;
   
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
  }
`;

export const PriceContainer = styled.div`
  position: absolute;
  left: 0;
  top: 5rem;
  
  padding: 0.625rem;

  background: var(--background);
  box-shadow: 0px 0px 3px 3px rgba(99, 57, 57, 0.1);
  border-radius: 0px 50px 50px 0px;

  small {
    color: var(--text-body);
    font-size: .875rem;
    font-weight: 500;
  }
`;