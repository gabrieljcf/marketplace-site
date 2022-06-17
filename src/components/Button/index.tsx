import { ButtonContainer } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function Button({
  onClick,
  children,
  className,
  fullWidth,
}: ButtonProps) {
  return (
    <ButtonContainer
      className={className || ""}
      onClick={onClick}
      fullWidth={fullWidth || false}
    >
      {children}
    </ButtonContainer>
  );
}
