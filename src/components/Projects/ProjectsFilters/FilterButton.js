import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { projectsActions } from '../../../app/slices/projectsSlice'
import styles from '../Projects.module.scss'

function FilterButton(props) {
    const filterType = props.filterType;
    const currentValue = props.value;

    const dispatch = useDispatch();
    const projectsState = useSelector(state => state._proj);

    const isActive = projectsState.filter[filterType].includes(currentValue)

    function handleClick() {
        if (isActive) {
            dispatch(projectsActions.removeFilter({ type: filterType, value: currentValue }))
        } else {
            dispatch(projectsActions.addFilters({ type: filterType, value: currentValue }))
        }
    }

    return (
        <li className={isActive ? styles.active : ''} onClick={handleClick}>
            {currentValue}
        </li>
    )

}

export default FilterButton