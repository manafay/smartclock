import React from "react";
import "./ClockHand.css";

const ClockHand = (props) => {
  const { className, degree } = props;
  return (
    <span
      className={className}
      style={{ transform: `rotate(${degree}deg)` }}
    ></span>
  );
};

export default ClockHand;
