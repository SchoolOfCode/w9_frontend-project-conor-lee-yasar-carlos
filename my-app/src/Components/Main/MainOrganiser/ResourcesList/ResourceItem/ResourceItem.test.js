import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResourceItem from "./ResourceItem";

describe("ResourceItem tests", () => {
  test("Check if <a> tag is being rendered", () => {
    render(<ResourceItem />);
    
    const linkElement = screen.getByLabelText(/resource item/i)
  
    expect(linkElement).toBeInTheDocument();
  });
})



