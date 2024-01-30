import Image from 'next/image';
import { WeatherDisplay } from './api';

export default function WeatherCard(props: WeatherDisplay) {
  const { description, icon, max, min, summary } = props;
  return (
    <div className="sbcard">
      <h4>{summary}</h4>
      <Image
        alt={description}
        height="50"
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        width="50"
      />
      <h5>Low:</h5>
      <span>{min}</span>
      <br />
      <h5>High:</h5>
      <span>{max}</span>
    </div>
  );
}
