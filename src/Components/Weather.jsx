import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchWeather } from "../Redux/Action";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.fetch.weather);
  const fiveDaysweather = weather.list.slice(0,5)
  console.log(fiveDaysweather);
  useEffect(() => {
    dispatch(
       fetchWeather(
        `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=66baf512b06662949d24da70c34f8c35`
      )
    );
  }, []);

  const handleSearch = () => {};
  return (
    <div className="container bg-secondary">
      <div className="d-flex justify-content-center align-items-center">
        <h1>5-day Forecast</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <input type="search" className="rounded" onChange={handleSearch} />
      </div>

      {/* {!city ? (
        <p>No data found</p>
      ) : (
        <div>
        {weather.loading ? (
          <h2>LOADING</h2>
        ) : weather.error ? (
          <h2>{weather.error}</h2>
        ) : ( */}
          <div className="py-5 mx-2 row">
            {fiveDaysweather && fiveDaysweather.map((weather, id) => (
              <div className="col card" id="card">
              <div className="card-body">
                <h5 className="card-title">Date & time :{weather.dt_txt}</h5>
                <p className="card-text">Date, time</p>
                <img src="" className="card-text" />
                <h4 className="card-text">Temperature: </h4>
                <p className="card-text">Weather</p>
              </div>
            </div>
            ))}
          {/* </div>
        )}  */}
      </div>
      {/* )} */}
    </div>
  );
}
