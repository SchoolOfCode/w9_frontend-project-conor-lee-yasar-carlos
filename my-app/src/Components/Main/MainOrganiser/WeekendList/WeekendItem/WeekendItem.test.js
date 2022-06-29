import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeekendItem from "./WeekendItem";

describe("Main component tests", () => {
  test("Checks if item content is being rendered and first letter capitalized", () => {
    const listData = "test"
    render(<WeekendItem listData={listData}/>);

    const element = screen.getByText("Test")

    expect(element).toBeInTheDocument();
  });

  test("Checks if the accordion and chevron button are being rendered", () => {
    const listData = "test"
    render(<WeekendItem listData={listData}/>);

    const element = screen.getByLabelText(/accordion-chevron/i)

    expect(element).toBeInTheDocument();
  });
})