import React, { useState, useRef, useEffect } from "react";

function AddStopWatch(props) {
  const { id, m, s, ms, c, order } = props;

  return (
    <div className="flex justify-between w-64 p-2 my-3 border-b border-gray-500 h-7">
      <div className="mx-2 text-sm">Lap : {order}</div>
      <div className="flex w-24 mx-3 text-sm">
        <div className="text-center w-9">{m} </div> :
        <div className="text-center w-9">{s}</div> :
        <div className="text-center w-9">{ms}</div>
      </div>
    </div>
  );
}

export default AddStopWatch;
