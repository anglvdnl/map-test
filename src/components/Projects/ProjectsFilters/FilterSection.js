import React, { useRef, useState } from 'react'
import styles from '../Projects.module.scss'
import Filters from './Filters'
import { IoIosArrowDown } from 'react-icons/io'
import { projectsActions } from '../../../app/slices/projectsSlice'
import useOnClickOutside from 'use-onclickoutside'
import { useDispatch } from 'react-redux'


function FilterSection() {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState({ type: '', isActive: false });

  const ref = useRef();
  useOnClickOutside(ref, () => { setSelectedFilter({ type: '', isActive: false }) });

  const handleFilterSelect = (filterType) => {
    const isActive = selectedFilter.type === filterType
      ? !selectedFilter.isActive
      : true;

    setSelectedFilter({ type: filterType, isActive: isActive });
  }

  const isFilterActive = (filterType) => selectedFilter.type === filterType && selectedFilter.isActive

  return (
    <div className={styles.Filters}>
      <div className={styles.Items} ref={ref}>
        <span>
          <div onClick={() => handleFilterSelect("province")} className={styles.Item}>
            <li>
              Location
            </li>
            <IoIosArrowDown />
          </div>
          {isFilterActive("province") && <Filters filterType={selectedFilter.type} />}
        </span>
        <span>
          <div onClick={() => handleFilterSelect("tags")} className={styles.Item}>
            <li>
              Climate Solution
            </li>
            <IoIosArrowDown />
          </div>
          {isFilterActive("tags") && <Filters filterType={selectedFilter.type} />}
        </span>
      </div>
      <li className={styles.RFilter} onClick={() => dispatch(projectsActions.resetFilters())}>Reset Filter</li>
    </div>
  )
}

export default FilterSection