import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import WeekendButton from "./WeekendButton";

describe("Weekend-Button component tests", () => {
  test("Checks for a button with text Weekend to be rendered", () => {
    render(<WeekendButton />);
    
    const linkElement = screen.getByText(/Weekend/i);
  
    expect(linkElement).toBeInTheDocument();
  
  });

  test("Checks if handleClick function is being called after pressing Weekend button", () => {
    const handleClick = jest.fn();
  
    render(<WeekendButton weekendButtonClick={handleClick} />);
    
    const linkElement = screen.getByText(/Weekend/i);

    userEvent.click(linkElement)
  
    expect(handleClick).toBeCalled();
  });

})



