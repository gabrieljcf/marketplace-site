import { Container } from "./styles";

interface SelectProps {
  value: string;
  name: string;
  onChange: (event: any) => void;
  onBlur?: (event: any) => void;
  error?: string;
  label?: string;
  selectValues: string[];
  defaultValue: string;
}
export function Select({
  value,
  name,
  onChange,
  onBlur,
  error,
  label,
  selectValues,
  defaultValue,
}: SelectProps) {
  return (
    <Container error={error}>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      >
        <option value="">{defaultValue}</option>
        {selectValues.map((item, index) => (
          <option key={index + Math.random()}>{item}</option>
        ))}
      </select>
      {typeof error === "string" && <span>{error}</span>}
    </Container>
  );
}
