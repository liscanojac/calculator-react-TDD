import React from "react";
import Button from "../Components/Button";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { btnContent } from "./btnContent";

for (let i = 0; i < btnContent.length; i++) {
  
  test(`Button renders with ${btnContent[i]}`, () => {
    const { getByTestId } = render(<Button content={btnContent[i]} />);
    const button = getByTestId(`${btnContent[i]}-button`);
    
    expect(button.textContent).toBe(`${btnContent[i]}`);
  });
}