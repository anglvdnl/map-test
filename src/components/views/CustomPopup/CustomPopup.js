import React from 'react'
import { BsBookmark } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import classes from "./CustomPopup.module.scss";
import Status from '../Status/Status';

function CustomPopup(props) {
    return (
        <React.Fragment>
            <div className={classes.CustomPopup}>
                <nav className={classes.PopupNav}>
                    <img className={classes.MainImg} src={require(`../../../Static/Images/${props.marker.popupImg + '.png'}`)} alt={`${props.marker.tags}`} />
                    <Status status={props.marker.status} />
                    <BsBookmark />
                </nav>
                <h1>{props.marker.title}</h1>
                <h3>Developer: {props.marker.developerName}</h3>
                <span className={classes.Location}>
                    <IoLocationOutline />
                    {props.marker.location}
                </span>
                <div>
                    <span className={classes.Tag}>{props.marker.tags}</span>
                    <button>More</button>
                </div>
            </div>

        </React.Fragment>
    )
}

export default CustomPopup