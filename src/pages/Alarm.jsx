import React, { useState } from "react";
import AddAlarm from "../components/AddAlarm";
import Header from "../Layout/Header";

function Alarm() {
  const [time, setTime] = useState({
    alarmHour: "08",
    alarmMin: "00",
    alarmSection: "AM",
    repeat: "Everyday",
  });
  const [showDelete, setShowDelete] = useState(false);
  const [alarms, setAlarms] = useState([time]);
  const [sideBar, setSideBar] = useState(true);
  const [toggle, setToggle] = useState("-translate-x-full");
  const [hourInput, setHourInput] = useState("08");
  const [minInput, setMinInput] = useState("00");
  const [sectionInput, setSectionInput] = useState("AM");
  const [repeatInput, setRepeatInput] = useState("Never");

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

  const displayDelete = () => {
    setShowDelete(!showDelete);
  };

  const handleDelete = (id) => {
    const filteredItems = alarms
      .slice(0, id)
      .concat(alarms.slice(id + 1, alarms.length));

    setAlarms(filteredItems);
  };

  const handleSideBar = () => {
    setSideBar(!sideBar);
    if (sideBar) {
      setToggle("translate-x-0");
    } else {
      setToggle("-translate-x-full");
      setHourInput("00");
      setMinInput("00");
      setSectionInput("AM");
    }
  };

  const addNewAlarm = () => {
    let newAlarm = {};
    newAlarm.alarmHour = hourInput;
    newAlarm.alarmMin = minInput;
    newAlarm.alarmSection = sectionInput;
    newAlarm.repeat = repeatInput;

    setAlarms([...alarms, newAlarm]);
  };

  return (
    <div className="relative h-full overflow-hidden">
      <div className="flex flex-1 h-full">
        <div className="overflow-y-auto">
          {alarms.map((a, index) => {
            return (
              <AddAlarm
                key={index}
                id={index}
                alarm={a}
                showDelete={showDelete}
                handleDelete={handleDelete}
              />
            );
          })}
          <div
            className={`px-4 absolute bottom-20 left-0 ${toggle} transform transition duration-200 ease-in-out`}
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
                    addNewAlarm();
                    handleSideBar();
                  }}
                  className="flex items-center justify-center w-16 p-2 mx-auto my-2 text-xs font-bold text-center text-white uppercase border-2 border-white rounded-lg h-7"
                  type="text"
                >
                  Add
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

          <div className="absolute right-5 bottom-2">
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
      </div>
    </div>
  );
}

export default Alarm;
