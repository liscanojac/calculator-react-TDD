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

  fireEvent.click(btnOne);
  fireEvent.click(plusBtn);
  fireEvent.click(btnTwo);

  expect(display.textContent).toBe("3");
});

test('Chained sum is done correctly', () => {

  const { getByTestId } = render(<App />);
  const display = getByTestId("display");
  const btnFive = getByTestId('5-button');
  const btnThree = getByTestId('3-button');
  const btnNine = getByTestId('9-button');
  const plusBtn = getByTestId('+-button');

  fireEvent.click(btnFive);
  fireEvent.click(plusBtn);
  fireEvent.click(btnThree);
  fireEvent.click(plusBtn);
  fireEvent.click(btnNine);

  expect(display.textContent).toBe("17");
})