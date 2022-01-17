import React from "react";
import App from "../App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('Subtraction is done correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnThree = getByTestId('3-button');
  const btnFour = getByTestId('4-button');
  const minusBtn = getByTestId('−-button');

  fireEvent.click(btnThree);
  fireEvent.click(minusBtn);
  fireEvent.click(btnFour);

  expect(display.textContent).toBe("-1");
});

test('Chained subtraction is done correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnSeven = getByTestId('7-button');
  const btnTwo = getByTestId('2-button');
  const btnEight = getByTestId('8-button');
  const minusBtn = getByTestId('−-button');

  fireEvent.click(btnSeven);
  fireEvent.click(minusBtn);
  fireEvent.click(btnTwo);
  fireEvent.click(minusBtn);
  fireEvent.click(btnEight);

  expect(display.textContent).toBe("-3");
})