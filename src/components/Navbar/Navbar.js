import React from 'react'
import classes from './Navbar.module.scss'
import logo from '../../Static/Images/logo.svg'

function Navbar() {
  return (
    <div className={classes.Navbar}>
        <img src={logo}/>
        <ul>
            <li><a href='/'>Climate Solutions</a></li>
            <li><a href='/'>Projects</a></li>
            <li><a href='/'>Jobs</a></li>
            <li><a href='/'>Training</a></li>
            <li><a href='/'>Login</a></li>
        </ul>
    </div>
  )
}

export default Navbar