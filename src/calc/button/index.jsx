import React from "react";
import "./style.css";

const Button = ({ children, className, isOperator }) => {
  return (
    <button
      className={`button ${isOperator ? "button_operator" : ""}${
        className || ""
      }`}
    >
      <span>{children}</span>
    </button>
  );
};
export default Button;
