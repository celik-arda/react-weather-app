import React from "react";
import { useContext } from 'react';
import WeatherContext from "../contextProvider/ContextProvider";

const Cards = () => {

    const {myProp, setMyProp} = useContext(WeatherContext);

    return (
        <div>Cards
            <br/>
            <h3>{myProp}</h3>
            <br/>
            <button onClick={() => setMyProp("hellooooo...")}>Tıkla</button>
        </div>
    )
};

export default Cards;
