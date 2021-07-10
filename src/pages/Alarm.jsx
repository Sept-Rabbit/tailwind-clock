import React from "react";
import ToggleButton from "../components/ToggleButton";
import AlarmHeader from "../components/AlarmHeader";

function Alarm() {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <AlarmHeader />
      </header>
      <div className="h-98">
        <div className="items-center rounded-lg my-3 mx-4 px-4 py-2 border-2 border-solid border-gray-500">
          <div className="flex flex-row w-full justify-start items-center">
            <p className="text-xl w-1/6 ">08:00</p>{" "}
            <span className="pt-2 px-2 text-xs ml-2">上午</span>
            <p className="text-sm ml-10 mr-10">每天</p>
            <ToggleButton />
          </div>
        </div>
        <div className="items-center rounded-lg my-3 mx-4 px-4 py-2 border-2 border-solid border-gray-500">
          <div className="flex flex-row w-full justify-start items-center">
            <p className="text-xl w-1/6 ">09:00</p>{" "}
            <span className="pt-2 px-2 text-xs ml-2">上午</span>
            <p className="text-sm ml-10 mr-10">每天</p>
            <ToggleButton />
          </div>
        </div>
        <div className="items-center rounded-lg my-3 mx-4 px-4 py-2 border-2 border-solid border-gray-500">
          <div className="flex flex-row w-full justify-start items-center">
            <p className="text-xl w-1/6 ">08:00</p>{" "}
            <span className="pt-2 px-2 text-xs ml-2">下午</span>
            <p className="text-sm ml-10 mr-10">週五</p>
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alarm;
