import React, { useRef, useState } from 'react'
import styles from './TrainingFilter.module.scss'
import { useOnClickOutside } from '../../../data/hooks/useOnClickOutside'
import { IoIosArrowDown } from 'react-icons/io'
import Filters from './Filters'
import { useDispatch } from 'react-redux'
import { trainingsActions } from '../../../app/slices/trainingSlice'

function TrainingFilter() {
    const dispatch = useDispatch()
    const [activeFilter, setActiveFilter] = useState({ type: "", isActive: false })

    const ref = useRef();
    useOnClickOutside(ref, () => { setActiveFilter({ type: '', isActive: false }) });

    function handleFilterSelect(filterType) {

        const isActive = activeFilter.type === filterType
            ? !activeFilter.isActive
            : true
        setActiveFilter({ type: filterType, isActive: isActive })
    }

    function isFilterActive(filterType) {
        return activeFilter.type === filterType && activeFilter.isActive
    }

    return (
        <div className={styles.Filters}>
            <div className={styles.Items} ref={ref}>
                <span>
                    <li onClick={() => handleFilterSelect("certType")}>
                        Certification Type <IoIosArrowDown className='dropdown' />
                    </li>
                    {isFilterActive("certType") && <Filters filterType={activeFilter.type} />}
                </span>
                <span>
                    <li onClick={() => handleFilterSelect("province")}>
                        Location <IoIosArrowDown className='dropdown' />
                    </li>
                    {isFilterActive("province") && <Filters filterType={activeFilter.type} />}
                </span>
                <span>
                    <li onClick={() => handleFilterSelect("tags")}>
                        Climate Solution <IoIosArrowDown className='dropdown' />
                    </li>
                    {isFilterActive("tags") && <Filters filterType={activeFilter.type} />}
                </span>
                <span>
                    <li onClick={() => handleFilterSelect("language")}>
                        Language <IoIosArrowDown className='dropdown' />
                    </li>
                    {isFilterActive("language") && <Filters filterType={activeFilter.type} />}
                </span>
            </div>
            <li className={styles.RFilter} onClick={() => dispatch(trainingsActions.resetFilters())}>Reset Filter</li>
        </div>
    )
}

export default TrainingFilter