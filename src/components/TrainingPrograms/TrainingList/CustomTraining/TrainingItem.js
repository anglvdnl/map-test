import React, { useState } from 'react'
import { BsBookmark } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import styles from '../TrainingList.module.scss'
import AdditionalInfo from './AdditionalInfo'


function TrainingItem(props) {
    const item = props.listItem
    const [dropDown, setDropDown] = useState(false)

    return (
        <>
            <div onClick={() => setDropDown(!dropDown)} className={styles.Wrapper}>
                <div className={styles.Sec1}>
                    <div className={styles.Headers}>
                        <h1>{item.title}</h1>
                        <a href={item.programWebsiteUrl}>Host: {item.host}</a>
                        <p>{item.description}</p>
                    </div>
                    <BsBookmark />
                </div>
                <div className={styles.Sec2}>
                    <div className={styles.Info}>
                        <span className={styles.Location}>
                            <IoLocationOutline />
                            {item.location}
                        </span>
                        <div className={styles.Tags}>
                            {item.tags.map((tag, index) => (
                                <div className={styles.Tag} key={index}>{tag}</div>
                            ))}
                        </div>
                    </div>
                    {dropDown
                        ? <RiArrowDropUpLine />
                        : <RiArrowDropDownLine />
                    }
                </div>
            </div>
            {dropDown
                ? <AdditionalInfo setDropDown={setDropDown} dropDown={dropDown} item={item} />
                : null
            }
        </>
    )
}

export default TrainingItem