import React from 'react'
import classes from './Navbar.module.scss'
import logo from '../../Images/logo.png'

function Navbar() {
  return (
    <div className={classes.Navbar}>
        <h1>Logo</h1>
        <ul>
            <li><a href='/'>Link1</a></li>
            <li><a href='/'>Link2</a></li>
            <li><a href='/'>Link3</a></li>
            <li><a href='/'>Link4</a></li>
            <li><a href='/'>Login</a></li>
        </ul>
    </div>
  )
}

export default Navbar