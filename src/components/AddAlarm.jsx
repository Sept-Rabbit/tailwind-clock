import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

function AddAlarm(props) {
  const { id, alarm, showDelete, handleDelete } = props;
  const [toggle, setToggle] = useState("-translate-x-full");
  const [sideBar, setSideBar] = useState(true);
  const [timeInput, setTimeInput] = useState("00 : 00");
  const [secInput, setSecInput] = useState("AM");
  const [repeatInput, setRepeatInput] = useState("Never");

  const onTimeChange = (e) => {
    e.preventDefault();
    setTimeInput(e.target.value);
  };

  const onSectionChange = (e) => {
    e.preventDefault();
    setSecInput(e.target.value);
  };

  const onRepeatChange = (e) => {
    e.preventDefault();
    setRepeatInput(e.target.value);
  };

  const handleSideBar = () => {
    setSideBar(!sideBar);
    if (sideBar) {
      setToggle("translate-x-0");
    } else {
      setToggle("-translate-x-full");
      setTimeInput("00:00");
      setSecInput("AM");
    }
  };

  const editAlarm = () => {
    alarm.alarmTime = timeInput;
    alarm.alarmSection = secInput;
    alarm.repeat = repeatInput;
  };

  return (
    <div className="items-center rounded-lg my-3 mx-4 px-4 py-2 border-2 border-solid border-gray-500">
      <div
        onClick={handleSideBar}
        className="flex flex-1 flex-row w-full justify-start items-center"
      >
        <p className="text-md w-16">{alarm.alarmTime}</p>{" "}
        <span className="pt-2 w-5 text-xs ml-1 mr-10">
          {alarm.alarmSection}
        </span>
        <p className="text-sm w-12 mr-16">
          {alarm.repeat === "Never" ? null : alarm.repeat}
        </p>
        <ToggleButton />
        {showDelete ? (
          <div className="text-lg w-1/8 ml-5">
            <button onClick={() => handleDelete(id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ) : null}
      </div>

      <div
        className={`px-4 absolute left-0 bottom-16 z-50 ${toggle} transform transition duration-200 ease-in-out`}
      >
        <div className="left-10 h-48 w-52 p-4 rounded-lg flex flex-col bg-gray-800">
          <label className="text-xs my-1 ">Time : (HH:MM)</label>
          <input
            className="px-2 text-xs text-gray-800 rounded-md"
            type="text"
            onChange={onTimeChange}
            value={timeInput}
          ></input>
          <label className="text-xs my-1">AM/PM:</label>
          <select
            className="px-2 text-gray-800 text-xs rounded-md"
            onChange={onSectionChange}
            value={secInput}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          <label className="text-xs my-1">Frequency:</label>
          <select
            className="px-2 text-gray-800 text-xs rounded-md"
            onChange={onRepeatChange}
            value={repeatInput}
          >
            <option value="Never">Never</option>
            <option value="Everyday">Everyday</option>
            <option value="WorkingDay">Working Day</option>
          </select>
          <button
            onClick={() => {
              editAlarm(timeInput, secInput, repeatInput);
              handleSideBar();
            }}
            className="my-2 w-16 h-7 items-center justify-center flex text-center mx-auto font-bold uppercase border-white border-2 rounded-lg p-2 text-xs text-white"
            type="text"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAlarm;
