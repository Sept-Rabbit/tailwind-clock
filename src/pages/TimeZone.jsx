import React, { useState, useEffect } from "react";
import AddTimeZone from "../components/AddTimeZone";
import { keys } from "../../key";
import TimeZoneHeader from "../components/TimeZoneHeader";

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
    console.log(currentWeather);

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
    <div className="min-h-full py-1">
      <header className="sticky top-0 z-50">
        <TimeZoneHeader displayDelete={displayDelete} />
      </header>
      <div className="relative h-full">
        <img
          src="https://upload.cc/i1/2021/07/06/CkRzLm.png"
          className="h-36 w-full bg-cover bg-no-repeat bg-top bg-timezone-image"
        />

        {/* ----- Display Timezone -----*/}

        <div className="px-4 mt-5 overflow-auto h-64">
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
          <div className="left-10 h-32 w-52 p-4 rounded-lg flex flex-col bg-gray-800">
            <label className="text-xs">Enter City in English</label>
            <input
              onChange={onChange}
              className="rounded-lg text-xs p-1 focus:border-1 focus:bg-gray-200 focus:outline-none text-gray-900 my-3"
              type="text"
              value={searchKey}
            ></input>
            <button
              onClick={() => {
                getSearchCityInfo(searchKey);
                handleAddCity();
              }}
              className="w-16 h-7 items-center justify-center flex text-center mx-auto font-bold uppercase border-white border-2 rounded-lg p-2 text-xs text-white"
              type="text"
            >
              Add
            </button>
          </div>
        </div>

        {/* ----- Floating Button -----*/}

        <div className="absolute right-5 bottom-1">
          <button
            onClick={handleAddCity}
            className="p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            <svg
              viewBox="0 0 20 20"
              enableBackground="new 0 0 20 20"
              className="w-6 h-6 inline-block"
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
