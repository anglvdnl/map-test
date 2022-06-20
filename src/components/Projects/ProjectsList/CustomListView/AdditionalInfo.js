import React from 'react'
import styles from './CustomListView.module.scss'

function AdditionalInfo(props) {
    return (
        <div className={styles.AddInfo}>
            <p>Since: {props.listItem.since}</p>
            <p>Number of Construction Jobs: {props.listItem.numConstructionJobs}</p>
            <p>Number of Permanent Jobs: {props.listItem.numPermanentJobs}</p>
            <button onClick={() => { navigator.clipboard.writeText(props.listItem.developerUrl) }}>Copy Project Link</button>
        </div>
    )
}

export default AdditionalInfo