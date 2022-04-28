import React from 'react'
import classes from './MainSec.module.scss'
import Map from '../Map/Map'
import List from '../List/List'
import { IoIosArrowDown } from 'react-icons/io'

function MainSec(props) {

  return (
    <div className={classes.MainSec}>
      <div className={classes.MainSecInfo}>
        <nav>
          <h1>Climate Solution Projects</h1>
          <button>Add Project</button>
        </nav>
        <p>We actively search government and corporate websites to keep you updated on climate-related projects around the country. Each project has a link to the primary developer and contact details for the Engineering, Procurement and Construction company where possible. Each project has a link to the primary developer, its status and an estimated number of jobs (using JEDI). Job numbers are not official. Depending on the status of the project, your skills may be more or less relevant.</p>
        <input placeholder='Search a projec title or company'/>
        <ul>
          <div>
            <li><a href='/'>Project Status <IoIosArrowDown className='dropdown'/></a></li>
            <li><a href='/'>Province <IoIosArrowDown className='dropdown'/></a></li>
            <li><a href='/'>Climate Solution <IoIosArrowDown className='dropdown'/></a></li>
            <li><a href='/'>Total Numer of Jobs <IoIosArrowDown className='dropdown'/></a></li>
          </div>
          <li className={classes.RFilter}>
            <a href='/'>Reset Filter
              <span className={classes.FilterStatus}></span>
            </a>
          </li>
        </ul>
        <h3>Showing all projects.</h3>
      </div>
      {props.view 
      ?
      <Map data={props.data} center={{ lat: 52.8174847, lng: 10.6912322 }} zoom={4} position={props.position}/>
      :
      <List data-testid="test-list" />}
    </div>
  )
}

export default MainSec