import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();
  const [active, setActive] = useState("");

  const handleAlarmClick = (e) => {
    e.preventDefault();
    setActive("focus:text-blue-600");
    history.push("/");
  };

  const handleTimeZoneClick = (e) => {
    e.preventDefault();
    setActive("focus:text-blue-600");
    history.push("/timezone");
  };

  const handleStopWatchClick = (e) => {
    e.preventDefault();
    setActive("focus:text-blue-600");
    history.push("/stopwatch");
  };

  const handleTimerClick = (e) => {
    e.preventDefault();
    setActive("focus:text-blue-600");
    history.push("/timer");
  };

  return (
    <div className="flex flex-row font-sans justify-around focus:outline-none py-4 focus:bg-gray-600">
      <div className="hover:bg-gray-600 active:bg-gray-600 text-center text-base p-2">
        <button
          onClick={handleAlarmClick}
          className={`${active} flex-col flex justify-center text-center items-center`}
        >
          <i className="my-1 far fa-alarm-clock"></i>
          <span>鬧鐘</span>
        </button>
      </div>
      <div className="hover:bg-gray-600 active:bg-gray-600 text-center text-base p-2">
        <button
          onClick={handleTimeZoneClick}
          className={`${active} flex-col flex justify-center text-center items-center`}
        >
          <i className="my-1 far fa-clock"></i>
          <span>世界時鐘</span>
        </button>
      </div>
      <div className="hover:bg-gray-600 active:bg-gray-600 text-center text-base p-2">
        <button
          onClick={handleStopWatchClick}
          className={`${active} flex-col flex justify-center text-center items-center`}
        >
          <i className="my-1 far fa-stopwatch"></i>
          <span>碼表</span>
        </button>
      </div>
      <div className="hover:bg-gray-600 active:bg-gray-600 text-center text-base p-2">
        <button
          onClick={handleTimerClick}
          className={`${active} flex-col flex justify-center text-center items-center`}
        >
          <i className="my-1 far fa-hourglass-end"></i>
          <span>計時器</span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
