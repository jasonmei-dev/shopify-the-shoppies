import React from 'react'

const Nominations = ({ nominations, removeNomination }) => {
  return (
    <div className="Nominations">
      <h2>Nominations</h2>
      { nominations.length === 0 && <p>You haven't nominated any movies yet!</p> }

      { nominations.length > 0 &&
        <ul>
          {nominations.map(nomination => (
            <li key={nomination.imdbID}>
              {nomination.Title} ({nomination.Year}) {" "} <button className="btn" onClick={() => removeNomination(nomination)}>Remove</button>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Nominations
