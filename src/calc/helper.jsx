import React from "react";

const handleCalculation = (firstOperand, current, operators) => {
  switch (operators) {
    case "+":
      return firstOperand + current;
    case "-":
      return firstOperand - current;
    case "*":
      return firstOperand * current;
    case "/":
      return firstOperand / current;
  }
};
export default handleCalculation;
