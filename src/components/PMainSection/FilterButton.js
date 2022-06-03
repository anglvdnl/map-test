import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { projectsActions } from '../../app/slices/projectsSlice'
import classes from './PMainSections.module.scss'

function FilterButton(props) {
    const dispatch = useDispatch()
    const projectsState = useSelector(state => state._proj)

    const currentValue = props.value

    const isActive = projectsState.provinceFilters.includes(currentValue)

    return (
        <li className={isActive ? classes.active : ''} onClick={handleProvinceClick}>{currentValue}</li>
    )
    
    function handleProvinceClick() {
        if (isActive) {
            dispatch(projectsActions.removeFilter(currentValue))
        } else {
            dispatch(projectsActions.addFilters(currentValue))
        }
    }
}

export default FilterButton