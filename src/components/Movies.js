import React from 'react'

const Movies = ({ movies, text, addNomination, isNominated }) => {
  return (
    <div className="Movies">
      <h2>Results for "{text}"</h2>
      { movies.length > 0 &&
        <ul>
          {movies.map(movie => (
            <li key={movie.imdbID}>
              {movie.Title} ({movie.Year}) {" "} <button onClick={() => addNomination(movie)} disabled={isNominated(movie)}>Nominate</button>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Movies
