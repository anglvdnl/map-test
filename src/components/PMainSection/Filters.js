import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { projectsActions } from '../../app/slices/projectsSlice'
import { getUniqueValue } from '../../data/utils/getUniqueValue'
import FilterButton from './FilterButton'
import classes from './PMainSections.module.scss'

function Filters(props) {
    const dispatch = useDispatch()
    const projectsState = useSelector(state => state._proj)
    let filterContent

    const [cls, setCls] = useState(false)

    function handleProvinceClick(value) {
        if (projectsState.provinceFilters.includes(value)) {
            dispatch(projectsActions.removeFilter(value))
            setCls(false)
        } else {
            dispatch(projectsActions.addFilters(value))
        }
    }

    let provinces = getUniqueValue(projectsState.projects, "province")
    let tags = getUniqueValue(projectsState.projects, "tags")

    if (props.provFilter) {
        filterContent = (
            <div className={classes.Filtered}>
                <ul>
                    {provinces.map((value, index) => (
                        <FilterButton value={value} key={index} />
                    ))}
                </ul>
            </div>
        )
    }

    if (props.climFilter) {
        filterContent = (
            <div className={classes.Filtered}>
                <ul>
                    {tags.map((value, index) => (
                        <li onClick={() => dispatch(projectsActions.addFilters(value))} key={index}>{value}</li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        filterContent
    )
}

export default Filters