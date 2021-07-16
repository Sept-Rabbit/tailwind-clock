import React, { useState, useEffect, useRef } from "react";
import StopWatchHeader from "../components/TimerHeader";
import AddStopWatch from "../components/AddStopWatch";

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState({
    minute: "00",
    second: "00",
    misecond: "00",
  });
  const [counter, setCounter] = useState(0);
  const [laps, setLaps] = useState([]);
  const [dangerbtn, setDangerbtn] = useState("");
  const [lapbtn, setLapbtn] = useState("false");

  const countTime = () => {
    const misecondCounter = counter % 60;
    const secondCounter = Math.floor(counter / 60);
    const minuteCounter = Math.floor(counter / 60 / 100);

    const computedMiSecond =
      String(misecondCounter).length === 1
        ? `0${misecondCounter}`
        : misecondCounter;
    const computedSecond =
      String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
    const computedMinute =
      String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

    setTimer({
      minute: computedMinute,
      second: computedSecond,
      misecond: computedMiSecond,
    });

    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    let intervalId;

    if (isActive) {
      setDangerbtn("bg-red-500");
      setLapbtn("bg-indigo-500");
      intervalId = setInterval(() => {
        countTime();
      }, 10);
    }
    return () => {
      clearInterval(intervalId);
      setDangerbtn("");
      setLapbtn("bg-gray-900");
    };
  }, [isActive, counter]);

  const addLap = () => {
    if (isActive) {
      let newLap = {};
      newLap.minute = timer.minute;
      newLap.second = timer.second;
      newLap.misecond = timer.misecond;
      setLaps([...laps, newLap]);
      console.log(laps);
    } else {
      setTimer({
        minute: "00",
        second: "00",
        misecond: "00",
      });
      setCounter(0);
      setLaps([]);
    }
  };

  return (
    <div className="relative">
      <header>
        <StopWatchHeader />
      </header>
      <div className="h-98">
        <div className="items-center my-3 mx-auto mx-4 px-4 py-2 flex flex-col justify-center">
          <div className="my-3 w-5/6 h-24 p-2 rounded-lg border-2 border-solid border-gray-500">
            <div className="text-2xl grid grid-cols-5 w-48 mx-auto text-center">
              <div>{timer.minute}</div> : <div>{timer.second}</div> :
              <div>{timer.misecond}</div>
            </div>

            <div className="flex flex-row justify-around">
              <button
                onClick={() => setIsActive(!isActive)}
                className={`${dangerbtn} mt-3 bg-indigo-500 w-20 rounded-lg p-1 m-1 text-center text-white text-sm`}
              >
                {isActive ? "Pause" : "Start"}
              </button>
              <button
                onClick={addLap}
                className={`${lapbtn} mt-3 border-2 border-indigo-500 w-20 rounded-lg p-1 m-1 text-center text-white text-sm`}
              >
                {isActive ? "Lap" : "Reset"}
              </button>
            </div>
          </div>

          <div className="overflow-y-auto h-56 items-center my-3 mx-auto mx-4 px-4 py-2 flex flex-col">
            {laps.map((t, index) => {
              return (
                <AddStopWatch
                  key={index}
                  id={index}
                  m={t.minute}
                  s={t.second}
                  ms={t.misecond}
                  c={t.counter}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
