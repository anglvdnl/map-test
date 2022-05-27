import React from 'react'
import PMainSection from '../components/views/PMainSection/PMainSection'

function ProjectsPage(props) {
    return (
        <div>
            <PMainSection data={props.data} mapStartPos={props.mapStartPos} />
        </div>
    )
}

export default ProjectsPage