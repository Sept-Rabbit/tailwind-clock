import React, { useState, useEffect, useRef } from "react";
import TimerHeader from "../components/TimerHeader";
import AddTimer from "../components/AddTimer";

function Timer() {
  const [sideBar, setSideBar] = useState(true);
  const [toggle, setToggle] = useState("-translate-x-full");
  const [timer, setTimer] = useState({
    hour: "00",
    minute: "02",
    second: "00",
    counter: 120,
  });

  const [timers, setTimers] = useState([timer]);
  const [minInput, setMinInput] = useState(0);
  const [secInput, setSecInput] = useState(0);
  const [showDelete, setShowDelete] = useState(false);

  const onMinChange = (e) => {
    e.preventDefault();
    setMinInput(e.target.value);
  };

  const onSecChange = (e) => {
    e.preventDefault();
    setSecInput(e.target.value);
  };

  const AddNewTimer = (minInput, secInput) => {
    let newTimer = {};
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
        setTimers([...timers, newTimer]);
    }
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

  const displayDelete = () => {
    setShowDelete(!showDelete);
  };

  const handleDelete = (id) => {
    const filteredItems = timers
      .slice(0, id)
      .concat(timers.slice(id + 1, timers.length));

    setTimers(filteredItems);
  };

  return (
    <div className="relative">
      <header>
        <TimerHeader displayDelete={displayDelete} />
      </header>
      <div className="h-98">
        <div className="items-center my-3 mx-auto mx-4 px-4 py-2 flex flex-col justify-center">
          {timers.map((t, index) => {
            return (
              <AddTimer
                key={index}
                id={index}
                h={t.hour}
                m={t.minute}
                s={t.second}
                c={t.counter}
                showDelete={showDelete}
                handleDelete={handleDelete}
              />
            );
          })}
          <div
            className={`px-4 absolute left-0 bottom-16 z-50 ${toggle} transform transition duration-200 ease-in-out`}
          >
            <div className="left-10 h-40 w-52 p-4 rounded-lg flex flex-col bg-gray-800">
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
                  AddNewTimer(minInput, secInput);
                  handleSideBar();
                }}
                className="my-2 w-16 h-7 items-center justify-center flex text-center mx-auto font-bold uppercase border-white border-2 rounded-lg p-2 text-xs text-white"
                type="text"
              >
                Add
              </button>
            </div>
          </div>
          <div className="absolute right-5 bottom-2">
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
