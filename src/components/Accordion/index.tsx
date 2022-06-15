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
  content: string;
}
export function Accordion({ title, content }: AccordionProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setExpanded(!expanded)}>
        <h3>{title}</h3>
        <img
          src={expanded ? arrowDownImg : arrowUpImg}
          alt="exibir descrição"
        />
      </AccordionHeader>

      <AccordionContent isExpanded={expanded}>
        <p>{content}</p>
      </AccordionContent>
    </AccordionContainer>
  );
}
