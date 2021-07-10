import React from "react";

function AddTimer() {
  return (
    <div className="my-3 w-5/6 h-24 p-2 rounded-lg border-2 border-solid border-gray-500">
      <p className="text-2xl text-center">00:02:00</p>{" "}
      <button className="flex justify-center mx-auto mt-3 bg-indigo-500 w-20 rounded-lg p-1 m-1 text-center text-white text-sm">
        Start
      </button>
    </div>
  );
}

export default AddTimer;
