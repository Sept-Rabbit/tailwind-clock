import React, { useState, useEffect } from "react";
import StopWatchHeader from "../components/StopWatchHeader";

function StopWatch() {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [hour, setHour] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const stopTimer = () => {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  };

  return (
    <div className="relative">
      <header>
        <StopWatchHeader />
      </header>
      <div className="h-98">
        <div className="items-center my-3 mx-auto mx-4 px-4 py-2 flex flex-col justify-center">
          <div className="my-3 w-5/6 h-24 p-2 rounded-lg border-2 border-solid border-gray-500">
            <p className="text-2xl text-center">
              {hour} : {minute} : {second}
            </p>{" "}
            <div className="flex flex-row justify-around">
              <button
                onClick={() => setIsActive(!isActive)}
                className="mt-3 bg-indigo-500 w-20 rounded-lg p-1 m-1 text-center text-white text-sm"
              >
                {isActive ? "Pause" : "Start"}
              </button>
              <button
                onClick={stopTimer}
                className="mt-3 bg-indigo-500 w-20 rounded-lg p-1 m-1 text-center text-white text-sm"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
