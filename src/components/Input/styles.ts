import styled from "styled-components";

interface ContainerProps {
  error?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;

  input,
  textarea {
    width: 100%;

    border: none;
    border: ${({ error }) =>
      error ? "1px solid #ff7675" : "1px solid #ccc"};
    border-radius: 0.4rem;

    font-size: 1rem;
    padding: 0 0.5rem;
    color: var(--text-body);
    outline-color: ${({ error }) => (error ? "#ff7675" : "var(--text-body)")};
  }

  input {
    height: 2.5rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  textarea {
    resize: none;
  }

  span {
    color: #ff7675;
    font-size: 0.875rem;
    margin-top: 0.32rem;
    font-weight: 500;
  }
`;
