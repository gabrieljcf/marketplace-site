import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProductCard } from ".";

describe("ProductCard component", () => {
  it("Should be able to render the component", () => {
    const product = {
      _id: "1",
      name: "Product test",
      price: 1.5,
      images: [],
    };

    render(
      <ProductCard
        _id={product._id}
        name={product.name}
        images={product.images}
        price={product.price}
      />,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText("Comprar")).toBeInTheDocument();
  });

  it("Should be able to show the product name in tooltip", () => {
    const product = {
      _id: "1",
      name: "Product test",
      price: 1.5,
      images: [],
    };

    render(
      <ProductCard
        _id={product._id}
        name={product.name}
        images={product.images}
        price={product.price}
      />,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    
    const productName = screen.getByTestId("product-name-label");
    fireEvent.mouseOver(productName);
    expect(screen.getAllByText(product.name)).toHaveLength(2);
  });

  it("Should be able to not show the product name tooltip", () => {
    const product = {
      _id: "1",
      name: "Product test",
      price: 1.5,
      images: [],
    };

    render(
      <ProductCard
        _id={product._id}
        name={product.name}
        images={product.images}
        price={product.price}
      />,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    
    const productName = screen.getByTestId("product-name-label");
    fireEvent.mouseOver(productName);
    expect(screen.getAllByText(product.name)).toHaveLength(2);
    fireEvent.mouseLeave(productName);
    expect(screen.getAllByText(product.name)).toHaveLength(1);
  });
});
