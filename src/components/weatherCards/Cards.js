import React from "react";
import { useContext, useState } from 'react';
import WeatherContext from "../contextProvider/ContextProvider";

const Cards = () => {

    const {city, setCity, cityWeather, setCityWeather} = useContext(WeatherContext);


    return (

        <div>
            <h1>
            cards - city : {city}
            </h1>
            <hr/>
            <ul>
                <h3>{city}</h3>
                {cityWeather.map((theCity,index) => {
                    return(
                        <li key={index}>
                            <div>
                                <img src={theCity.day.condition.icon} alt="weatherIcon"/>
                            </div>
                            <div>
                                {theCity.date}
                            </div>
                            <div>
                                {theCity.day.avgtemp_c}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Cards;
