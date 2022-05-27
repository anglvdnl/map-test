import React, { useState } from 'react'
import classes from './PMainSections.module.scss'
import ProjectsMap from '../ProjectsMap/ProjectsMap'
import ProjectsList from '../ProjectsList/ProjectsList'
import { IoIosArrowDown } from 'react-icons/io'

function PMainSection(props) {

  const [view, setView] = useState(true)

  return (
    <div className={classes.MainSec}>
      <div className={classes.Btns}>
        <button
          onClick={() => setView(false)}
          className={view ? '' : classes.active}>List View</button>
        <button
          data-testid="map-btn"
          onClick={() => setView(true)}
          className={view ? classes.active : ''}>Map View</button>
      </div>
      <div className={classes.MainSecInfo}>
        <nav>
          <h1>Climate Solution Projects</h1>
          <button>Add Project</button>
        </nav>
        <p>We actively search government and corporate websites to keep you updated on climate-related projects around the country. Each project has a link to the primary developer and contact details for the Engineering, Procurement and Construction company where possible. Each project has a link to the primary developer, its status and an estimated number of jobs (using JEDI). Job numbers are not official. Depending on the status of the project, your skills may be more or less relevant.</p>
        {/* <input placeholder='Search a project title or company' /> */}
        {/* <ul>
          <div>
            <li><a href='/'>Project Status <IoIosArrowDown className='dropdown' /></a></li>
            <li><a href='/'>Province <IoIosArrowDown className='dropdown' /></a></li>
            <li><a href='/'>Climate Solution <IoIosArrowDown className='dropdown' /></a></li>
            <li><a href='/'>Total Numer of Jobs <IoIosArrowDown className='dropdown' /></a></li>
          </div>
          <li className={classes.RFilter}>
            <a href='/'>Reset Filter
              <span className={classes.FilterStatus}></span>
            </a>
          </li>
        </ul> */}
        <h3>Showing all {props.data.length} projects.</h3>
      </div>
      {view
        ?
        <ProjectsMap data={props.data} zoom={4} mapStartPos={props.mapStartPos} />
        :
        <ProjectsList />}
    </div>
  )
}

export default PMainSection