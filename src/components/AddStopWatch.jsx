import React, { useState, useRef, useEffect } from "react";

function AddStopWatch(props) {
  const { id, m, s, ms, c } = props;

  return (
    <div className="flex justify-between h-7 w-64 my-3 p-2 border-b border-gray-500">
      <div className="grid grid-cols-2">
        <div className="text-sm mx-2">Lap : {id + 1}</div>
        <div className="flex flex-row w-24 text-sm mx-7">
          <div className="mx-2">{m}</div> : <div className="mx-2">{s}</div> :{" "}
          <div className="mx-2">{ms}</div>
        </div>
      </div>
    </div>
  );
}

export default AddStopWatch;
