import React from 'react'
import classes from './Forecast.module.css'
import CurrentDay from '../CurrentDay'

const Forecast = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <CurrentDay {...props.forecast} />
        </div>
      </div>
    </div>
  )
}


export default Forecast
