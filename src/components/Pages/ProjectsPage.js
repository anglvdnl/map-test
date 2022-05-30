import React from 'react'
import PMainSection from '../PMainSection/PMainSection'

function ProjectsPage(props) {
    return (
        <div>
            <PMainSection data={props.data} mapStartPos={props.mapStartPos} />
        </div>
    )
}

export default ProjectsPage