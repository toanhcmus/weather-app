import React, { useEffect, useState } from 'react';
import SearchHistoryCard from './SearchHistoryCard';

function SearchHistory({ onSearch }) {
  const [history, setHistory] = useState([]);

const fetchHistory = async () => {
    try {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/weather/search-history`);
    const data = await response.json();
    console.log(data);
    setHistory(data);
    } catch (error) {
    console.error('Error fetching search history:', error);
    }
};

useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(fetchHistory, 5000); // Poll every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h3>Search History</h3>
      <div className="search-history-container">
        {history.map((entry, index) => (
          <SearchHistoryCard key={index} entry={entry} onSearch={onSearch} />
        ))}
      </div>
    </div>
  );
}

export default SearchHistory;
