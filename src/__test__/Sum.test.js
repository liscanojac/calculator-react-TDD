import React from "react";
import App from "../App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('Sum is done correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnOne = getByTestId('1-button');
  const btnTwo = getByTestId('2-button');
  const plusBtn = getByTestId('+-button');
  const equalBtn = getByTestId('=-button');

  fireEvent.click(btnOne);
  fireEvent.click(plusBtn);
  fireEvent.click(btnTwo);
  fireEvent.click(equalBtn);

  expect(display.textContent).toBe("3");
});

test('Sum is done correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnSeven = getByTestId('7-button');
  const btnEight = getByTestId('8-button');
  const plusBtn = getByTestId('+-button');
  const equalBtn = getByTestId('=-button');

  fireEvent.click(btnSeven);
  fireEvent.click(plusBtn);
  fireEvent.click(btnEight);
  fireEvent.click(equalBtn);

  expect(display.textContent).toBe("15");
});

test('Chained sum is done correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnFive = getByTestId('5-button');
  const btnThree = getByTestId('3-button');
  const btnNine = getByTestId('9-button');
  const plusBtn = getByTestId('+-button');
  const equalBtn = getByTestId('=-button');

  fireEvent.click(btnFive);
  fireEvent.click(plusBtn);
  fireEvent.click(btnThree);
  fireEvent.click(plusBtn);
  fireEvent.click(btnNine);
  fireEvent.click(plusBtn);

  expect(display.textContent).toBe("17");
})