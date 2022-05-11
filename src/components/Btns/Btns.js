import React, { useState } from 'react'
import classes from './Btns.module.scss'

function Btns(props) {

  return (
      <div className={classes.Btns}>
            <button
            onClick={() => props.setView(false)}
            className={props.view ? '' : classes.active}>List View</button>
            <button
            data-testid="map-btn"
            onClick={() => props.setView(true)}
            className={props.view ? classes.active : ''}>Map View</button>
      </div>
  )
}

export default Btns