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
    <div className="flex flex-col items-center px-4 py-2 mx-auto my-4 border-2 border-gray-500 border-solid rounded-lg">
      <div className="flex flex-row items-center justify-around w-full">
        <p className="w-2/6 mr-5 text-lg">{name}</p>
        <p className="text-lg w-1/8">{time}</p>
        {/* <span className="pt-2 mr-8 text-xs">上午</span> */}
        <div className="text-lg w-1/8 animate-spin-once">
          <i className={`fas fa-${newWeather}`}></i>
        </div>

        <div className="text-lg w-1/8">
          <button onClick={() => handleDelete(id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTimeZone;
