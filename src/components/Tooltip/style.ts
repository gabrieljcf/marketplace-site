import styled from "styled-components";

interface TooltipProps {
    isHover: boolean;

}

export const TooltipContainer = styled.div<TooltipProps>`
  background: var(--pink);
  
  padding: .3125rem .625rem;
  margin-top: 0.8rem;
  
  border-radius: 2.5rem;
  font-weight: 500;
  color: var(--text-light);
  
  position: absolute;
  z-index: 100;
  
  font-size: 0.875rem;
  white-space: nowrap;
  display: ${({ isHover }) => isHover
        ? "block"
        : "none"
    };
`