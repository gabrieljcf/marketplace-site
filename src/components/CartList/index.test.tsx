import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartList } from ".";

describe("CartList component", () => {
  it("Should be able to render the component", () => {
    const product = {
      _id: "1",
      name: "Product test",
      price: 1.5,
      images: [],
      quantity: 2,
    };
    const handleQuantity = jest.fn();
    const handleRemove = jest.fn();
    render(
      <CartList
        product={product}
        onChangeQuantity={handleQuantity}
        onRemove={handleRemove}
      />,
      { wrapper: BrowserRouter }
    );

    const quantityInput = screen.getByTestId(
      "quantity-input"
    ) as HTMLInputElement;
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText("R$ 1,50")).toBeInTheDocument();
    expect(screen.getByText("R$ 3,00")).toBeInTheDocument();
    expect(quantityInput.value).toBe(product.quantity.toString());
  });

  it("Should be able to increment the product quantity", () => {
    const product = {
      _id: "1",
      name: "Product test",
      price: 1.5,
      images: [],
      quantity: 1,
    };
    const handleQuantity = jest.fn();
    const handleRemove = jest.fn();
    render(
      <CartList
        product={product}
        onChangeQuantity={handleQuantity}
        onRemove={handleRemove}
      />,
      { wrapper: BrowserRouter }
    );

    const quantityInput = screen.getByTestId(
      "quantity-input"
    ) as HTMLInputElement;
    const incrementButton = screen.getByTestId("increment-button");
    expect(quantityInput.value).toBe(product.quantity.toString());
    fireEvent.click(incrementButton);
    expect(quantityInput.value).toBe((product.quantity + 1).toString());
  });

  it("Should be able to decrement the product quantity", () => {
    const product = {
      _id: "1",
      name: "Product test",
      price: 1.5,
      images: [],
      quantity: 2,
    };
    const handleQuantity = jest.fn();
    const handleRemove = jest.fn();
    render(
      <CartList
        product={product}
        onChangeQuantity={handleQuantity}
        onRemove={handleRemove}
      />,
      { wrapper: BrowserRouter }
    );

    const quantityInput = screen.getByTestId(
      "quantity-input"
    ) as HTMLInputElement;
    const decrementButton = screen.getByTestId("decrement-button");
    expect(quantityInput.value).toBe(product.quantity.toString());
    fireEvent.click(decrementButton);
    expect(quantityInput.value).toBe((product.quantity - 1).toString());
  });

  it("Should be able to call the function to remove the product", () => {
    const product = {
      _id: "1",
      name: "Product test",
      price: 1.5,
      images: [],
      quantity: 2,
    };
    const handleQuantity = jest.fn();
    const handleRemove = jest.fn();
    render(
      <CartList
        product={product}
        onChangeQuantity={handleQuantity}
        onRemove={handleRemove}
      />,
      { wrapper: BrowserRouter }
    );

    const removeProductButton = screen.getByTestId("remove-product-button");
    fireEvent.click(removeProductButton);
    expect(handleRemove).toHaveBeenCalledWith(product._id);
  });
});
