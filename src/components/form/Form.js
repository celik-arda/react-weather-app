import React, { useContext } from 'react';
import WeatherContext from '../contextProvider/ContextProvider';

import allCities from '../../allCities';
import formCss from './form.module.css';

function Form() {
  const { city, setCity } = useContext(WeatherContext);

  function updateCity(e) {
    setCity(e.target.value);
  }

  return (
    <div className={formCss.form_area}>
      <form>
        <select value={city} onChange={updateCity}>
          {allCities.map((cityOption) => (
            <option key={cityOption.id} value={cityOption.name}>
              {cityOption.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Form;
