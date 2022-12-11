import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button Component", () => {
  it("Should be able to render the component", () => {
    const content = "Test content";
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>{content}</Button>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("Should be able to render the button dislabed", () => {
    const content = "Test content";
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled={true}>
        {content}
      </Button>
    );
    expect(screen.getByTestId("button")).toBeDisabled();
    fireEvent.click(screen.getByTestId("button"));
    expect(handleClick).not.toBeCalled();
  });

  it("Should be able to execute the function passed by parameter", () => {
    const content = "Test content";
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>{content}</Button>);
    fireEvent.click(screen.getByTestId("button"));
    expect(handleClick).toBeCalled();
  });
});
