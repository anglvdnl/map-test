import React from 'react'
import { BsBookmark } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import styles from "./CustomPopup.module.scss";
import Status from '../../../Status/Status';

function CustomPopup(props) {
    const project = props.project
    return (
        <React.Fragment>
            <div className={styles.CustomPopup}>
                <nav className={styles.PopupNav}>
                    <img className={styles.MainImg} src={require(`../../../../static/Images/${project.popupImg + '.png'}`)} alt={`${project.tags}`} />
                    <Status status={project.status} />
                    <BsBookmark />
                </nav>
                <h1>{project.title}</h1>
                <a href={project.developerUrl}>Developer: {project.developerName}</a>
                <span className={styles.Location}>
                    <IoLocationOutline />
                    {project.location}
                </span>
                <div>
                    <span className={styles.Tag}>{project.tags}</span>
                    <button>More</button>
                </div>
            </div>

        </React.Fragment>
    )
}

export default CustomPopup