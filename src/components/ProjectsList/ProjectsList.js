import react from 'react'
import { useSelector } from 'react-redux'
import CustomListView from '../CustomListView/CustomListView'
import classes from './ProjectsList.module.scss'

function ProjectsList(props) {
  const projectsData = useSelector(state => state._proj)
  
  return (
    <div className={classes.List}>
      {projectsData.projects.map((listItem, index) => (
        <CustomListView key={index} listItem={listItem} />
      ))}
    </div>
  )
}

export default ProjectsList