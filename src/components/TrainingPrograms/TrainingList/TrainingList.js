import React from 'react'
import { useSelector } from 'react-redux'
import TrainingItem from './CustomTraining/TrainingItem'
import styles from './TrainingList.module.scss'

function TrainingList() {
    const trainingsData = useSelector(state => state._train)

    return (
        <div className={styles.List}>
            {trainingsData.filteredTrainings.map((listItem, index) => (
                <TrainingItem key={index} listItem={listItem} />
            ))}
        </div>
    )
}

export default TrainingList