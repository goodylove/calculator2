import React from "react";
import "./style.css";

const Button = ({ children, className, isOperator, onClick }) => {
  return (
    <button
      className={`button ${isOperator ? "button_operator" : ""}${
        className || ""
      }`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};
export default Button;
