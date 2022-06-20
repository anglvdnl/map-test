import React from 'react'
import TrainingPrograms from '../TrainingPrograms/TrainingPrograms'
import styles from './Pages.module.scss'
import './index.scss'

function TrainingPage(props) {
    return (
        <div className={styles.TP}>
            <TrainingPrograms mapStartPos={props.mapStartPos} />
        </div>
    )
}

export default TrainingPage