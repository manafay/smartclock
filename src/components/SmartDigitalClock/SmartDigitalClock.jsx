import React from "react";
import Digit from "../Digit/Digit";
import Separator from "../Separator/Separator";
import './SmartDigitalClock.css';

const digiMap = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const SmartDigitalClock = (props) => {
  const { time } = props;
  return (
    <div className="smart-digital-clock" data-testid="smart-digital-clock">
      <div className="smart-digits">
        <Digit className={digiMap[time[0]]} />
        <Digit className={digiMap[time[1]]} />
        <Separator className="dots-separator" />
        <Digit className={digiMap[time[2]]} />
        <Digit className={digiMap[time[3]]} />
        <Separator className="dots-separator" />
        <Digit className={digiMap[time[4]]} />
        <Digit className={digiMap[time[5]]} />
      </div>
    </div>
  );
};

export default SmartDigitalClock;
