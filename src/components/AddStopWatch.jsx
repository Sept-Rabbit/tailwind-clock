import React, { useState, useRef, useEffect } from "react";

function AddStopWatch(props) {
  const { id, m, s, ms, c } = props;

  return (
    <div className="flex justify-between h-7 w-64 my-3 p-2 border-b border-gray-500">
      <p className="text-sm mx-2">Lap : {id}</p>
      <p className="text-sm mx-2">
        {m} : {s} : {ms}
      </p>
    </div>
  );
}

export default AddStopWatch;
