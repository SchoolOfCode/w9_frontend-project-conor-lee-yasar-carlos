import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import WeekendButton from "./ScheduleItem";

describe("Weekend-Button component tests", () => {
  test("Gets button based on aria-label value and checks if rendered", () => {
    render(<WeekendButton />);
    
    const linkElement = screen.getByLabelText(/chevron-click/i);
  
    expect(linkElement).toBeInTheDocument();
  
  });

  test("Checks if chevron button is rendered and gets element based on aria-label then checks if classname changes after onClick", () => {
    render(<WeekendButton  />);
    
    const linkElement = screen.getByLabelText(/chevron-click/i);

    userEvent.click(linkElement)
  
    const getByClass = screen.getByLabelText(/class/i);

    expect(getByClass).toHaveClass("true");
  });

})



