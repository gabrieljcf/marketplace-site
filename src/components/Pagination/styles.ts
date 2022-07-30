import styled from "styled-components";

interface paginationProps {
  selected?: boolean;
}

export const PaginationContainer = styled.div`
  margin-top: 2.5rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    color: #a9a9a9;
    padding: 0.3rem 1rem;
  }
`;

export const Button = styled.button<paginationProps>`
  background: none;
  border: none;
  background-color: ${({ selected }) =>
    selected ? "var(--pink)" : "transparent"};
  color: ${({ selected }) => (selected ? "var(--text-light)" : "#a9a9a9")};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.3rem 1rem;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
