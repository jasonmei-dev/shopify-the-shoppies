import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';
import Nominations from './components/Nominations';
import Alert from './components/Alert';

import axios from 'axios';
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    searchMovies(text);
  }, [text]);

  useEffect(() => {
    const maxedNominations = () => {
      if (nominations.length === 5) {
        showAlert("You reached the max number of nominations!", "success");
      }
    }

    maxedNominations();
  }, [nominations]);

  const searchMovies = async (text) => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${text}`);

    setMovies(res.data.Search || []);
  }

  const addNomination = movie => {
    if (nominations.length < 5) {
      setNominations([...nominations, movie]);
    } else {
      showAlert("You already have 5 nominations!", "danger");
    }
  }

  const removeNomination = movie => {
    setNominations(nominations.filter(nomination => nomination.imdbID !== movie.imdbID));
  }

  const isNominated = movie => !!nominations.find(nomination => nomination.imdbID === movie.imdbID);

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  }

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <Alert alert={alert} />
      <SearchBar text={text} onChange={(e) => setText(e.target.value)} resetText={() => setText("")} />

      <div className="flex-container">
        <Movies movies={movies} text={text} addNomination={addNomination} isNominated={isNominated} />
        <Nominations nominations={nominations} removeNomination={removeNomination} />
      </div>
    </div>
  );
}

export default App;
