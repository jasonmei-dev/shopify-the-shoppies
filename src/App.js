import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';

import axios from 'axios';
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchMovies = async (text) => {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${text}`);

      setMovies(res.data.Search || []);
    }

    searchMovies(text);
  }, [text]);

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar text={text} onChange={(e) => setText(e.target.value)} resetText={() => setText("")} />
      <Movies movies={movies} text={text} />
    </div>
  );
}

export default App;
