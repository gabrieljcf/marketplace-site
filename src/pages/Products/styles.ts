import styled from "styled-components";

export const Content = styled.div`
  max-width: 1120px;
  margin: 5rem auto;

  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "line line"
    "title input"
    "category products";

  @media screen and (max-width: 768px) {
    padding: 1rem;
    margin: 0 auto 5rem auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "line"
      "title"
      "category"
      "input"
      "products";
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: var(--line);
  grid-area: line;
`;

export const Title = styled.h3`
  grid-area: title;

  margin-top: 2.5rem;
  margin-bottom: 1.5rem;

  color: var(--text-body);

  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const SearchInput = styled.input`
  grid-area: input;
  width: calc(100% - 1.25rem);
  height: 3.5rem;
  padding: 1.25rem;

  margin-top: 2.5rem;
  margin-left: 1.25rem;

  border: none;
  border: 1px solid var(--line);
  border-radius: 1.5rem;

  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  color: var(--text-body);
  font-size: 1rem;

  &::placeholder {
    color: var(--text-paragraph);
    font-weight: 500;
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const SearchContainer = styled.div`
  position: relative;

  button {
    background: none;
    border: none;
    position: absolute;
    right: 0;
    top: 3.4375rem;
    margin-right: 1rem;
  }
`;

export const ListContainer = styled.div`
  grid-area: products;

  margin-top: 3.375rem;
  margin-left: 3.75rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const ListProductsContent = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;

  @media screen and (max-width: 768px) {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ErrorContainer = styled.div`
  margin: 2.5rem 0;
  text-align: center;

  span {
    color: var(--pink);
    font-weight: 600;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
      font-size: 1.1rem;
    }
  }
`;
