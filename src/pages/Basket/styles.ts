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

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
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
  grid-gap: 3.75rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1.25rem;
  }
`;

export const CardListContainer = styled.div`
  align-self: flex-start;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  border-radius: 2.5rem;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
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
    text-align: center;

    font-size: 2rem;
    font-weight: 600;
    color: var(--text-body);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 250px;
  }
`;

export const SendInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;

  img {
    width: 100%;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 1.25rem;
    color: var(--text-body);

    span {
      color: var(--pink-dark);
    }

    @media screen and (max-width: 768px) {
      font-size: 1.25rem;

    }
  }
`;
