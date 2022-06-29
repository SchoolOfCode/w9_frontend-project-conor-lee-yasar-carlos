import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Main from "./Main";

describe("Main component tests", () => {
  test("Checks if main landing page image is rendered", () => {
    render(<Main />);

    const element = screen.getByAltText(/Landing page/i)

    expect(element).toBeInTheDocument();
  });

  test("Checks if log-in button is rendered and mock fn is called onClick", () => {

  })
})



