// src/components/ForecastContainer.js
import React from 'react';
import ForecastCard from './ForecastCard';

function ForecastContainer({ forecast, loadMore, canLoadMore }) {
  return (
    <div>
      <h3>4-Day Forecast</h3>
      <div className="forecast-container">
        {forecast.map(day => <ForecastCard key={day.date} day={day} />)}
      </div>
      {canLoadMore && <button onClick={loadMore}>Load More</button>}
    </div>
  );
}

export default ForecastContainer;
