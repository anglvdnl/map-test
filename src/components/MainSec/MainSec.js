import React from 'react'
import classes from './MainSec.module.scss'
import Map from '../Map/Map'
import List from '../List/List'

function MainSec(props) {
  return (
    <div className={classes.MainSec}>
      {props.view 
      ?
      <List />
      :
      <Map data={props.data} center={{ lat: 52.8174847, lng: 10.6912322 }} zoom={4} position={props.position}/>}
    </div>
  )
}

export default MainSec