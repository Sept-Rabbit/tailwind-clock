import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();
  const [alarmActive, setAlarmActive] = useState("");
  const [timezoneActive, setTimezoneActive] = useState("");
  const [stopWatchActive, setStopWatchActive] = useState("");
  const [timerActive, setTimerActive] = useState("");

  const handleAlarmClick = (e) => {
    e.preventDefault();
    setAlarmActive("text-blue-600");
    setTimezoneActive("");
    setStopWatchActive("");
    setTimerActive("");
    history.push("/");
  };

  const handleTimeZoneClick = (e) => {
    e.preventDefault();
    setAlarmActive("");
    setTimezoneActive("text-blue-600");
    setStopWatchActive("");
    setTimerActive("");
    history.push("/timezone");
  };

  const handleStopWatchClick = (e) => {
    e.preventDefault();
    setAlarmActive("");
    setTimezoneActive("");
    setStopWatchActive("text-blue-600");
    setTimerActive("");
    history.push("/stopwatch");
  };

  const handleTimerClick = (e) => {
    e.preventDefault();
    setAlarmActive("");
    setTimezoneActive("");
    setStopWatchActive("");
    setTimerActive("text-blue-600");
    history.push("/timer");
  };

  return (
    <div className="flex flex-row font-sans justify-around focus:outline-none py-4 focus:bg-gray-600">
      <div className="hover:bg-gray-600 text-base p-2">
        <button
          onClick={handleAlarmClick}
          className={`${alarmActive} flex-col flex justify-center text-center items-center`}
        >
          <i className="my-1 far fa-alarm-clock"></i>
          <span className="w-20">鬧鐘</span>
        </button>
      </div>
      <div className="hover:bg-gray-600 text-center text-base p-2">
        <button
          onClick={handleTimeZoneClick}
          className={`${timezoneActive} flex-col flex justify-center text-center items-center`}
        >
          <i className="my-1 far fa-clock"></i>
          <span className="w-20">世界時鐘</span>
        </button>
      </div>
      <div className="hover:bg-gray-600 text-center text-base p-2">
        <button
          onClick={handleStopWatchClick}
          className={`${stopWatchActive} flex-col flex justify-center text-center items-center`}
        >
          <i className="my-1 far fa-stopwatch"></i>
          <span className="w-20">碼表</span>
        </button>
      </div>
      <div className="hover:bg-gray-600 text-center text-base p-2">
        <button
          onClick={handleTimerClick}
          className={`${timerActive} flex-col flex justify-center text-center items-center`}
        >
          <i className="my-1 far fa-hourglass-end"></i>
          <span className="w-20">計時器</span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
