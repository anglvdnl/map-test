import react from 'react'
import CustomListView from '../CustomListView/CustomListView'
import classes from './ProjectsList.module.scss'

function ProjectsList(props) {

  return (
    <div className={classes.List}>
      {props.data.map((listItem, index) => (
        <CustomListView key={index} listItem={listItem} />
      ))}
    </div>
  )
}

export default ProjectsList