import React from 'react'
import Projects from '../Projects/Projects'
import styles from './Pages.module.scss'

function ProjectsPage(props) {
    return (
        <div className={styles.Projects}>
            <Projects mapStartPos={props.mapStartPos} />
        </div>
    )
}

export default ProjectsPage