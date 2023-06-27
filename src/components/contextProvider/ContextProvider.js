import React from "react";
import {createContext, useState} from 'react';

const WeatherContext = createContext();

export const ContextProvider = ({children}) => {

    const [myProp, setMyProp] = useState("selamlar");

    const values = {
        myProp,
        setMyProp
    }
    
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

export default WeatherContext;
