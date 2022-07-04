import { ButtonContainer } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export function Button({
  onClick,
  children,
  className,
  fullWidth,
  disabled
}: ButtonProps) {
  return (
    <ButtonContainer
      className={className || ""}
      onClick={onClick}
      fullWidth={fullWidth || false}
      disabled={disabled || false}
    >
      {children}
    </ButtonContainer>
  );
}
