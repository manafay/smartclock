import React from "react";

const Digit = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <span className="d1"></span>
      <span className="d2"></span>
      <span className="d3"></span>
      <span className="d4"></span>
      <span className="d5"></span>
      <span className="d6"></span>
      <span className="d7"></span>
    </div>
  );
};

export default Digit;
