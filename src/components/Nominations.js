import React from 'react'

const Nominations = ({ nominations, removeNomination }) => {
  return (
    <div className="Nominations">
      <h2>Nominations</h2>
      { nominations.length === 0 && <h3>You haven't nominated any movies yet!</h3> }

      { nominations.length > 0 &&
        <ul>
          {nominations.map(nomination => (
            <li key={nomination.imdbID}>
              {nomination.Title} ({nomination.Year}) {" "} <button onClick={() => removeNomination(nomination)}>Remove</button>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Nominations
