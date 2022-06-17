import styled from "styled-components";

export const BasketContainer = styled.main``;

export const BasketContent = styled.div`
  max-width: 1120px;
  margin: 5rem auto;
  h2 {
    font-size: 2.25rem;
    font-weight: 500;
    color: var(--text-body);
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: var(--line);
  margin: 1.25rem 0;
`;

export const BasketDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-template-rows: auto;
  grid-gap: 60px;
`;

export const CardListContainer = styled.div`
  align-self: flex-start;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  border-radius: 2.5rem;
`;

export const TotalContainer = styled.div`
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  border-radius: 2.5rem;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-body);
  }

  p {
    margin: 1.25rem 0;

    font-size: 2.25rem;
    font-weight: 600;
    color: var(--text-body);
  }
`;
