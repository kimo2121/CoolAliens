import React from "react";
import { TypographyTypes } from "./types";
import "./Typography.css";
const TypographyComponent: React.FC<TypographyTypes> = ({
  className,
  children,
  onClickFun,
}) => {
  return (
    <p onClick={onClickFun} className={className}>
      {children}
    </p>
  );
};

export default TypographyComponent;
