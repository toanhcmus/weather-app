import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import ForecastContainer from './components/ForecastContainer';
import SubscriptionForm from './components/SubscriptionForm';
import './App.css';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [allForecast, setAllForecast] = useState([]);
  const [visibleDays, setVisibleDays] = useState(4);

  const handleSearch = async (city) => {
    try {
      console.log(city);
      const response = await fetch(`http://localhost:5000/weather/current/${city}`);
      const data = await response.json();
      setCurrentWeather(data);

      const forecastResponse = await fetch(`http://localhost:5000/weather/forecast/${city}`);
      const forecastData = await forecastResponse.json();
      setAllForecast(forecastData);
      setForecast(forecastData.slice(0, 4));
      setVisibleDays(4);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  const loadMore = () => {
    const newVisibleDays = visibleDays + 4;
    setForecast(allForecast.slice(0, newVisibleDays));
    setVisibleDays(newVisibleDays);
  };

  return (
    <div>
      <h2 className="header">Weather Dashboard</h2>

      <div className="main-container">
        <div className="search-container">
          <SearchForm onSearch={handleSearch} />
          <SubscriptionForm />
        </div>

        <div className="weather-container">
          {currentWeather && (
            <div className="current-weather">
              <div>
                <h2>{currentWeather.city} ({currentWeather.date})</h2>
                <p>Temperature: {currentWeather.temp}°C</p>
                <p>Wind: {currentWeather.wind} M/S</p>
                <p>Humidity: {currentWeather.humidity}%</p>
              </div>
              <div>
                <img src={currentWeather.icon} alt="weather icon" />
                <p>{currentWeather.condition}</p>
              </div>
            </div>
          )}
          <ForecastContainer forecast={forecast} loadMore={loadMore} canLoadMore={visibleDays < allForecast.length} />
        </div>
      </div>
    </div>
  );
}

export default App;
