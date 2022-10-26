import { useDispatch, useSelector } from "react-redux";
import WeatherService from "../Service/WeatherService";

const weatherService = new WeatherService();

const useWeather = () => {
  const dispatch = useDispatch();


  const searchCity = async (city) => {
    const cityName = await weatherService.City(city);
    dispatch({type:"setName",payload:cityName});
    console.log(cityName);
  }

  const searchName = async (city) => {
    const cityName = await weatherService.City(city);
    dispatch({ type: "setData", payload: cityName });
    console.log(cityName);
  };

  const searchTemp = async (city) => {
    const temp = await weatherService.Temp(city);
    dispatch({ type: "setTemp", payload: temp });
  };

  const searchCondition = async (city) => {
    const condition = await weatherService.condition(city);
    dispatch({ type: "setCondition", payload: condition });
  };

  const searchDayCondition = async (city) => {
    const dayCondition = await weatherService.dayCondition(city);
    dispatch({ type: "dayCondition", payload: dayCondition });
  };

  const searchHumidity = async (city) => {
    const humidity = await weatherService.humidity(city);
    dispatch({ type: "setHumidity", payload: humidity });
  };

  const searchWind = async (city) => {
    const wind = await weatherService.wind(city);
    dispatch({type:"setWind",payload:wind});
  };

  const searchIcon = async (city) => {
    const icon = await weatherService.icon(city);
    dispatch({type:"setIcon",payload:icon});
  };





  return {
    searchCity,
    searchName,
    searchTemp,
    searchCondition,
    searchDayCondition,
    searchHumidity,
    searchWind,
    searchIcon
  };
};

export default useWeather;
