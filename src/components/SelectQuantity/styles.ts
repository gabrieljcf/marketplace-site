import styled from "styled-components";

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 110px;
  height: 40px;
  
  padding: 5px 0.5rem;

  border: 2px solid var(--text-paragraph);
  border-radius: 1.5rem;

  input {
    width: 100%;
    border: none;

    -moz-appearance: textfield;
    appearance: textfield;
    text-align: center;

    font-size: 1rem;
    color: var(--text-body);
    font-weight: 600;

    outline: none;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    border: none;
    background: none;
    color: var(--pink-dark);
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
