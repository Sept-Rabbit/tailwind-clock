import React, { useState, useEffect } from "react";
import AddTimeZone from "../components/AddTimeZone";
import { keys } from "../../key";

function TimeZone() {
  const [cityList, setCityList] = useState([]);
  const [sideBar, setSideBar] = useState(true);
  const [toggle, setToggle] = useState("-translate-x-full");
  const [searchKey, setSearchKey] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  let userCity = {};
  let newCity = {};

  const onChange = (e) => {
    e.preventDefault();
    setSearchKey(e.target.value);
  };

  const getUserGeolocation = async () => {
    const locationResponse = await fetch(
      `https://geolocation-db.com/json/${keys.geoLocationDBAPI}`
    );
    const location = await locationResponse.json();
    let lat = location.latitude;
    let lon = location.longitude;
    let city = location.city;

    userCity.name = city;

    let today = new Date();

    const getMins = (dt) => {
      return (dt.getMinutes() < 10 ? "0" : "") + dt.getMinutes();
    };

    const t = today.getHours() + " : " + getMins(today);
    userCity.time = t;

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keys.openweatherAPI}`
    );
    const weatherData = await weatherResponse.json();
    let currentWeather = weatherData.weather[0].main;

    userCity.weather = currentWeather;

    setCityList([...cityList, userCity]);
  };

  const getSearchCityInfo = async (cityName) => {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&limit=5&appid=${keys.openweatherAPI}`
    );
    const weatherData = await weatherResponse.json();

    const timeResponse = await fetch(
      `https://api.ipgeolocation.io/timezone?apiKey=${keys.ipGeoAPI}&location=${cityName}`
    );

    const timeData = await timeResponse.json();

    const t = timeData.time_24.split(":");
    let currentTime = t[0] + " : " + t[1];

    let currentWeather = weatherData.weather[0].main;

    newCity.name = weatherData.name;
    newCity.time = currentTime;
    newCity.weather = currentWeather;

    setCityList([...cityList, newCity]);
  };

  useEffect(() => {
    getUserGeolocation();
  }, []);

  const handleAddCity = () => {
    setSearchKey("");
    setSideBar(!sideBar);

    if (sideBar) {
      setToggle("translate-x-0");
    } else {
      setToggle("-translate-x-full");
    }
  };

  const displayDelete = () => {
    setShowDelete(!showDelete);
  };

  const handleDelete = (id) => {
    const filteredItems = cityList
      .slice(0, id)
      .concat(cityList.slice(id + 1, cityList.length));

    setCityList(filteredItems);
  };

  return (
    <div className="min-h-full">
      <div className="relative h-98">
        <img
          src="https://upload.cc/i1/2021/07/06/CkRzLm.png"
          className="w-full bg-top bg-no-repeat bg-cover h-36 bg-timezone-image"
        />

        {/* ----- Display Timezone -----*/}

        <div className="h-64 px-4 mt-5 overflow-auto">
          {cityList.map((c, index) => {
            return (
              <AddTimeZone
                handleDelete={handleDelete}
                cityList={cityList}
                key={index}
                id={index}
                name={c.name}
                time={c.time}
                weather={c.weather}
                showDelete={showDelete}
              />
            );
          })}
        </div>

        {/* ----- Toggle Search Window -----*/}

        <div
          className={`px-4 absolute top-60 z-50 ${toggle} transform transition duration-200 ease-in-out`}
        >
          <div className="flex flex-col h-32 p-4 bg-gray-800 rounded-lg left-10 w-52">
            <label className="text-xs">Enter City in English</label>
            <input
              onChange={onChange}
              className="p-1 my-3 text-xs text-gray-900 rounded-lg focus:border-1 focus:bg-gray-200 focus:outline-none"
              type="text"
              value={searchKey}
            ></input>
            <button
              onClick={() => {
                getSearchCityInfo(searchKey);
                handleAddCity();
              }}
              className="flex items-center justify-center w-16 p-2 mx-auto text-xs font-bold text-center text-white uppercase border-2 border-white rounded-lg h-7"
              type="text"
            >
              Add
            </button>
          </div>
        </div>

        {/* ----- Floating Button -----*/}

        <div className="absolute right-5 bottom-2">
          <button
            onClick={handleAddCity}
            className="w-12 h-12 p-0 transition duration-200 ease-in bg-red-600 rounded-full shadow hover:bg-blue-700 active:shadow-lg mouse focus:outline-none"
          >
            <svg
              viewBox="0 0 20 20"
              enableBackground="new 0 0 20 20"
              className="inline-block w-6 h-6"
            >
              <path
                fill="#FFFFFF"
                d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeZone;
