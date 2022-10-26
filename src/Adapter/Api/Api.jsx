import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";



const BaseUrl = "http://api.weatherapi.com/v1/";
const key = "?key=b909bb96f00242eeb3a143107220707";


const GetCity = async (city) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=b909bb96f00242eeb3a143107220707&q=${city}`);
    return (response.data.location.name);
}

const GetTemp = async (city) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=b909bb96f00242eeb3a143107220707&q=${city}`);
    return (response.data.current.temp_c);
}

const GetCondition = async (city) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=b909bb96f00242eeb3a143107220707&q=${city}`);
    return (response.data.current.condition.text);
}

const GetDayCondition = async (city) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=b909bb96f00242eeb3a143107220707&q=${city}`);
    return (response.data.current.is_day);
}

const GetHumidity = async (city) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=b909bb96f00242eeb3a143107220707&q=${city}`);
    return (response.data.current.humidity);
}

const GetWind = async (city) => {
    const response=await axios.get(`http://api.weatherapi.com/v1/current.json?key=b909bb96f00242eeb3a143107220707&q=${city}`);
    return (response.data.current.wind_mph);
}

const GetIcon = async (city) => {
    const response=await axios.get(`http://api.weatherapi.com/v1/current.json?key=b909bb96f00242eeb3a143107220707&q=${city}`);
    return(response.data.current.condition.icon);
}










export { GetCity, GetTemp, GetCondition, GetDayCondition, GetHumidity, GetWind ,GetIcon };