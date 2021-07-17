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
        <div className="items-center mx-auto mx-4 px-4 py-2 flex flex-col justify-center">
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

          {/*------ Add Window ------*/}
          <div
            className={`px-4 absolute left-0 bottom-16 z-50 ${toggle} transform transition duration-200 ease-in-out`}
          >
            <div className="left-10 h-32 w-52 p-4 rounded-lg flex flex-col bg-gray-800">
              <label className="text-sm mx-2 my-1">Time:</label>
              <div className="my-1 p-1 text-sm w-40 bg-white rounded-lg mx-auto">
                <div className="flex justify-evenly">
                  <select
                    onChange={onMinChange}
                    name="minute"
                    className="bg-transparent text-gray-900 text-sm appearance-none outline-none"
                  >
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                  </select>
                  <span className="text-sm mr-3 text-gray-900"> : </span>
                  <select
                    onChange={onSecChange}
                    name="second"
                    className="bg-transparent text-sm text-gray-900 appearance-none outline-none mr-4"
                  >
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>
                </div>
              </div>

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

{
  /* <label className="text-xs my-1 ">Minutes:</label>
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
              ></input> */
}
