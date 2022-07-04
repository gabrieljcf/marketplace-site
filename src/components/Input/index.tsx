import { Container } from "./styles";

interface InputProps {
  value: string;
  name: string;
  placeholder?: string;
  type?: string;
  inputType?: "textarea" | "input";
  onChange: (event: any) => void;
  onBlur?: (event: any) => void;
  error?: string;
  label?: string;
  mask?: (value: string, percentage: number) => string;
}
export function Input({
  value,
  name,
  placeholder,
  type,
  inputType,
  onChange,
  onBlur,
  error,
  label,
  mask,
}: InputProps) {
  return (
    <Container error={error}>
      <label htmlFor="name">{label}</label>
      {inputType !== "textarea" ? (
        <input
          value={mask ? mask(value, 100) : value}
          type={type || "text"}
          name={name || ""}
          placeholder={placeholder || "Informe um valor"}
          onChange={onChange}
          onBlur={onBlur}
          id={name}
        />
      ) : (
        <textarea
          rows={4}
          cols={50}
          value={value}
          name={name || ""}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder || "Informe um valor"}
        ></textarea>
      )}
      {typeof error === "string" && <span>{error}</span>}
    </Container>
  );
}
