import React, { createContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export function ContextProvider({ children }) {
  const [city, setCity] = useState('izmir');
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
    async function getData2() {
      const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=____API__KEY____&q=${city}&aqi=no&days=3`);

      const result = await data.json();

      setCityWeather(result.forecast.forecastday);
    }
    getData2();
  }, [city]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    city,
    setCity,
    cityWeather,
    setCityWeather,
  };

  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
}

export default WeatherContext;
