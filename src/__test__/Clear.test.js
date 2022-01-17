import React from "react";
import App from "../App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Clear button works correctly", () => {
  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnOne = getByTestId('1-button');
  const clearBtn = getByTestId('AC-button');

  fireEvent.click(btnOne);
  fireEvent.click(clearBtn);

  expect(display.textContent).toBe("0");
})