import React, { useContext, useEffect, useState } from 'react'
import classes from './Navbar.module.scss'
import logo from '../../../Static/Images/logo.svg'
import {
  Link,
  Outlet
} from "react-router-dom";
import { DefaultUser, UserContext } from '../../../data/models/UserContext'

function Navbar() {

  const { user, setUser } = useContext(UserContext)

  return (
    <React.Fragment>
      <div className={classes.Navbar}>
        <img alt='' src={logo} />
        <ul>
          <li><Link to="/">Climate Solutions</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/training">Training</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          {user.isLoggedIn
            ? <li><Link onClick={() => { window.localStorage.clear(); setUser(DefaultUser); }} to="/">Logout</Link></li>
            : <li><Link to="/login">Login</Link></li>
          }
        </ul>
      </div>
      <Outlet />
    </React.Fragment>

  )
}

export default Navbar