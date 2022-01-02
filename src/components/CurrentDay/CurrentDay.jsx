import React from 'react'
import classes from './CurrentDay.module.css'

const CurrentDay = (props) => {
  return (
    <div className={`${classes.swirlinfwd} container text-center`}>
      <div className="container shadow card rounded text-center bg-light">
        <div className="card-body">
          <p className="card-text">📅{props.date}</p>
          <p className="card-text">📍{props.location}</p>
          <p className="card-text">🌡️{props.temperature}°C</p>
          <p className="card-text">☁️{props.weatherDescription}</p>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => window.location.reload()}
          >
            🔄Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default CurrentDay
