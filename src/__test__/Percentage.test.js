import React from "react";
import App from "../App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('Percentage is calculated correctly on firstOperand', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnNine = getByTestId('9-button');
  const percentageBtn = getByTestId('%-button');

  fireEvent.click(btnNine);
  fireEvent.click(percentageBtn);

  expect(display.textContent).toBe("0.09");
});

test('Percentage is calculated correctly with secondOperand', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnNine = getByTestId('9-button');
  const btnFive = getByTestId('5-button');
  const btnZero = getByTestId('0-button');
  const plusBtn = getByTestId('+-button');
  const percentageBtn = getByTestId('%-button');

  fireEvent.click(btnNine);
  fireEvent.click(plusBtn);
  fireEvent.click(btnFive);
  fireEvent.click(btnZero);
  fireEvent.click(percentageBtn);

  expect(display.textContent).toBe("13.5");
});