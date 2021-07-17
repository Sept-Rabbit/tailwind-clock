import React, { useState, useRef, useEffect } from "react";

function AddStopWatch(props) {
  const { id, m, s, ms, c, order } = props;
  console.log(order);

  return (
    <div className="flex justify-between h-7 w-64 my-3 p-2 border-b border-gray-500">
      <div className="text-sm mx-2">Lap : {order}</div>
      <div className="flex w-24 text-sm mx-3">
        <div className="w-9 text-center">{m} </div> :
        <div className="w-9 text-center">{s}</div> :
        <div className="w-9 text-center">{ms}</div>
      </div>
    </div>
  );
}

export default AddStopWatch;
