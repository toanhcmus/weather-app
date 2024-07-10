import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter a City Name</h3>
      <input
        type="text"
        placeholder="E.g., New York, London, Tokyo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
