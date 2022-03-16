import React, { useState, useRef, useEffect } from "react";

function AddTimer(props) {
  const { id, c, showDelete, handleDelete } = props;
  // const [second, setSecond] = useState(s);
  // const [minute, setMinute] = useState(m);
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(c);

  const twoDigits = (num) => String(num).padStart(2, "0");

  let secondsToDisplay = +counter % 60;
  let minutesToDisplay = Math.floor(+counter / 60);

  secondsToDisplay = twoDigits(secondsToDisplay);
  minutesToDisplay = twoDigits(minutesToDisplay);
  console.log(secondsToDisplay, minutesToDisplay);

  // useEffect(() => {
  //   let intervalId;

  //   if (isActive && counter >= 0) {
  //     intervalId = setInterval(() => {
  //       countdown();
  //     }, 1000);
  //   }
  //   return () => clearInterval(intervalId);
  // }, [isActive, counter]);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(
    () => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        setIsActive(!isActive);
      }
    },
    isActive ? 1000 : null
    // passing null stops the interval
  );

  // const countdown = () => {
  //   let secondCounter = counter % 60;
  //   let minuteCounter = Math.floor(counter / 60);

  // const computedSecond =
  //   String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
  // const computedMinute =
  //   String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

  // setSecond(computedSecond);
  // setMinute(computedMinute);
  //   setSecond(secondCounter);
  //   setMinute(minuteCounter);

  //   setCounter((prev) => prev - 1);
  // };

  const resetTimer = () => {
    setIsActive(false);
    setCounter(c);
    setSecond(s);
    setMinute(m);
  };

  return (
    <div className="relative w-5/6 h-24 p-2 my-3 border-2 border-gray-500 border-solid rounded-lg">
      <p className="text-2xl text-center">
        {minutesToDisplay} : {secondsToDisplay}
      </p>
      <div className="flex flex-row justify-around">
        <button
          onClick={() => setIsActive(!isActive)}
          className="w-20 h-8 p-1 m-1 mt-3 text-sm text-center text-white bg-indigo-500 rounded-lg"
        >
          {isActive || counter <= 0 ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="w-20 h-8 p-1 m-1 mt-3 text-sm text-center text-white bg-indigo-500 rounded-lg"
        >
          Reset
        </button>
      </div>

      <div className="absolute top-0 ml-5 text-lg right-2 w-1/8">
        <button onClick={() => handleDelete(id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default AddTimer;
