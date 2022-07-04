import styled from "styled-components";

interface ContainerProps {
  error?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;

  label {
    margin-bottom: 0.5rem;
    color: var(--text-body);
    font-weight: 500;
    font-size: 1rem;
  }

  select {
    height: 2.5rem;
    border: none;
    border: ${({ error }) =>
      error ? "1px solid #ff7675" : "1px solid #ccc"};
    border-radius: 0.4rem;
    background-color: #fff;

    font-size: 1rem;
    padding: 0.5rem;
    color: var(--text-body);
    outline-color: ${({ error }) => (error ? "#ff7675" : "var(--text-body)")};
  }

  span {
    color: #ff7675;
    font-size: 0.875rem;
    margin-top: 0.32rem;
    font-weight: 500;
  }
`;
