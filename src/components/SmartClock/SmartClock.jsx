import React from "react";
import { useState, useEffect } from "react";
import SmartAnalogClock from "../SmartAnalogClock";
import SmartDigitalClock from "../SmartDigitalClock";
import "./SmartClock.css";

const twoDigitFormat = (num) => ("0" + num).slice(-2);

const getCurrentTime = () => {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12) + 1;
  const digitalHours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${twoDigitFormat(digitalHours)}${twoDigitFormat(
    minutes
  )}${twoDigitFormat(seconds)}`;
  return {
    hours,
    minutes,
    seconds,
    time,
  };
};

const useInterval = (func, intervalTime) => {
  useEffect(() => {
    const interval = setInterval(() => {
      func();
    }, intervalTime);
    return () => clearInterval(interval);
  }, [func, intervalTime]);
};

const SmartClock = () => {
  const { hours, minutes, seconds, time: initialTime } = getCurrentTime();
  const [hour, setHour] = useState(hours * 30);
  const [minute, setMinute] = useState(minutes * 6);
  const [second, setSecond] = useState(seconds * 6);
  const [time, setTime] = useState(initialTime);

  const clockTick = () => {
    const { hours, minutes, seconds, time } = getCurrentTime();
    setTime(time);
    setHour(hours * 30);
    setMinute(minutes * 6);
    setSecond(seconds * 6);
  };

  useInterval(clockTick, 1000);

  return (
    <div className="smart-clock-app" data-testid="smart-clock-app">
      <SmartAnalogClock hour={hour} minute={minute} second={second} />
      <SmartDigitalClock time={time} />
    </div>
  );
};

export default SmartClock;
