import React from 'react'
import classes from './Error.module.css'


const Error = (props) => {
  return (
    <p className={`${classes.bouncetop} text-dark fs-2`}>
      🚨{props.message}
    </p>
  )
}

export default Error
