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