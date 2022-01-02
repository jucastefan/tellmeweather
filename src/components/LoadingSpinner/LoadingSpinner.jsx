import React from 'react'
import classes from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return (
      <div className={`${classes.scaleincenter} container p-3 d-flex align-items-center`}>
      <strong>Loading...</strong>
      <div
        className="spinner-border ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  )
}

export default LoadingSpinner
