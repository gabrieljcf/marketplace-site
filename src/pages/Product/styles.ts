import styled from "styled-components";

export const Content = styled.div`
  max-width: 1120px;
  margin: 5rem auto calc(5rem - 50px) auto;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const Line = styled.div`
  margin: 0 2.5rem;
  height: 450px;
  width: 1px;
  background-color: var(--line);
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
    width: 500px;
    color: var(--text-description);
    font-size: 0.875rem;
  }
`;

export const PriceContainer = styled.div`
  margin-top: 2.5rem;
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
