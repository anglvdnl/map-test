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
                    <div onClick={() => handleFilterSelect("certType")} className={styles.Item}>
                        <li>
                            Certification Type
                        </li>
                        <IoIosArrowDown />
                    </div>
                    {isFilterActive("certType") && <Filters filterType={activeFilter.type} />}
                </span>
                <span>
                    <div onClick={() => handleFilterSelect("province")} className={styles.Item}>
                        <li>
                            Location
                        </li>
                        <IoIosArrowDown />
                    </div>
                    {isFilterActive("province") && <Filters filterType={activeFilter.type} />}
                </span>
                <span>
                    <div onClick={() => handleFilterSelect("tags")} className={styles.Item}>
                        <li>
                            Climate Solution
                        </li>
                        <IoIosArrowDown />
                    </div>
                    {isFilterActive("tags") && <Filters filterType={activeFilter.type} />}
                </span>
                <span>
                    <div onClick={() => handleFilterSelect("language")} className={styles.Item}>
                        <li>
                            Language
                        </li>
                        <IoIosArrowDown />
                    </div>
                    {isFilterActive("language") && <Filters filterType={activeFilter.type} />}
                </span>
            </div>
            <li className={styles.RFilter} onClick={() => dispatch(trainingsActions.resetFilters())}>Reset Filter</li>
        </div>
    )
}

export default TrainingFilter