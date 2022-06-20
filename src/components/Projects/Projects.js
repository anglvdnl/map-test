import React, { useState } from 'react'
import styles from './Projects.module.scss'
import ProjectsMap from './ProjectsMap/ProjectsMap'
import ProjectsList from './ProjectsList/ProjectsList'
import { useSelector, useDispatch } from 'react-redux'
import FilterSection from './ProjectsFilters/FilterSection'
import { projectsActions } from '../../app/slices/projectsSlice'

function PMainSection(props) {
  const projectsData = useSelector(state => state._proj)
  const [view, setView] = useState(true)
  const dispatch = useDispatch()

  function handleSearchChange(event) {
    dispatch(projectsActions.updateSearch(event.target.value));
  }

  return (
    <>
      <div className={styles.Btns}>
        <button
          onClick={() => setView(false)}
          className={view ? '' : styles.active}>List View</button>
        <button
          data-testid="map-btn"
          onClick={() => setView(true)}
          className={view ? styles.active : ''}>Map View</button>
      </div>
      <div className={styles.MainSec}>
        <div className={styles.MainSecInfo}>
          <nav>
            <h1>Climate Solution Projects</h1>
            <button>Add Project</button>
          </nav>
          <p>We actively search government and corporate websites to keep you updated on climate-related projects around the country. Each project has a link to the primary developer and contact details for the Engineering, Procurement and Construction company where possible. Each project has a link to the primary developer, its status and an estimated number of jobs (using JEDI). Job numbers are not official. Depending on the status of the project, your skills may be more or less relevant.</p>
          <input placeholder='Search a project title or company' onChange={handleSearchChange} value={projectsData.filter.searchValue} />
          <FilterSection />
          <h3>Showing all {projectsData.filteredProjects.length} projects.</h3>
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