import React from 'react'
import classes from './Navbar.module.scss'
import logo from '../../static/Images/logo.svg'
import {
  Link,
  Outlet
} from "react-router-dom";
import { useSelector } from 'react-redux';

function Navbar() {
  const user = useSelector(state => state._auth)

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
          <li><Link to="/auth">{user.isLogged ? "Profile" : "Login"}</Link></li>
        </ul>
      </div>
      <Outlet />
    </React.Fragment>

  )
}

export default Navbar