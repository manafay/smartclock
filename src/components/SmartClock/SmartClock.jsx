import React from "react";
import { useState, useEffect } from "react";
import SmartAnalogClock from "../SmartAnalogClock/SmartAnalogClock";
import SmartDigitalClock from "../SmartDigitalClock/SmartDigitalClock";

const SmartClock = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(90);
    const [second, setSecond] = useState(180);
    const [time, setTime] = useState(`000000`);
    const inc = 1000;
  
    useEffect(() => {
      const interval = setInterval(() => {
        clockTick();
      }, inc);
      return () => clearInterval(interval);
    });
  
    const twoDigitFormat = (num) => ("0" + num).slice(-2);
  
    const clockTick = () => {
      const date = new Date();
  
      const hours = ((date.getHours() + 11) % 12) + 1;
      const digitalHours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
  
      setTime(
        `${twoDigitFormat(digitalHours)}${twoDigitFormat(
          minutes
        )}${twoDigitFormat(seconds)}`
      );
  
      setHour(hours * 30);
      setMinute(minutes * 6);
      setSecond(seconds * 6);
    };
  
    return (
      <div className="SmartClockApp" data-testid="smart-clock-app">
        <SmartAnalogClock hour={hour} minute={minute} second={second} />
        <SmartDigitalClock time={time} />
      </div>
    );
};

export default SmartClock;
