
const operations = {
  "+": (a, b) => {
    let c = a + b;
    if (c - Math.round(c) !== 0) {
      c = c.toFixed(2);
    }
    return c;
  },
  "-": (a, b) => {
    let c = a - b;
    if ( c - Math.round(c)) {
      c = c.toFixed(2);
    }
    return c;
  },
  "×": (a, b) => {
    let c = a * b;
    if ( c - Math.round(c)) {
      c = c.toFixed(2);
    }
    return c;
  },
  "÷": (a, b) => {

    if (b === 0) {
      return "∞"
    }
    let c = a / b;
    if ( c - Math.round(c)) {
      c = c.toFixed(2);
    }
    return c;
  },
  
}
export default function evaluate({ secondOperand, firstOperand, operation }) {

  const first = parseFloat(firstOperand);
  const second = parseFloat(secondOperand);

  let result = operations[operation](first, second);
  if (result === "∞") {
    return "∞"
  }
  result = parseFloat(result);
  return result.toString();
}