import React from 'react'
import { BsBookmark } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import classes from "./CustomPopup.module.scss";
import Status from '../Status/Status';

function CustomPopup(props) {
    const project = props.project
    return (
        <React.Fragment>
            <div className={classes.CustomPopup}>
                <nav className={classes.PopupNav}>
                    <img className={classes.MainImg} src={require(`../../static/Images/${project.popupImg + '.png'}`)} alt={`${project.tags}`} />
                    <Status status={project.status} />
                    <BsBookmark />
                </nav>
                <h1>{project.title}</h1>
                <h3>Developer: {project.developerName}</h3>
                <span className={classes.Location}>
                    <IoLocationOutline />
                    {project.location}
                </span>
                <div>
                    <span className={classes.Tag}>{project.tags}</span>
                    <button>More</button>
                </div>
            </div>

        </React.Fragment>
    )
}

export default CustomPopup