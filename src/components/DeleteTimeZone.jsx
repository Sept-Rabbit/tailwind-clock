import React from "react";

function DeleteTimeZone() {
  return (
    <div className="items-center my-3 mx-auto mx-4 px-4 py-2 flex flex-col rounded-lg border-2 border-solid border-gray-500">
      <div className="flex flex-row w-full items-center justify-around">
        <p className="text-lg w-2/6 mr-5">{name}</p>
        <p className="text-lg w-1/8">{time}</p>
        {/* <span className="pt-2 mr-8 text-xs">上午</span> */}
        <div className="text-lg w-1/8">
          <i className={`fas fa-${newWeather}`}></i>
        </div>
      </div>
    </div>
  );
}

export default DeleteTimeZone;
