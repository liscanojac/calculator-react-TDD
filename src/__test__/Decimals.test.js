import React from "react";
import App from "../App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('Decimal button works correctly', () => {
  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const decimalBtn = getByTestId('.-button');
  const btnTwo = getByTestId('2-button');

  fireEvent.click(btnTwo);
  fireEvent.click(decimalBtn);
  fireEvent.click(btnTwo);

  expect(display.textContent).toBe("2.2");
});

test('Decimal dot only can be typed once for firstOperand', () => {
  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const decimalBtn = getByTestId('.-button');
  const btnTwo = getByTestId('2-button');

  fireEvent.click(decimalBtn);
  fireEvent.click(decimalBtn);
  fireEvent.click(btnTwo);

  expect(display.textContent).toBe("0.2");
});

test('Only two decimals are allowed for firstOperand', () => {
  const { getByTestId } = render(<App />);
  const memoryDisplay = getByTestId("memory-display");
  const decimalBtn = getByTestId('.-button');
  const btnTwo = getByTestId('2-button');

  fireEvent.click(btnTwo);
  fireEvent.click(decimalBtn);
  fireEvent.click(btnTwo);
  fireEvent.click(btnTwo);
  fireEvent.click(btnTwo);

  expect(memoryDisplay.textContent).toBe("2.22");
});

test('Decimal works correctly secondOperand', () => {
  const { getByTestId } = render(<App />);
  const memoryDisplay = getByTestId("memory-display");
  const decimalBtn = getByTestId('.-button');
  const btnTwo = getByTestId('2-button');
  const btnOne = getByTestId('1-button');
  const plusBtn = getByTestId('+-button');

  fireEvent.click(btnOne);
  fireEvent.click(plusBtn);
  fireEvent.click(btnOne);
  fireEvent.click(decimalBtn);
  fireEvent.click(btnTwo);

  expect(memoryDisplay.textContent).toBe("1+1.2");
});

test('Decimal dot only can be typed once for secondOperand', () => {
  const { getByTestId } = render(<App />);
  const memoryDisplay = getByTestId("memory-display");
  const decimalBtn = getByTestId('.-button');
  const btnTwo = getByTestId('2-button');
  const btnOne = getByTestId('1-button');
  const plusBtn = getByTestId('+-button');

  fireEvent.click(btnOne);
  fireEvent.click(plusBtn)
  fireEvent.click(decimalBtn);
  fireEvent.click(decimalBtn);
  fireEvent.click(btnTwo);

  expect(memoryDisplay.textContent).toBe("1+0.2");
});

test('Only two decimals are allowed for secondOperand', () => {
  const { getByTestId } = render(<App />);
  const memoryDisplay = getByTestId("memory-display");
  const plusBtn = getByTestId('+-button');
  const decimalBtn = getByTestId('.-button');
  const btnThree = getByTestId('3-button');

  fireEvent.click(btnThree);
  fireEvent.click(plusBtn);
  fireEvent.click(btnThree);
  fireEvent.click(decimalBtn);
  fireEvent.click(btnThree);
  fireEvent.click(btnThree);
  fireEvent.click(btnThree);

  expect(memoryDisplay.textContent).toBe("3+3.33");
});