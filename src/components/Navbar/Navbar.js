import React, { useRef, useState } from 'react'
import styles from './Navbar.module.scss'
import logo from '../../static/Images/logo.svg'
import {
  Link,
  Outlet
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useOnClickOutside } from '../../data/hooks/useOnClickOutside';

function Navbar() {
  const user = useSelector(state => state._auth)

  const [isBgActive, setIsBgActive] = useState(false)

  const ref = useRef();
  const btnRef = useRef();
  useOnClickOutside([ref, btnRef], () => setIsBgActive(false));

  const handleBgOpen = () => {
    isBgActive ? setIsBgActive(false) : setIsBgActive(true)
  }

  return (
    <React.Fragment>
      <div className={styles.Navbar}>
        <img alt='' src={logo} />
        <div
          ref={btnRef}
          className={!isBgActive
            ? styles.BurgerBtn
            : `${styles.BurgerBtn} ${styles.BurgerBtnActive}`}
          onClick={handleBgOpen}>
          <div className={styles.iconLeft}></div>
          <div className={styles.iconRight}></div>
        </div>
        <ul className={styles.NavItems}>
          <li><Link to="/">Projects</Link></li>
          <li><Link to="/trainings">Training</Link></li>
          <li><Link to="/auth">{user.isLogged ? "Profile" : "Login"}</Link></li>
        </ul>
      </div>
      <div
        className={!isBgActive
          ? styles.BgMenu
          : `${styles.BgMenuActive}`
        }
        ref={ref}>
        <ul className={styles.BgItems}>
          <li onClick={() => setIsBgActive(false)}><Link to="/">Projects</Link></li>
          <li onClick={() => setIsBgActive(false)}><Link to="/trainings">Training</Link></li>
          <li onClick={() => setIsBgActive(false)}><Link to="/auth">{user.isLogged ? "Profile" : "Login"}</Link></li>
        </ul>
      </div>
      <Outlet />
    </React.Fragment>

  )
}

export default Navbar