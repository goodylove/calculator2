import React, { useState } from "react";
import Button from "./button/index";
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

  return (
    <div className="calc">
      <div className="calc_display">
        <div className="calc_display_current">0</div>
        <div className="calc_display_previous">0</div>
      </div>
      <div className="calc_button">
        {buttonCon.map(({ text, isOperator, className }) => (
          <Button key={text} isOperator={isOperator} className={className}>
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default Calc;
