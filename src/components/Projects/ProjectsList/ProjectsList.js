import { useSelector } from 'react-redux'
import CustomListView from './CustomListView/CustomListView'
import styles from './ProjectsList.module.scss'

function ProjectsList() {
  const projectsData = useSelector(state => state._proj)

  return (
    <div className={styles.List}>
      {projectsData.filteredProjects.map((listItem, index) => (
        <CustomListView key={index} listItem={listItem} />
      ))}
    </div>
  )
}

export default ProjectsList