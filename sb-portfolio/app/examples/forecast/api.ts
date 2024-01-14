const apiKey = 'be0d99f212222879fd2e71d8aa18ec34';

const getLatLong = async (city: string) => {
  // Get coordinates from a city's name
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return { lat: result[0].lat, lon: result[0].lon };
  } catch (e) {
    console.log(e);
  }
};

export const getWeatherData = async (city: string, units: Units) => {
  // Documentation: https://openweathermap.org/api/one-call-3
  const latLon = await getLatLong(city);
  const lat = latLon && latLon.lat;
  const lon = latLon && latLon.lon;

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    return { data: result.daily };
  } catch (e) {
    console.log(e);
  }
};

export enum Units {
  Standard = 'standard',
  Metric = 'metric',
  Imperial = 'imperial',
}

export type WeatherData = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  summary: string;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
  uvi: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

export type WeatherDisplay = {
  description: string;
  icon: string;
  max: number;
  min: number;
  summary: string;
};
