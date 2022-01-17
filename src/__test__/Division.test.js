import React from "react";
import App from "../App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('Division is done correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnOne = getByTestId('1-button');
  const btnThree = getByTestId('3-button');
  const divideBtn = getByTestId('÷-button');

  fireEvent.click(btnOne);
  fireEvent.click(divideBtn);
  fireEvent.click(btnThree);

  expect(display.textContent).toBe("0.33");
});

test('Chained division is done correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnSeven = getByTestId('7-button');
  const btnTwo = getByTestId('2-button');
  const btnFour = getByTestId('4-button');
  const divideBtn = getByTestId('÷-button');

  fireEvent.click(btnSeven);
  fireEvent.click(divideBtn);
  fireEvent.click(btnTwo);
  fireEvent.click(divideBtn);
  fireEvent.click(btnFour);

  expect(display.textContent).toBe("0.88");
})

test('Division by zero gets infinite', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnOne = getByTestId('1-button');
  const btnZero = getByTestId('0-button');
  const divideBtn = getByTestId('÷-button');

  fireEvent.click(btnOne);
  fireEvent.click(divideBtn);
  fireEvent.click(btnZero);

  expect(display.textContent).toBe("∞");
});

test('Clear canvas after infinite pressing operation', () => {

  const { getByTestId } = render(<App />);
  const memoryDisplay = getByTestId("memory-display");
  const btnOne = getByTestId('1-button');
  const btnZero = getByTestId('0-button');
  const divideBtn = getByTestId('÷-button');
  const plusBtn = getByTestId('+-button');

  fireEvent.click(btnOne);
  fireEvent.click(divideBtn);
  fireEvent.click(btnZero);
  fireEvent.click(plusBtn);

  expect(memoryDisplay.textContent).toBe("0+");
});

test('Clear canvas after infinite pressing digit', () => {

  const { getByTestId } = render(<App />);
  const memoryDisplay = getByTestId("memory-display");
  const btnOne = getByTestId('1-button');
  const btnZero = getByTestId('0-button');
  const divideBtn = getByTestId('÷-button');

  fireEvent.click(btnOne);
  fireEvent.click(divideBtn);
  fireEvent.click(btnZero);
  fireEvent.click(btnOne);

  expect(memoryDisplay.textContent).toBe("1");
});
