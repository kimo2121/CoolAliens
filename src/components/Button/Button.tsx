import React from "react";
import { ButtonTypes } from "./types";
import "./Button.css";

const ButtonComponent: React.FC<ButtonTypes> = ({
  className,
  label,
  onClickFun,
}) => {
  return (
    <button onClick={onClickFun} className={className}>
      {label}
    </button>
  );
};

export default ButtonComponent;
