import React from 'react'
import PMainSection from '../PMainSection/PMainSection'
import classes from './Pages.module.scss'

function ProjectsPage(props) {
    return (
        <div className={classes.Projects}>
            <PMainSection mapStartPos={props.mapStartPos} />
        </div>
    )
}

export default ProjectsPage