import React from 'react'

const Movies = ({ movies, text}) => {
  return (
    movies.length > 0 && (
      <div className="Movies">
        <h2>Results for "{text}"</h2>
        { movies.length > 0 &&
          <ul>
            {movies.map(movie => (
              <li key={movie.imdbID}>
                {movie.Title} ({movie.Year}) {" "} <button onClick={() => console.log('Nominate!')}>Nominate</button>
              </li>
            ))}
          </ul>
        }
      </div>
    )
  )
}

export default Movies
