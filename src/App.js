import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchResult from './components/Search/SearchResult';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ photos: [], total_results: 0 });

  const onSearchChange = value => {
    setQuery(value);
  };

  const onSearchComplete = data => {
    setResults(data);
    console.log('results', data);
  };
  return (
    <div className="App">
      <Header
        onSearchChange={onSearchChange}
        query={query}
        onSearchComplete={onSearchComplete}
      />
      <SearchResult query={query} data={results} />
    </div>
  );
}

export default App;
