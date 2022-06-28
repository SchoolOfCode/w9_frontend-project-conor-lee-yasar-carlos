import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("Main app tests for component renders", () => {
  test("Renders Log in button in the navigation bar", () => {
    render(<App />);
    
    const linkElement = screen.getByText(/Log In/i);
  
    expect(linkElement).toBeInTheDocument();
  });

  test("Tests if SoC BG img element is being rendered", () => {
    render(<App />);
    
    const linkElement = screen.getByAltText("SoC BG");

    expect(linkElement).toBeInTheDocument();
  });

  test("Tests if week 1 option of dropdown menu is rendered", () => {
    render(<App />);
    
    const linkElement = screen.getByText("Week 1");

    expect(linkElement).toBeInTheDocument();
  });

  test("Tests if Day button is being rendered by mapping through dayData array", () => {
    render(<App />);
    
    const linkElement = screen.getByText("Day");

    expect(linkElement).toBeInTheDocument();
  });
})



