import React from "react";
import App from "../App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { btnContent } from "./btnContent"

test("Display renders with 0", () => {
  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  
  expect(display.textContent).toBe("0");
});

for (let i = 0; i < btnContent.length; i++) {
  
  test(`Button renders with ${btnContent[i]}`, () => {
    const { getByTestId } = render(<App />);
    let button = getByTestId(`${btnContent[i]}-button`);
    
    expect(button.textContent).toBe(`${btnContent[i]}`);
  });
}

for (let j = 0; j < btnContent.length; j++) {

  test('Button has correct class names', () => {

    const { getByTestId } = render(<App />);
    let button = getByTestId(`${btnContent[j]}-button`);

    if ((j + 1) % 4 === 0) {
      expect(button.classList.contains('operator')).toBe(true);
    }
    if (j < 3) {
      expect(button.classList.contains('function')).toBe(true);
    }
    if (btnContent[j] === "0") {
      expect(button.classList.contains('zero')).toBe(true);
    }

    expect(button.classList.contains('button')).toBe(true);
  })
}

test('Typing numbers work correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnOne = getByTestId('1-button');
  const btnTwo = getByTestId('2-button');

  fireEvent.click(btnOne);
  fireEvent.click(btnTwo);

  expect(display.textContent).toBe("12");
});

test('Typing numbers work correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnFive = getByTestId('5-button');
  const btnSix = getByTestId('6-button');

  fireEvent.click(btnFive);
  fireEvent.click(btnSix);

  expect(display.textContent).toBe("56");
});

test('Zeroes are not added at front of firstOperand', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const zeroBtn = getByTestId('0-button');

  fireEvent.click(zeroBtn);
  fireEvent.click(zeroBtn);

  expect(display.textContent).toBe("0");
});

test('Zeroes are not added at front of secondOperand', () => {

  const { getByTestId } = render(<App />);
  const memoryDisplay = getByTestId("memory-display");
  const btnZero = getByTestId('0-button');
  const btnOne = getByTestId('1-button');
  const plusBtn = getByTestId('+-button');

  fireEvent.click(btnOne);
  fireEvent.click(plusBtn);
  fireEvent.click(btnZero);
  fireEvent.click(btnOne);

  expect(memoryDisplay.textContent).toBe("1+1");
});

test('Commas are added correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnOne = getByTestId('1-button');
  const btnZero = getByTestId('0-button');

  fireEvent.click(btnOne);
  fireEvent.click(btnZero);
  fireEvent.click(btnZero);
  fireEvent.click(btnZero);
  fireEvent.click(btnZero);
  fireEvent.click(btnZero);
  fireEvent.click(btnZero);

  expect(display.textContent).toBe("1,000,000");
});

test('Operations are changed correctly', () => {

  const { getByTestId } = render(<App />);
  const memoryDisplay = getByTestId("memory-display");
  const btnOne = getByTestId('1-button');
  const timesBtn = getByTestId('??-button');
  const plusBtn = getByTestId('+-button');

  fireEvent.click(btnOne);
  fireEvent.click(timesBtn);
  fireEvent.click(plusBtn);

  expect(memoryDisplay.textContent).toBe("1+");
});
