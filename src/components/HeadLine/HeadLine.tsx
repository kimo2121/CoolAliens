import React from "react";
import "./HeadLine.css";

interface IType {
  headline?: string;
}

const HeadLine: React.FC<IType> = ({ headline }) => {
  return (
    <div className="head-line">
      <h1>{headline}</h1>
    </div>
  );
};

export default HeadLine;
