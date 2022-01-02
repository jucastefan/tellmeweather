import React from 'react'
import classes from './Header.module.css'
import logo from '../../images/logo.png'

const Header = () => {
    return <img src={logo} className={`${classes.image} img-fluid pb-3`} alt="logo"></img>
}

export default Header
