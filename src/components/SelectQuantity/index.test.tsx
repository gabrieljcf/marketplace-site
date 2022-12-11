import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { SelectQuantity } from ".";

describe("SelectQuantity component", () => {
  it("Should be able to render the component", () => {
    const quantity = 1;
    const handleQuantity = jest.fn();

    render(<SelectQuantity quantity={quantity} setQuantity={handleQuantity} />);

    const quantityInput = screen.getByTestId(
      "quantity-input"
    ) as HTMLInputElement;
    expect(quantityInput.value).toBe(quantity.toString());
  });

  it("Should be able to increment the quantity", () => {
    const quantity = 1;
    const handleQuantity = jest.fn();

    render(<SelectQuantity quantity={quantity} setQuantity={handleQuantity} />);

    const quantityInput = screen.getByTestId(
      "quantity-input"
    ) as HTMLInputElement;
    const incrementButton = screen.getByTestId("increment-button");

    expect(quantityInput.value).toBe(quantity.toString());
    fireEvent.click(incrementButton);
    expect(handleQuantity).toBeCalledWith(quantity + 1);
  });

  it("Should be able to decrement the quantity", () => {
    const quantity = 2;
    const handleQuantity = jest.fn();
    render(<SelectQuantity quantity={quantity} setQuantity={handleQuantity} />);

    const quantityInput = screen.getByTestId(
      "quantity-input"
    ) as HTMLInputElement;
    const decrementButton = screen.getByTestId("decrement-button");
    expect(quantityInput.value).toBe(quantity.toString());
    fireEvent.click(decrementButton);
    expect(handleQuantity).toBeCalledWith(quantity - 1);
  });

  it("Should not be able to decrement the quantity to zero", () => {
    const quantity = 1;
    const handleQuantity = jest.fn();
    render(<SelectQuantity quantity={quantity} setQuantity={handleQuantity} />);

    const quantityInput = screen.getByTestId(
      "quantity-input"
    ) as HTMLInputElement;
    const decrementButton = screen.getByTestId("decrement-button");
    expect(quantityInput.value).toBe(quantity.toString());
    fireEvent.click(decrementButton);
    expect(handleQuantity).not.toHaveBeenCalled();
  });

  it("Should be able to change the quantity", () => {
    const quantity = 1;
    const handleQuantity = jest.fn();
    const newQuantity = 23
    render(<SelectQuantity quantity={quantity} setQuantity={handleQuantity} />);

    const quantityInput = screen.getByTestId(
      "quantity-input"
    ) as HTMLInputElement;

    expect(quantityInput.value).toBe(quantity.toString());
    fireEvent.change(quantityInput, { target: { value: newQuantity } });
    expect(handleQuantity).toHaveBeenCalledWith(newQuantity);
  });

  it("Should not be able to change the quantity to zero", () => {
    const quantity = 1;
    const handleQuantity = jest.fn();
    const newQuantity = 0
    render(<SelectQuantity quantity={quantity} setQuantity={handleQuantity} />);

    const quantityInput = screen.getByTestId(
      "quantity-input"
    ) as HTMLInputElement;

    expect(quantityInput.value).toBe(quantity.toString());
    fireEvent.change(quantityInput, { target: { value: newQuantity } });
    expect(handleQuantity).toHaveBeenCalledWith(quantity);
  });
});
