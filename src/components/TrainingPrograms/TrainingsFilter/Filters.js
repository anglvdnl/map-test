import React from 'react'
import styles from './TrainingFilter.module.scss'
import { getUniqueValue } from '../../../data/utils/getUniqueValue'
import { useSelector } from 'react-redux'
import FilterItem from './FilterItem'

function Filters(props) {
    const trainingsData = useSelector(state => state._train)
    const filterType = props.filterType

    let filterOptions = getUniqueValue(trainingsData.trainings, filterType)

    return (
        <div className={styles.Filtered}>
            <ul>
                {filterOptions.map((value, index) => (
                    <FilterItem filterType={filterType} value={value} key={index} />
                ))}
            </ul>
        </div>
    )
}

export default Filters