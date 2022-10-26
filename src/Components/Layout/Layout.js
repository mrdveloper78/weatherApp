import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useWeather from "../../Hooks/weatherHook";

const Layout = () => {
  const {
    searchCity,
    searchName,
    searchTemp,
    searchCondition,
    searchDayCondition,
    searchHumidity,
    searchWind,
    searchIcon,
  } = useWeather();

  const city = useSelector((state) => state.weatherState.city);
  const data = useSelector((state) => state.weatherState.data);
  const temp = useSelector((state) => state.weatherState.temp);
  const condition = useSelector((state) => state.weatherState.condition);
  const dayCondition = useSelector((state) => state.weatherState.dayCondition);
  const humidity = useSelector((state) => state.weatherState.humidity);
  const wind = useSelector((state) => state.weatherState.wind);
  const icon = useSelector((state) => state.weatherState.icon);

  useEffect(() => {
    searchCity(city);
    searchName(city);
    searchTemp(city);
    searchCondition(city);
    searchDayCondition(city);
    searchHumidity(city);
    searchWind(city);
    searchIcon(city);
  }, [city]);

  return (
    <>
      <div className="search">
        <input
          type={"text"}
          placeholder={"Enter Location"}
          onChange={(e) => searchCity(e.target.value)}
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data}</p>
          </div>

          <div className="location-data" >
            <div className="temp">
              <h1>{temp}°c</h1>
            </div>

            <div className="icon">
              <img src={icon} />
            </div>

            <div className="description">
              <p>{condition}</p>
            </div>
          </div>

        </div>

        <div className="buttom">
          <div className="feels">
            <p className="bold">{dayCondition === 0 ? "Night" : "Day"}</p>
            <p>DayCondition</p>
          </div>

          <div className="humidity">
            <p className="bold">{humidity}%</p>
            <p>Humidity</p>
          </div>

          <div className="wind">
            <p className="bold">{wind} MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
