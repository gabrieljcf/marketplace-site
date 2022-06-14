import styled from "styled-components";

interface paginationProps {
  selected?: boolean;
}

export const PaginationContainer = styled.div`
  margin-top: 2.5rem;

  display: flex;
  justify-content: center;

  div {
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
  }
`;

export const Button = styled.button<paginationProps>`
  background: none;
  border: none;

  color: ${({ selected }) =>
    selected ? "var(--pink)" : "var(--text-body)"};
  
  font-size: 1rem;
  font-weight: 500;
  padding: 1.2rem;

  & + button {
    border-left: 1px solid var(--line);
  }

  &:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  &:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;
