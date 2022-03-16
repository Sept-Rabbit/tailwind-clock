import React from "react";

function DeleteTimeZone() {
  return (
    <div className="flex flex-col items-center px-4 py-2 mx-auto my-3 border-2 border-gray-500 border-solid rounded-lg">
      <div className="flex flex-row items-center justify-around w-full">
        <p className="w-2/6 mr-5 text-lg">{name}</p>
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
