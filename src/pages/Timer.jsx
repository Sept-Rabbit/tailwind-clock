import { TemporaryDisplayObject } from "pixi.js";
import React, { useState, useEffect } from "react";
import TimerHeader from "../components/TimerHeader";

function Timer() {
  const [timer, setTimer] = useState({
    hour: "00",
    minute: "02",
    second: "00",
    counter: 120,
    isActive: false,
  });
  const [newTimer, setNewTimer] = useState({
    hour: "00",
    minute: "00",
    second: "00",
    counter: 0,
  });
  const [minInput, setMinInput] = useState(0);
  const [secInput, setSecInput] = useState(0);
  const [timers, setTimers] = useState([]);
  const [sideBar, setSideBar] = useState(true);
  const [toggle, setToggle] = useState("-translate-x-full");

  useEffect(() => {
    setTimers([...timers, timer]);
  }, []);

  console.log(timers);

  useEffect(() => {
    let intervalId;

    if (timer.isActive) {
      intervalId = setInterval(() => {
        const secondCounter = timer.counter % 60;
        const minuteCounter = Math.floor(timer.counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setTimer({
          hour: "00",
          minute: computedMinute,
          second: computedSecond,
          counter: timer.counter--,
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timer.isActive, timer.counter]);

  const stopTimer = () => {
    setIsActive(false);
    setCounter(120);
    setTimer({ hour: "00", minute: "02", second: "00" });
  };

  const onMinChange = (e) => {
    e.preventDefault();
    setMinInput(e.target.value);
  };

  const onSecChange = (e) => {
    e.preventDefault();
    setSecInput(e.target.value);
  };

  const handleSideBar = () => {
    setSideBar(!sideBar);
    if (sideBar) {
      setToggle("translate-x-0");
    } else {
      setToggle("-translate-x-full");
      setMinInput(0);
      setSecInput(0);
    }
  };

  const AddTimer = (minInput, secInput) => {
    if (minInput !== 0 || secInput !== 0) {
      const zeroPad = (num, places) => {
        const numZeroes = places - num.toString().length + 1;
        if (numZeroes > 0) {
          return Array(+numZeroes).join("0") + num;
        }
        return num;
      };

      let tempMinInput = minInput;
      let tempSecInput = secInput;

      tempMinInput = zeroPad(minInput, 2);
      tempSecInput = zeroPad(secInput, 2);

      newTimer.hour = "00";
      newTimer.minute = tempMinInput;
      newTimer.second = tempSecInput;
      (newTimer.counter = minInput * 60 + secInput),
        (newTimer.isActive = false),
        setTimers([...timers, newTimer]);
    }
  };
  console.log(timers);

  return (
    <div className="relative">
      <header>
        <TimerHeader />
      </header>
      <div className="h-98">
        <div className="items-center my-3 mx-auto mx-4 px-4 py-2 flex flex-col justify-center">
          {timers.map((t, index) => {
            return (
              <div
                key={index}
                className="my-3 w-5/6 h-24 p-2 rounded-lg border-2 border-solid border-gray-500"
              >
                <p className="text-2xl text-center">
                  {t.hour} : {t.minute} : {t.second}
                </p>{" "}
                <div className="flex flex-row justify-around">
                  <button
                    onClick={() => setIsActive(!t.isActive)}
                    className="mt-3 bg-indigo-500 w-20 rounded-lg p-1 m-1 text-center text-white text-sm"
                  >
                    {t.isActive ? "Pause" : "Start"}
                  </button>
                  <button
                    onClick={stopTimer}
                    className="mt-3 bg-indigo-500 w-20 rounded-lg p-1 m-1 text-center text-white text-sm"
                  >
                    Reset
                  </button>
                </div>
              </div>
            );
          })}
          <div
            className={`px-4 absolute left-0 bottom-16 z-50 ${toggle} transform transition duration-200 ease-in-out`}
          >
            <div className="left-10 h-40 w-52 p-4 rounded-lg flex flex-col bg-gray-700">
              <label className="text-xs my-1 ">Minutes:</label>
              <input
                className="px-2 text-xs text-gray-800 rounded-md"
                type="number"
                onChange={onMinChange}
                value={minInput}
                min={0}
              ></input>
              <label className="text-xs my-1">Seconds:</label>
              <input
                className="px-2 text-gray-800 text-xs rounded-md"
                type="number"
                onChange={onSecChange}
                value={secInput}
                min={0}
              ></input>
              <button
                onClick={() => {
                  AddTimer(minInput, secInput);
                  handleSideBar();
                }}
                className="my-2 w-16 h-7 items-center justify-center flex text-center mx-auto font-bold uppercase border-white border-2 rounded-lg p-2 text-xs text-white"
                type="text"
              >
                Add
              </button>
            </div>
          </div>
          <div className="absolute right-5 bottom-1">
            <button
              onClick={handleSideBar}
              className="p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                enableBackground="new 0 0 20 20"
                className="w-6 h-6 inline-block"
              >
                <path
                  fill="#FFFFFF"
                  d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
