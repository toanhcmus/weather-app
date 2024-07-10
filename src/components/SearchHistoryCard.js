import React from 'react';

function SearchHistoryCard({ entry, onSearch }) {
  return (
    <div className="search-history-card">
        <div className = "search-history-info">
            <div>
                <h2>{entry.city} ({entry.data.date})</h2>
                <p>Temperature: {entry.data.temp}°C</p>
                <p>Wind: {entry.data.wind} M/S</p>
                <p>Humidity: {entry.data.humidity}%</p>
            </div>
            <div>
                <img src={entry.data.img} alt="weather icon" />
                <p>{entry.data.condition}</p>
            </div>
        </div>
        <button onClick={() => onSearch(entry.city)}>Get Latest Weather</button>
    </div>
  );
}

export default SearchHistoryCard;
