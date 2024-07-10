import React from 'react';

function ForecastCard({ day }) {
  return (
    <div>
      <h2>{day.date}</h2>
      <img src={day.img} alt="weather icon"/>
      <p>Temp: {day.temp}°C</p>
      <p>Wind: {day.wind} M/S</p>
      <p>Humidity: {day.humidity}%</p>
    </div>
  );
}

export default ForecastCard;
