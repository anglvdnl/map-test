import React, { useState } from 'react'
import styles from './TrainingPrograms.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import TrainingMap from './TrainingMap/TrainingMap'
import TrainingList from './TrainingList/TrainingList'
import TrainingFilter from './TrainingsFilter/TrainingFilter'
import { trainingsActions } from '../../app/slices/trainingSlice'

function TrainingPrograms(props) {
    const dispatch = useDispatch()
    const trainingsData = useSelector(state => state._train)
    const [view, setView] = useState(true)

    function handleSearch(event) {
        dispatch(trainingsActions.updateSearch(event.target.value))
    }

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
                    <input placeholder='Search a training title or company' onChange={handleSearch} value={trainingsData.filter.searchValue} />
                    <TrainingFilter />
                    <h3>Showing all {trainingsData.filteredTrainings.length} projects.</h3>
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