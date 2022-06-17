import styled from "styled-components";

interface ButtonContainerProps {
  fullWidth?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 2rem;

  background: var(--pink);

  height: 2.5rem;
  padding: ${({ fullWidth }) => fullWidth ? '0.5rem 3rem' : '0 1rem'};
  color: var(--text-light);

  font-weight: 600;
  font-size: 1rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
