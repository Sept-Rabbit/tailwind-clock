import React, { useState, useRef, useEffect } from "react";

function AddTimer(props) {
  const { id, h, m, s, c } = props;
  const [second, setSecond] = useState(s);
  const [minute, setMinute] = useState(m);
  const [hour, setHour] = useState(h);
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(c);

  const countdown = () => {
    const secondCounter = counter % 60;
    const minuteCounter = Math.floor(counter / 60);

    const computedSecond =
      String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
    const computedMinute =
      String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

    setSecond(computedSecond);
    setMinute(computedMinute);

    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    let intervalId;

    if (isActive && counter >= 0) {
      intervalId = setTimeout(() => {
        countdown();
      }, 1000);
    }
    return () => clearTimeout(intervalId);
  }, [isActive, counter, setCounter]);

  const stopTimer = () => {
    setIsActive(false);
    setCounter(c);
    setSecond(s);
    setMinute(m);
  };

  return (
    <div className="my-3 w-5/6 h-24 p-2 rounded-lg border-2 border-solid border-gray-500">
      <p className="text-2xl text-center">
        {minute} : {second}
      </p>
      <div className="flex flex-row justify-around">
        <button
          onClick={() => setIsActive(!isActive)}
          className="mt-3 bg-indigo-500 w-20 rounded-lg p-1 m-1 text-center text-white text-sm"
        >
          {isActive || counter <= 0 ? "Pause" : "Start"}
        </button>
        <button
          onClick={stopTimer}
          className="mt-3 bg-indigo-500 w-20 rounded-lg p-1 m-1 text-center text-white text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default AddTimer;

// const [second, setSecond] = useState(s);
//   const [minSecond] = SeconnewSecondte(m);
//   const [hour, setHour] = useState(h);
//   const [isActive, setIsActive] = useState(false);
//   const [counter, setCounter] = useState(c);

//   useEffect(() => {
//     let intervalId;

//     if (isActive && counter >= 0) {
//       intervalId = setInterval(() => {
//         const secondCounter = counter % 60;
//         const minuteCounter = Math.floor(counter / 60);

//         const computedSecond =
//           String(secondCounter).length === 1
//             ? `0${secondCounter}`
//             : secondCounter;
//         const computedMinute =
//           String(minuteCounter).length === 1
//             ? `0${minuteCounter}`
//             : minuteCounter;

//         setSecond(computedSecond);
//         setMinute(computedMinute);

//         setCounter((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(intervalId);
//   }, [isActive, counter]);

//   const stopTimer = () => {
//     setIsActive(false);
//     setCounter(c);
//     setSecond(s);
//     setMinute(m);
//   };

// let intervalRef = useRef();

// const countdown = () => {
//   if (counter >= 0) {
//     setCounter((prev) => prev - 1);
//     newMinute = Math.floor(count % 60);
//     newSecond = count % 60;

//     setMinute(newMinute > 9 ? newMinute : "0" + newMinute);
//     setSecond(newSecond > 9 ? newSecond : "0" + newSecond);
//   } else {
//     clearInterval(intervalRef.current);
//   }
// };

// useEffect(() => {
//   let intervalId;

//   if (!isActive) {
//     intervalRef.current = setInterval(function () {
//       countdown();
//     }, 1000);
//   } else {
//     return () => clearInterval(intervalRef.current);
//   }
// }, []);

// const handleClick = () => {
//   if (!isActive) {
//     clearInterval(intervalRef.current);
//   } else if (count <= 0) {
//     setIsActive(true);
//   } else {
//     intervalRef.current = setInterval(countdown, 1000);
//   }
//   setPause((prev) => !prev);
// };

// const stopTimer = () => {
//   setTimer({
//     hour: "00",
//     minute: "00",
//     second: "00",
//   });
//   setCounter(0);
// };
