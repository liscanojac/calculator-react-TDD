import React from "react";
import App from "../App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('Multiplication is done correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnTwo = getByTestId('2-button');
  const btnFive = getByTestId('5-button');
  const timesBtn = getByTestId('×-button');

  fireEvent.click(btnTwo);
  fireEvent.click(timesBtn);
  fireEvent.click(btnFive);

  expect(display.textContent).toBe("10");
});

test('Chained multiplication is done correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnThree = getByTestId('3-button');
  const btnTwo = getByTestId('2-button');
  const btnEight = getByTestId('8-button');
  const timesBtn = getByTestId('×-button');

  fireEvent.click(btnThree);
  fireEvent.click(timesBtn);
  fireEvent.click(btnTwo);
  fireEvent.click(timesBtn);
  fireEvent.click(btnEight);

  expect(display.textContent).toBe("48");
})