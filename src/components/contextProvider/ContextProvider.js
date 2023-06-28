import React from "react";
import {createContext, useState, useEffect} from 'react';


const WeatherContext = createContext();

export const ContextProvider = ({children}) => {

    const [city, setCity] = useState("izmir");
    const [cityWeather, setCityWeather] = useState([])
    
    useEffect(() => {
        async function getData2 () {
            const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=____API__KEY____q=${city}&aqi=no&days=3`)
            
            const result = await data.json()

            setCityWeather(result.forecast.forecastday);
            console.log(result.forecast.forecastday);
        }
        getData2();
    },[city])
    
    // cityDatas.forecast.forecastday[0].day.avgtemp_c

    const values = {
        city,
        setCity,
        cityWeather,
        setCityWeather
    }
    

    
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

export default WeatherContext;
