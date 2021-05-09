import React from 'react'

const SearchBar = ({ text, onChange, resetText }) => {
  return (
    <div className='SearchBar'>
      <label htmlFor="text">Movie Title </label>

      <div className="form-container">
        <div className="box">
          <i className="fas fa-search icon"></i>
          <input type="text" name="text" value={text} onChange={onChange}/>
        </div>

        <button className="reset btn" onClick={resetText}>Reset</button>
      </div>
    </div>
  )
}

export default SearchBar;