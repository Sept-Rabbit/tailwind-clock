import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

function AddAlarm(props) {
  const { id, alarm, showDelete, handleDelete } = props;

  const [toggle, setToggle] = useState("-translate-x-full");
  const [sideBar, setSideBar] = useState(true);
  const [hourInput, setHourInput] = useState(alarm.alarmHour);
  const [minInput, setMinInput] = useState(alarm.alarmMin);
  const [sectionInput, setSectionInput] = useState(alarm.alarmSection);
  const [repeatInput, setRepeatInput] = useState(alarm.repeat);

  const onHourChange = (e) => {
    e.preventDefault();
    setHourInput(e.target.value);
  };

  const onMinChange = (e) => {
    e.preventDefault();
    setMinInput(e.target.value);
  };

  const onSectionChange = (e) => {
    e.preventDefault();
    setSectionInput(e.target.value);
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
      // setHourInput("00");
      //   setMinInput("00");
      //   setSectionInput("AM");
    }
  };

  const editAlarm = () => {
    alarm.alarmHour = hourInput;
    alarm.alarmMin = minInput;
    alarm.alarmSection = sectionInput;
    alarm.repeat = repeatInput;
  };

  return (
    <div className="items-center px-4 py-2 mx-4 my-3 border-2 border-gray-500 border-solid rounded-lg">
      <div className="flex flex-row items-center justify-start w-full">
        <div className="flex items-center" onClick={handleSideBar}>
          <p className="w-16 text-md">
            {alarm.alarmHour} : {alarm.alarmMin}
          </p>{" "}
          <span className="w-5 pt-2 ml-1 mr-10 text-xs">
            {alarm.alarmSection}
          </span>
          <p className="w-12 mr-12 text-sm">
            {alarm.repeat === "Never" ? null : alarm.repeat}
          </p>
        </div>
        <div className="flex items-center">
          <ToggleButton />

          <div className="ml-5 text-lg w-1/8 ">
            <button onClick={() => handleDelete(id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`px-4 absolute left-0 bottom-16 z-50 ${toggle} transform transition duration-200 ease-in-out`}
      >
        <div className="flex flex-col p-4 bg-gray-800 rounded-lg left-10 h-60 w-52">
          <label className="mb-1 text-sm">Time:</label>
          <div className="flex h-10 my-1 bg-white rounded-lg justify-evenly">
            <select
              onChange={onHourChange}
              name="hour"
              className="text-sm text-gray-900 bg-transparent outline-none appearance-none"
              value={hourInput}
            >
              <option value="00">00</option>
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
            </select>
            <span className="mr-3 text-sm text-gray-900"> : </span>
            <select
              onChange={onMinChange}
              name="minute"
              className="mr-4 text-sm text-gray-900 bg-transparent outline-none appearance-none"
              value={minInput}
            >
              <option value="00">00</option>
              <option value="05">05</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
            </select>
          </div>
          <div className="flex flex-col h-10">
            <label className="my-1 text-sm">AM/PM:</label>
            <select
              className="px-2 py-1 my-1 text-xs text-gray-900 rounded-md"
              onChange={onSectionChange}
              value={sectionInput}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <div className="flex flex-col h-10 mt-6 mb-2">
            <label className="text-sm">Frequency:</label>
            <select
              className="px-2 py-1 my-1 text-xs text-gray-900 rounded-md"
              onChange={onRepeatChange}
              value={repeatInput}
            >
              <option value="Never">Never</option>
              <option value="Everyday">Everyday</option>
              <option value="WorkingDay">Working Day</option>
            </select>
          </div>

          <div className="flex justify-between my-2">
            <button
              onClick={() => {
                editAlarm();
                handleSideBar();
              }}
              className="flex items-center justify-center w-16 p-2 mx-auto my-2 text-xs font-bold text-center text-white uppercase border-2 border-white rounded-lg h-7"
              type="text"
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleSideBar();
              }}
              className="flex items-center justify-center w-16 p-2 mx-auto my-2 text-xs font-bold text-center text-white uppercase border-2 border-white rounded-lg h-7"
              type="text"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAlarm;
