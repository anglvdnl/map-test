import React, { useState } from 'react'
import { BsBookmark } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import styles from "./CustomTrainingPopup.module.scss";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { CSSTransition } from 'react-transition-group';

function CustomTrainingPopup(props) {
    const training = props.data
    const [tagsActive, setTagsActive] = useState(false)

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
                        <h3>Languange: {training.language}</h3>
                        <BsBookmark />
                    </nav>
                    <h1>{training.title}</h1>
                    <a href={training.programWebsiteUrl}>Host: {training.host}</a>
                    <p>{training.description}</p>
                    <p>{training.eligibility}</p>
                    <p>Program format: {training.programFormat}</p>
                    <span className={styles.Location}>
                        <IoLocationOutline />
                        {training.location}
                    </span>
                    <div className={tagsActive ? styles.TagActive : styles.Tag}>
                        {training.tags.length > 1
                            ? <div className={styles.Tags} onClick={() => setTagsActive(!tagsActive)}>
                                <p>Tags</p> {tagsActive ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                                <CSSTransition in={tagsActive} timeout={300} unmountOnExit classNames={{ ...styles }}>
                                    <div className={training.tags.length > 3 ? styles.LongList : styles.TagList}>
                                        {tagsActive && training.tags.map((tag, index) => (
                                            <p key={index}>{tag}</p>
                                        ))}
                                    </div>
                                </CSSTransition>
                            </div>
                            : training.tags}
                    </div>
                    <button>More</button>
                </div>
            </div>
        </React.Fragment >
    )
}

export default CustomTrainingPopup