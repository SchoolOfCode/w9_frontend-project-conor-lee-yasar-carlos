import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./Main";

describe("Main component tests", () => {
  test("Checks if main landing page image is rendered", () => {
    render(<Main />);

    const element = screen.getByAltText(/Landing page/i)

    expect(element).toBeInTheDocument();
  });

  test("Checks if main tag is being rendered with all components inside", () => {
    render(<Main />);

    const element = screen.getByRole("main")

    expect(element).toBeInTheDocument();
  });
})
