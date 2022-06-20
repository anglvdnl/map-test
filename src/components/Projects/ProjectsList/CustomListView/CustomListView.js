import React, { useState } from 'react'
import Status from '../../../Status/Status'
import styles from './CustomListView.module.scss'
import { BsBookmark } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import AdditionalInfo from './AdditionalInfo';
import '../../../../index.scss'

function CustomListView(props) {
    const [dropDown, setDropDown] = useState(false)

    return (
        <>
            <div onClick={() => setDropDown(!dropDown)} className={styles.Wrapper}>
                <div className={styles.Fsec}>
                    <img className={styles.Img} src={require(`../../../../static/Images/${props.listItem.popupImg + '.png'}`)} alt={`${props.listItem.tags}`} />
                    <div className={styles.Info}>
                        <div className={styles.Headers}>
                            <h3>{props.listItem.title}</h3>
                            <h4>Developer: <a href={props.listItem.developerUrl}> {props.listItem.developerName}</a></h4>
                        </div>
                        <div className={styles.Loc}>
                            <div>
                                <IoLocationOutline />
                                {props.listItem.location}
                            </div>
                            <span className={styles.Tag}>{props.listItem.tags}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.Ssec}>
                    <div className={styles.Status}>
                        <Status status={props.listItem.status} />
                        <BsBookmark />
                    </div>
                    <div className={styles.Dropdown}>
                        {dropDown
                            ? <RiArrowDropUpLine />
                            : <RiArrowDropDownLine />
                        }
                    </div>
                </div>
            </div>
            {dropDown
                ? <AdditionalInfo setDropDown={setDropDown} dropDown={dropDown} listItem={props.listItem} />
                : null
            }
        </>
    )
}

export default CustomListView