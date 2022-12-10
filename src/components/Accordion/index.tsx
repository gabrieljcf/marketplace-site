import { useState } from "react";

import arrowDownImg from "../../assets/arrow_down.svg";
import arrowUpImg from "../../assets/arrow_up.svg";

import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
} from "./styles";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}
export function Accordion({ title, children }: AccordionProps) {
  const [expanded, setExpanded] = useState(true);
  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setExpanded(!expanded)}>
        <h3>{title}</h3>
        <img
          src={!expanded ? arrowUpImg : arrowDownImg}
          alt={!expanded ? "Exibir descrição" : "Ocultar descrição"}
        />
      </AccordionHeader>

      <AccordionContent isExpanded={expanded}>{children}</AccordionContent>
    </AccordionContainer>
  );
}
