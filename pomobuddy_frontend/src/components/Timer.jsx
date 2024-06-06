import React, { useEffect, useState } from "react";
import TimeList from "./TimeList";
import TimerMenu from "./TimerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Timer = () => {
  const [index, setIndex] = useState(0);
  const [minutes, setMinutes] = useState(TimeList[index].workMinutes);
  const [seconds, setSeconds] = useState(TimeList[index].workSeconds);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState("");

  const motivationalMessages = [
    "May the force be with you",
    "Every step is progress!",
    "Just do it",
  ];

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
            if (!displayMessage) {
              const randomMessage =
                motivationalMessages[
                  Math.floor(Math.random() * motivationalMessages.length)
                ];
              setMotivationMessage(randomMessage);
            }
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
  }, [
    startTimer,
    displayMessage,
    minutes,
    seconds,
    index,
    motivationalMessages,
  ]);

  const handleIndexChange = (newIndex) => {
    if (newIndex !== index) {
      setIndex(newIndex);
      setStartTimer(false);
    }
  };

  const handleIncreaseTimer = () => {
    if (seconds === 59) {
      setMinutes(minutes + 1);
      setSeconds(0);
    } else {
      setSeconds(seconds + 1);
    }
  };
  const handleDecreaseTimer = () => {
    if (minutes > 0 || seconds > 0) {
      if (seconds === 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else {
        setSeconds(seconds - 1);
      }
    }
  };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="items-center justify-center flex h-full">
      <div className="border border-solid border-cardborder shadow-cardshadow bg-cardcolor rounded-2xl backdrop-blur-cardblur w-5/6 md:w-1/4 bg-opacity-30 grid justify-center">
        <div className="mb-20 pt-5">
          <TimerMenu index={index} setIndex={handleIndexChange} />
        </div>
        <div className="flex justify-center flex-col items-center pt-0 mb-5">
          {displayMessage && (
            <div className="text-8l font-semibold py-10 mx-auto text-timercolor text-opacity-90">
              {motivationMessage}
            </div>
          )}
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMinus}
              className="h-6 w-6 text-white cursor-pointer"
              onClick={handleDecreaseTimer}
            />
            <div className="text-8xl font-normal mx-auto text-timercolor text-opacity-90 px-1 md:px-3">
              {timerMinutes}:{timerSeconds}
            </div>
            <FontAwesomeIcon
              icon={faPlus}
              className="h-6 w-6 text-white cursor-pointer"
              onClick={handleIncreaseTimer}
            />
          </div>
        </div>
        <div className="flex justify-center pb-48">
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-lg rounded-2xl w-3/4 py-3"
            onClick={() => setStartTimer((prev) => !prev)}
          >
            <div className="text-lg font-medium">
              {startTimer ? "Stop" : "Start"} Timer
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
