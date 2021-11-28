import React from "react";
import ClockHand from "./ClockHand";
import "./SmartAnalogClock.css";

const SmartAnalogClock = (props) => {
  const { hour, minute, second } = props;
  return (
    <div className="smart-analog-clock" data-testid="smart-analag-clock">
      <div className="inner-circle">
        <ClockHand className="hour-hand" degree={hour} />
        <ClockHand className="minute-hand" degree={minute} />
        <ClockHand className="second-hand" degree={second} />
      </div>
    </div>
  );
};

export default SmartAnalogClock;
