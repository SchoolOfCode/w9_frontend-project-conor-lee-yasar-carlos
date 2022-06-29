import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ScheduleItem from "./ScheduleItem";

describe("ScheduleItem tests", () => {
  test("Gets button based on aria-label value and checks if rendered", () => {
    render(<ScheduleItem />);
    
    const linkElement = screen.getByLabelText(/chevron-click/i);
  
    expect(linkElement).toBeInTheDocument();
  
  });

  test("Checks if submit button is rendered and if the onClick mock fn is called", () => {
    const handleCommentClick = jest.fn();

    render(<ScheduleItem updateTaskComment={handleCommentClick} />);
    
    const linkElement = screen.getByText(/Submit/i);

    userEvent.click(linkElement)

    expect(handleCommentClick).toHaveBeenCalled();
  });

})



