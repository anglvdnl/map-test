import React, { useState } from 'react'
import { BsBookmark } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import styles from "./CustomTrainingPopup.module.scss";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { CSSTransition } from 'react-transition-group';

function CustomTrainingPopup(props) {
    const training = props.data
    const [addInfo, setAddInfo] = useState({ type: '', isActive: false })

    const isInfoActive = (infoType) => { return infoType === addInfo.type && addInfo.isActive }

    return (
        <React.Fragment>
            <div className={styles.CustomPopup}>
                <div className={props.trainings.length === 1 ? styles.Wrapper : undefined}>
                    <nav className={styles.PopupNav}>
                        <div>
                            <h2>{training.certType}</h2>
                            <h2>{training.programCost}</h2>
                            <h2>{training.programLength}</h2>
                            <h2>{training.courseLoad}</h2>
                        </div>
                        <div>
                            <h3>Languange: {training.language}</h3>
                            <h3>Program format: <br /> {training.programFormat}</h3>
                        </div>
                        <BsBookmark />
                    </nav>
                    <h1>{training.title}</h1>
                    <a href={training.programWebsiteUrl}>Host: {training.host}</a>
                    <p className={styles.Info}
                        onMouseEnter={() => setAddInfo({ type: "description", isActive: true })}
                        onMouseLeave={() => setAddInfo({ isActive: false })}
                    >Description{isInfoActive("description") && <span>{training.description}</span>}</p>
                    <p className={styles.Info}
                        onMouseEnter={() => setAddInfo({ type: "eligibility", isActive: true })}
                        onMouseLeave={() => setAddInfo({ isActive: false })}
                    >Eligibility{isInfoActive("eligibility") && <span>{training.eligibility}</span>}</p>
                    <span className={styles.Location}>
                        <IoLocationOutline />
                        {training.location}
                    </span>
                    <div className={styles.Tags}>
                        {training.tags.map((tag, index) => (
                            <div className={styles.Tag} key={index}>{tag}</div>
                        ))}
                    </div>
                    <button>More</button>
                </div>
            </div>
        </React.Fragment >
    )
}

export default CustomTrainingPopup