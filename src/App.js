import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar text={text} onChange={(e) => setText(e.target.value)} resetText={() => setText("")} />
    </div>
  );
}

export default App;
