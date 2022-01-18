import React from "react";
import App from "../App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('Negative numbers can be typed', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnOne = getByTestId('1-button');
  const minusBtn = getByTestId('−-button');

  fireEvent.click(minusBtn);
  fireEvent.click(btnOne);

  expect(display.textContent).toBe("-1");
});

test('± button changes a positive firstOperand to a negative one', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnFive = getByTestId('5-button');
  const negativeBtn = getByTestId('±-button');

  fireEvent.click(btnFive);
  fireEvent.click(negativeBtn);

  expect(display.textContent).toBe("-5");
});

test('± button changes a positive secondOperand to a negative one', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnFive = getByTestId('5-button');
  const btnOne = getByTestId('1-button');
  const negativeBtn = getByTestId('±-button');
  const timesBtn = getByTestId('×-button');

  fireEvent.click(btnFive);
  fireEvent.click(timesBtn);
  fireEvent.click(btnOne);
  fireEvent.click(negativeBtn);

  expect(display.textContent).toBe("-5");
});

test('± button changes a sum for a subtraction', () => {

  const { getByTestId } = render(<App />);
  const memoryDisplay = getByTestId("memory-display");
  const btnFive = getByTestId('5-button');
  const btnOne = getByTestId('1-button');
  const negativeBtn = getByTestId('±-button');
  const plusBtn = getByTestId('+-button');

  fireEvent.click(btnFive);
  fireEvent.click(plusBtn);
  fireEvent.click(btnOne);
  fireEvent.click(negativeBtn);

  expect(memoryDisplay.textContent).toBe("5-1");
});

test('± button changes a subtraction for a sum', () => {

  const { getByTestId } = render(<App />);
  const memoryDisplay = getByTestId("memory-display");
  const btnFive = getByTestId('5-button');
  const btnOne = getByTestId('1-button');
  const negativeBtn = getByTestId('±-button');
  const minusBtn = getByTestId('−-button');

  fireEvent.click(btnFive);
  fireEvent.click(minusBtn);
  fireEvent.click(btnOne);
  fireEvent.click(negativeBtn);

  expect(memoryDisplay.textContent).toBe("5+1");
});