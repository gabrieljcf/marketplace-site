import { TooltipContainer } from "./style";

interface TooltipProps {
  description: string;
  isHover: boolean;
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipContainer isHover={props.isHover}>
      {props.description}
    </TooltipContainer>
  );
}