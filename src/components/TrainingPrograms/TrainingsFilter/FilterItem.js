import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { trainingsActions } from '../../../app/slices/trainingSlice'
import styles from './TrainingFilter.module.scss'

function FilterItem(props) {
    const filterType = props.filterType
    const currentValue = props.value

    const dispatch = useDispatch()
    const trainingsFilter = useSelector(state => state._train)

    const isActive = trainingsFilter.filter[filterType].includes(currentValue)

    function handleFilterItemSelect() {
        if (isActive) {
            dispatch(trainingsActions.removeFilter({ type: filterType, value: currentValue }))
        } else {
            dispatch(trainingsActions.addFilters({ type: filterType, value: currentValue }))
        }
    }

    return (
        <li className={isActive ? styles.active : undefined} onClick={handleFilterItemSelect}>{currentValue}</li>
    )
}

export default FilterItem