import React, { useEffect, useState } from "react";
import TimeList from "./TimeList";
import TimerMenu from "./TimerMenu";

const Timer = () => {
  const [index, setIndex] = useState(0);
  const [minutes, setMinutes] = useState(TimeList[index].workMinutes);
  const [seconds, setSeconds] = useState(TimeList[index].workSeconds);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    setMinutes(TimeList[index].workMinutes);
    setSeconds(TimeList[index].workSeconds);
    setDisplayMessage(false);
  }, [index]);

  useEffect(() => {
    let interval;
    if (startTimer) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            let newMinutes = displayMessage
              ? TimeList[index].workMinutes
              : TimeList[index].breakMinutes;
            let newSeconds = displayMessage
              ? TimeList[index].workSeconds
              : TimeList[index].breakSeconds;
            setMinutes(newMinutes);
            setSeconds(newSeconds);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTimer, displayMessage, minutes, seconds, index]);

  const handleIndexChange = (newIndex) => {
    if (newIndex !== index) {
      setIndex(newIndex);
      setStartTimer(startTimer ? !startTimer : startTimer);
    }
  };
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="items-center justify-center flex min-h-screen">
      <div className="border border-solid border-cardborder shadow-cardshadow bg-cardcolor rounded-2xl backdrop-blur-cardblur w-5/6 md:w-2/6 bg-opacity-30 grid justify-center ">
        <TimerMenu index={index} setIndex={handleIndexChange} />
        <div className="flex justify-center">
          <div className="">{displayMessage}</div>
          <div className="text-8xl font-semibold py-10 mx-auto text-timercolor text-opacity-90">
            {timerMinutes}:{timerSeconds}
          </div>
        </div>
        <button
          className="bg-slate-500 rounded-3xl w-40 py-2 mx-auto my-20"
          onClick={() => setStartTimer((prev) => !prev)}
        >
          {startTimer ? "Stop" : "Start"} Timer
        </button>
      </div>
    </div>
  );
};

export default Timer;
