import React from 'react'
import { getImgByStatus, getTextByStatus } from './statusController'
import styles from './Status.module.scss'

function Status(props) {
    return (
        <div className={styles.Status}>
            <img src={getImgByStatus(props.status)} alt='' />
            <p>{getTextByStatus(props.status)}</p>
        </div>
    )
}

export default Status