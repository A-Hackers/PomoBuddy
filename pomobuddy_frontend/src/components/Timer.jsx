import React, { useEffect, useState } from "react";
import TimeList from "./TimeList";

const Timer = () => {
  const timeList = TimeList();
  const [index, setIndex] = useState(0);
  const [minutes, setMinutes] = useState(timeList[index].minutes);
  const [seconds, setSeconds] = useState(timeList[index].seconds);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setMinutes(minutes);
          setSeconds(seconds);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [displayMessage, minutes, seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      <div className="bg-gray-700 py-5">
        <div className="flex justify-center ">
          <div>{displayMessage && timeList[index].displayMessage}</div>
          <div className="text-9xl font-bold">
            {timerMinutes}:{timerSeconds}
          </div>
        </div>
        <button className="bg-slate-500 justify-center flex">apples</button>
      </div>
    </div>
  );
};

export default Timer;
