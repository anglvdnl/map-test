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
          <li onClick={() => handleFilterSelect("province")}>
            Location <IoIosArrowDown className='dropdown' />
          </li>
          {isFilterActive("province") && <Filters filterType={selectedFilter.type} />}
        </span>
        <span>
          <li onClick={() => handleFilterSelect("tags")}>
            Climate Solution <IoIosArrowDown className='dropdown' />
          </li>
          {isFilterActive("tags") && <Filters filterType={selectedFilter.type} />}
        </span>
      </div>
      <li className={styles.RFilter} onClick={() => dispatch(projectsActions.resetFilters())}>Reset Filter</li>
    </div>
  )
}

export default FilterSection