import React, { useState } from 'react'
import classes from './SearchBar.module.css'


const SearchBar = (props) => {
  const [location, setLocation] = useState('')
 
  const onSubmit = (e) => {
    e.preventDefault()
    props.submitSearch(location)
    setLocation('')
    if (!location || location === '') {
      return
    }
  }

  const onChangeHandler = (e) => {
    setLocation(e.target.value)
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="d-flex">
        <input
          className="form-control me-2 shadow"
          type="search"
          placeholder="Type your location"
          aria-label="Search"
          value={location}
          onChange={onChangeHandler}
        ></input>
        <button className="btn btn-dark shadow-lg" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}


export default SearchBar
