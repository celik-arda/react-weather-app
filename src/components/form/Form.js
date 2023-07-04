import React from "react";
import WeatherContext from "../contextProvider/ContextProvider";
import {useContext, useState} from 'react';
import allCities from '../../allCities.js';
import formCss from './form.module.css';


const Form = () => {

    const {city, setCity} = useContext(WeatherContext)

    function updateCity(e) {
        setCity(e.target.value);
    }

    return (
        <div className={formCss.form_area}>
            <form>
                <select value={city} onChange={updateCity}>
                {allCities.map(cityOption => {
                    return (
                        <option key={cityOption.id} value={cityOption.name}>
                            {cityOption.name}
                        </option>
                    )
                })}
                </select>
            </form>
        </div>
    )
};

export default Form;
