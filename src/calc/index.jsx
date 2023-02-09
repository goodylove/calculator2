import React, { useState } from "react";
import Button from "./button/index";

import handleCalculation from "./helper";
import "./styles.css";

const Calc = () => {
  const buttonCon = [
    {
      text: "clear",
      isOperator: true,
    },
    {
      text: "Del",
      isOperator: true,
    },
    {
      text: "c",
      isOperator: true,
    },
    {
      text: "/",
      isOperator: true,
    },
    {
      text: "7",
    },
    {
      text: "8",
    },
    {
      text: "9",
    },
    {
      text: "*",
      isOperator: true,
    },
    {
      text: "4",
    },

    {
      text: "5",
    },
    {
      text: "6",
    },
    {
      text: "+",
      isOperator: true,
    },
    {
      text: "3",
    },
    {
      text: "2",
    },
    {
      text: "1",
    },
    {
      text: "-",
      isOperator: true,
    },
    {
      text: "0",
      className: "calc__zero-button",
    },
    {
      text: ".",
      isOperator: true,
    },
    {
      text: "=",
      isOperator: true,
    },
  ];
  const [current, setCurrent] = useState("0");
  const [previous, setPrevious] = useState("0");

  const handleClick = (buttonText, isOperator) => {
    console.log(buttonText, isOperator);

    const calculateResult = (pastOperation) => {
      const firstOperand = pastOperation.slice(0, -1);
      const operators = pastOperation.slice(-1);

      const result = handleCalculation(+firstOperand, +current, operators);
      return result;
    };

    if (isOperator) {
      if (buttonText === "=") {
        const result = calculateResult(previous);
        setCurrent(result);
        setPrevious("0");
        return;
      }

      if (buttonText === "clear") {
        setCurrent("0");
        setPrevious("0");
        return;
      }

      if (buttonText === "c") {
        setCurrent("0");
        return;
      }
      if (buttonText === "Del") {
        if (current.length === 1) {
          setCurrent("0");
          return;
        }
        setCurrent((current) => current.slice(0, -1));
        return;
      }

      setPrevious((prev) => {
        if (current === "0") return prev;

        if (prev !== "0") {
          const result = calculateResult(prev);
          return result + buttonText;
        }

        return current + buttonText;
      });
      setCurrent("0");
      return;
    }
    if (current === "0") {
      setCurrent(buttonText);
      return;
    }
    setCurrent(current + buttonText);
  };

  return (
    <div className="calc">
      <div className="calc_display">
        <div className="calc_display_current">{current}</div>
        <div className="calc_display_previous">
          {previous === "0" ? null : previous}
        </div>
      </div>
      <div className="calc_button">
        {buttonCon.map(({ text, isOperator, className }) => (
          <Button
            key={text}
            isOperator={isOperator}
            className={className}
            onClick={() => handleClick(text, isOperator)}
          >
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default Calc;
