import React, { useState } from "react";

function AddTimeZone(props) {
  const { name, time, weather, id, showDelete, handleDelete, cityList } = props;

  let newWeather = "";

  if (weather.includes("Sun")) {
    newWeather = "cloud";
  }
  if (weather.includes("Clouds")) {
    newWeather = "cloud";
  }
  if (weather.includes("Sun") && weather.includes("Clouds")) {
    newWeather = "clouds-sun";
  }
  if (weather.includes("Mist") || weather.includes("Fog")) {
    newWeather = "fog";
  }
  if (weather.includes("Rain")) {
    newWeather = "cloud-rain";
  }
  if (weather.includes("Thunderstorm")) {
    newWeather = "thunderstorm";
  }
  if (weather.includes("Drizzle")) {
    newWeather = "cloud-drizzle";
  }

  if (weather.includes("Clear")) {
    newWeather = "moon-stars";
  }

  return (
    <div className="items-center my-4 mx-auto mx-4 px-4 py-2 flex flex-col rounded-lg border-2 border-solid border-gray-500">
      <div className="flex flex-row w-full items-center justify-around">
        <p className="text-lg w-2/6 mr-5">{name}</p>
        <p className="text-lg w-1/8">{time}</p>
        {/* <span className="pt-2 mr-8 text-xs">上午</span> */}
        <div className="text-lg w-1/8 animate-spin-once">
          <i className={`fas fa-${newWeather}`}></i>
        </div>
        {showDelete ? (
          <div className="text-lg w-1/8">
            <button onClick={() => handleDelete(id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AddTimeZone;
