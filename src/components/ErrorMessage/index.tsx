import { ErrorContainer } from "./style";

interface ErrorProps {
  message: string;
}
export function ErrorMessage({ message }: ErrorProps) {
  return (
    <ErrorContainer>
      <span>{message}</span>
    </ErrorContainer>
  );
}
