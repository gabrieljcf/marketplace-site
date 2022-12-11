import { QuantityContainer } from "./styles";

interface SelectQuantityProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export function SelectQuantity({ quantity, setQuantity }: SelectQuantityProps) {
  function handleQuantity(operation: string) {
    if (operation === "decrement" && quantity === 1) return;
    if (operation === "increment") setQuantity(Number(quantity) + 1);
    if (operation === "decrement") setQuantity(quantity - 1);
  }

  function handleChange(value: string) {
    const parseValue = Number(value);
    if (parseValue <= 0) {
      setQuantity(1);
      return;
    }
    setQuantity(parseValue);
  }

  return (
    <QuantityContainer>
      <button
        onClick={() => handleQuantity("decrement")}
        data-testid="decrement-button"
      >
        -
      </button>
      <input
        data-testid="quantity-input"
        type="number"
        value={quantity}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        onClick={() => handleQuantity("increment")}
        data-testid="increment-button"
      >
        +
      </button>
    </QuantityContainer>
  );
}
