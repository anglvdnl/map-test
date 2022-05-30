import React from 'react'
import { getImgByStatus, getTextByStatus } from './statusController'
import classes from './Status.module.scss'

function Status(props) {
    return (
        <div className={classes.Status}>
            <img src={getImgByStatus(props.status)} />
            <p>{getTextByStatus(props.status)}</p>
        </div>
    )
}

export default Status