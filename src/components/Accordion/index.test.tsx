import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";
import { Accordion } from ".";

describe("Accordion component", () => {
  it("Should be able to render the componente", () => {
    const content = 'accordion test'
    const title = 'test'
    render(
      <Accordion title={title}>
        <p>{content}</p>
      </Accordion>
    );
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(content)).toBeInTheDocument()
  });

  it("should be able to start open accordion", () => {
    const content = 'accordion test'
    const title = 'test'
    render(
      <Accordion title={title}>
        <p>{content}</p>
      </Accordion>
    );

    expect(screen.getByAltText('Ocultar descrição')).toBeInTheDocument()
  })

  it("should be able to open and close the accordion", () => {
    const content = 'accordion test'
    const title = 'test'
    render(
      <Accordion title={title}>
        <p>{content}</p>
      </Accordion>
    );

    expect(screen.getByAltText('Ocultar descrição')).toBeInTheDocument()
    const accordionButton = screen.getByTestId('accordion-header')
    fireEvent.click(accordionButton)
    expect(screen.getByAltText('Exibir descrição')).toBeInTheDocument()
    expect(screen.queryByAltText('Ocultar descrição')).not.toBeInTheDocument()
  })

})
