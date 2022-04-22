import React from 'react'
import { SwitchTransition } from 'react-transition-group'
import { CSSTransition } from 'react-transition-group'
import classes from './Btns.module.scss'

function Btns(props) {

  return (
      <div className={classes['Btns']}>
          <CSSTransition 
            classNames="fade"
            timeout={200}
            in={props.view}
            >
              <button 
              onClick={() => props.setView(true)}
              className={props.view ? classes.active : 'hui'}>List View</button>
          </CSSTransition>
          <CSSTransition 
          classNames="fade"
          timeout={200}
          in={props.view}>
            <button
            onClick={() => props.setView(false)}  
            className={props.view ? 'hui' : classes.active}>Map View</button>
          </CSSTransition>
      </div>
  )
}

export default Btns