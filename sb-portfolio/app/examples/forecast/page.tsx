'use client';
import { useState } from 'react';
import './styles.css';
import WeatherCard from './WeatherCard';
import { SBInput } from '@/app/library/SBInput/';
import { SBRadio } from '@/app/library/SBRadio/';
import { Units, WeatherData, getWeatherData } from './api';

export default function Forecast() {
  const [temps, setTemps] = useState<WeatherData[]>();
  const [city, setCity] = useState<string>('');
  const [units, setUnits] = useState<Units>(Units.Imperial);

  const getTemps = async () => {
    const response = await getWeatherData(city, units);
    response && setTemps(response.data);
  };

  return (
    <>
      <div>
        <h3>Forecast</h3>
        <br />
        <SBInput
          labelText={'City'}
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <SBRadio
          labelText={'Fahrenheit'}
          name="units"
          value={'imperial'}
          defaultChecked
          onChange={() => setUnits(Units.Imperial)}
        />
        <br />
        <SBRadio
          labelText={'Celsius'}
          name="units"
          value={'metric'}
          onChange={() => setUnits(Units.Metric)}
        />
        <br />
        <button onClick={() => getTemps()}>Fetch Weather Data</button>
      </div>
      {temps && (
        <div>
          <h3>{city} Forecast:</h3>
          <div className="cards">
            {temps.map((day, index) => {
              return (
                <WeatherCard
                  description={day.weather[0].description}
                  icon={day.weather[0].icon}
                  key={index}
                  max={day.temp.max}
                  min={day.temp.min}
                  summary={day.summary}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
