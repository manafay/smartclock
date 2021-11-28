import React from "react";

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
