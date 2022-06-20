import React, { useState } from 'react'
import styles from './TrainingPrograms.module.scss'
import { useSelector } from 'react-redux'
import TrainingMap from './TrainingMap/TrainingMap'
import TrainingList from './TrainingList/TrainingList'

function TrainingPrograms(props) {
    const trainingsData = useSelector(state => state._train)
    const [view, setView] = useState(true)

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
            <div className={styles.Section}>
                <div className={styles.Info}>
                    <nav>
                        <h1>Climate Solution Training</h1>
                        <button>Add Project</button>
                    </nav>
                    <input placeholder='Search a training title or company' />
                    <h3>Showing all {trainingsData.trainings.length} projects.</h3>
                </div>
                {view
                    ?
                    <TrainingMap zoom={4} mapStartPos={props.mapStartPos} />
                    :
                    <TrainingList />}
            </div>
        </>
    )
}

export default TrainingPrograms