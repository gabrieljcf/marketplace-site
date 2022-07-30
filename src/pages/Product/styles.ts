import styled from "styled-components";

export const Content = styled.div`
  max-width: 1120px;
  margin: 5rem auto calc(5rem - 50px) auto;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column;
  } 
`;

export const Line = styled.div`
  margin: 0 2.5rem;
  height: 450px;
  width: 1px;
  background-color: var(--line);

  @media screen and (max-width: 768px) {
    margin: 0;
    height: 1px;
    width: 100%;
  } 
`;

export const ProductDetails = styled.div`
  max-width: 500px;
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-body);
    margin-bottom: 2.5rem;
  }

  p {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    overflow: hidden;
    color: var(--text-description);
    font-size: 0.875rem;
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;

    h2 {
      margin: 1.25rem 0;
    }
  } 
  
`;

export const PriceContainer = styled.div`
  margin: 2.5rem 0;
  display: flex;
  align-items: center;

  p {
    margin-left: 1.25rem;
    font-size: 1.5rem;
    color: var(--text-body);
    font-weight: 600;
  }
`;

export const Button = styled.button`
  background: var(--pink);
  color: var(--text-light);

  border-radius: 1.5rem;
  height: 45px;

  margin-top: 2.5rem;
  padding: 0 2.25rem;

  font-weight: 600;
  font-size: 1.125rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
