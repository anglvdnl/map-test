import React, { useRef, useState } from 'react'
import classes from './PMainSections.module.scss'
import ProjectsMap from '../ProjectsMap/ProjectsMap'
import ProjectsList from '../ProjectsList/ProjectsList'
import { IoIosArrowDown } from 'react-icons/io'
import { useSelector } from 'react-redux'
import Filters from './Filters'
import { useOnClickOutside } from '../../data/hooks/useOnClickOutside'

function PMainSection(props) {
  const projectsData = useSelector(state => state._proj)

  const [view, setView] = useState(true)

  const [provFilter, setProvFilter] = useState(false)
  const [climFilter, setClimFilter] = useState(false)

  const ref = useRef();

  useOnClickOutside(ref, () => { setProvFilter(false); setClimFilter(false) })

  return (
    <>
      <div className={classes.Btns}>
        <button
          onClick={() => setView(false)}
          className={view ? '' : classes.active}>List View</button>
        <button
          data-testid="map-btn"
          onClick={() => setView(true)}
          className={view ? classes.active : ''}>Map View</button>
      </div>
      <div className={classes.MainSec}>
        <div className={classes.MainSecInfo}>
          <nav>
            <h1>Climate Solution Projects</h1>
            <button>Add Project</button>
          </nav>
          <p>We actively search government and corporate websites to keep you updated on climate-related projects around the country. Each project has a link to the primary developer and contact details for the Engineering, Procurement and Construction company where possible. Each project has a link to the primary developer, its status and an estimated number of jobs (using JEDI). Job numbers are not official. Depending on the status of the project, your skills may be more or less relevant.</p>
          <input placeholder='Search a project title or company' />
          <div className={classes.Filters}>
            <div className={classes.Items} ref={ref}>
              <span>
                <li
                  onClick={() => { setProvFilter(!provFilter); setClimFilter(false) }}
                >Province <IoIosArrowDown className='dropdown' /></li>
                {provFilter && <Filters provFilter={provFilter} />}
              </span>
              <span>
                <li
                  onClick={() => { setClimFilter(!climFilter); setProvFilter(false) }}
                >Climate Solution <IoIosArrowDown className='dropdown' /></li>
                {climFilter && <Filters climFilter={climFilter} />}
              </span>
            </div>
            <li className={classes.RFilter}>Reset Filter</li>
          </div>
          <h3>Showing all {projectsData.projects.length} projects.</h3>
        </div>
        {view
          ?
          <ProjectsMap zoom={4} mapStartPos={props.mapStartPos} />
          :
          <ProjectsList />}
      </div>
    </>
  )
}

export default PMainSection