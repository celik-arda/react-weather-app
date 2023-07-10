import React, { useContext } from 'react';

import WeatherContext from '../contextProvider/ContextProvider';
import cardsCss from './cards.module.css';

function Cards() {
  const {
    city, setCity, cityWeather, setCityWeather,
  } = useContext(WeatherContext);

  const gunler = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function getDayOfWeek(oneDayData) {
    const api_date_of_data = oneDayData.date;
    const api_full_date = new Date(api_date_of_data);
    const day_index_of_week = api_full_date.getDay();
    const day_name = gunler[day_index_of_week];
    return day_name;
  }

  return (
    <div className={cardsCss.cards_area}>
      <h2 className={cardsCss.city_name}>{city}</h2>
      <ul className={cardsCss.weather_list}>

        {cityWeather.map((theCity, index) => (
          <li className={index === 0 ? cardsCss.weather_item_today : cardsCss.weather_item} key={index}>
            <div>
              {index === 0 ? 'Today' : getDayOfWeek(theCity)}
            </div>
            <div>
              <img className={cardsCss.weather_icon} src={theCity.day.condition.icon} alt="weatherIcon" />
            </div>
            <div>
              {Math.round(theCity.day.avgtemp_c)}
              {' '}
              &deg;C

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
