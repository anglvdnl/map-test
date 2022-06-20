import React from 'react'
import { useSelector } from 'react-redux'
import { getUniqueValue } from '../../../data/utils/getUniqueValue'
import FilterButton from './FilterButton'
import styles from '../Projects.module.scss'

function Filters(props) {
    const projectsState = useSelector(state => state._proj)

    const filterType = props.filterType;
    const fliteredOptions = getUniqueValue(projectsState.projects, filterType)

    return (
        <div className={styles.Filtered}>
            <ul>
                {fliteredOptions.map((value, index) => (
                    <FilterButton value={value} filterType={filterType} key={index} />
                ))}
            </ul>
        </div>
    )
}

export default Filters