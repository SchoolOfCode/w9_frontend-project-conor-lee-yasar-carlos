import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";

describe("NavBar component tests", () => {
  test("Checks if Log in button is rendered", () => {
    const text = "Log In"
    render(<NavBar logIn={text}/>);

    const element = screen.getByText(/Log In/i)

    expect(element).toBeInTheDocument();
  });

  test("Checks if log-in button is rendered and mock fn is called onClick", () => {
    const text = "Log In"
    const handleClick = jest.fn();
    render(<NavBar logIn={text} hideImage={handleClick}/>);

    const element = screen.getByText(/Log In/i)

    userEvent.click(element)

    expect(handleClick).toHaveBeenCalled();
  });

  test("Checks if Log in button is rendered and mock fn is called twice onClick", () => {
    let logIn = "Log In"

    const handleClick =  jest.fn()

    render(<NavBar hideImage={handleClick} logIn={logIn} />);

    const element = screen.getByText(/Log In/i)

    userEvent.click(element)

    userEvent.click(element)

    expect(element).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(2)
  })

  test("Checks if main div and li child are being rendered", () => {

    render(<NavBar />);

    const element = screen.getByLabelText(/main/i)

    const home = screen.getByText(/home/i)

    expect(element).toBeInTheDocument();
    expect(home).toBeInTheDocument();
  })
})
