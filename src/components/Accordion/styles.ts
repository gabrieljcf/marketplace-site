import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-body);
    margin-bottom: 1.25rem;
  }
`;

interface AccordionContentProps {
  isExpanded: boolean;
}
export const AccordionContent = styled.div<AccordionContentProps>`
  height: ${({ isExpanded }) => (isExpanded ? "150px" : "0")};
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  p {
    font-size: 1rem;
    color: var(--text-description);
  }
`;
