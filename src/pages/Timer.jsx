import React, { useState, useEffect, useRef } from "react";
import AddTimer from "../components/AddTimer";

function Timer() {
  const [sideBar, setSideBar] = useState(true);
  const [toggle, setToggle] = useState("hidden");
  const [timer, setTimer] = useState({
    hour: "00",
    minute: "02",
    second: "00",
    counter: 120,
  });

  const [timers, setTimers] = useState([timer]);
  const [minInput, setMinInput] = useState({ value: "02" });
  const [secInput, setSecInput] = useState({ value: "00" });
  const [showDelete, setShowDelete] = useState(false);

  const onMinChange = (e) => {
    e.preventDefault();
    setMinInput({ value: e.target.value });
  };

  const onSecChange = (e) => {
    e.preventDefault();
    setSecInput({ value: e.target.value });
  };

  const AddNewTimer = (minInput, secInput) => {
    let newTimer = {};

    newTimer.minute = minInput;
    newTimer.second = secInput;
    newTimer.counter = minInput * 60 + secInput;
    console.log(+minInput, +secInput, +newTimer);
    setTimers([...timers, newTimer]);
  };

  const handleSideBar = () => {
    setSideBar(!sideBar);
    if (sideBar) {
      setToggle("translate-x-0");
    } else {
      setToggle("hidden");
      setMinInput({ value: "02" });
      setSecInput({ value: "00" });
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
    <div className="relative min-h-full overflow-y-auto">
      <div className="flex flex-col items-center justify-center h-full px-4 py-2 mx-auto">
        {timers.map((t, index) => {
          return (
            <AddTimer
              key={index}
              id={index}
              c={t.counter}
              showDelete={showDelete}
              handleDelete={handleDelete}
              displayDelete={displayDelete}
            />
          );
        })}

        <div
          className={`px-4 absolute left-0 top-32 z-50 ${toggle} transform transition duration-200 ease-in-out`}
        >
          <div className="flex flex-col h-32 p-4 bg-gray-800 rounded-lg left-10 w-52">
            <label className="mx-2 my-1 text-sm">Time:</label>
            <div className="w-40 p-1 mx-auto my-1 text-sm bg-white rounded-lg">
              <div className="flex justify-evenly">
                <select
                  onChange={onMinChange}
                  value={minInput.value}
                  name="minute"
                  className="text-sm text-gray-900 bg-transparent outline-none appearance-none"
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
                <span className="mr-3 text-sm text-gray-900"> : </span>
                <select
                  onChange={onSecChange}
                  name="second"
                  value={secInput.value}
                  className="mr-4 text-sm text-gray-900 bg-transparent outline-none appearance-none"
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
                AddNewTimer(+minInput.value, +secInput.value);
                handleSideBar();
              }}
              className="flex items-center justify-center w-16 p-2 mx-auto my-2 text-xs font-bold text-center text-white uppercase border-2 border-white rounded-lg h-7"
              type="text"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-5 bottom-5">
        <button
          onClick={handleSideBar}
          className="w-12 h-12 p-0 transition duration-200 ease-in bg-red-600 rounded-full shadow hover:bg-blue-700 active:shadow-lg mouse focus:outline-none"
        >
          <svg
            viewBox="0 0 20 20"
            enableBackground="new 0 0 20 20"
            className="inline-block w-6 h-6"
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
  );
}

export default Timer;
