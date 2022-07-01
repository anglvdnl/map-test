import React from 'react'
import styles from '../TrainingList.module.scss'

function AdditionalInfo(props) {
  const item = props.item

  return (
    <div className={`${styles.Wrapper} ${styles.AdditionalInfo}`}>
      <div className={styles.Info}>
        <div className={styles.Elig}>
          <h1>Prerequisites and Eligibility:</h1>
          <p>{item.eligibility}</p>
        </div>
        <div className={styles.OInfo}>
          <ul>
            <li>Program Format:{'\u00A0'}<p>{item.programFormat}</p></li>
            <li>Certification Type:{'\u00A0'}<p>{item.certType}</p></li>
            <li>Program Length:{'\u00A0'}<p>{item.programLength}</p></li>
            <li>Program Cost:{'\u00A0'}<p>{item.programCost}</p></li>
            <li>Course Load:{'\u00A0'}<p>{item.courseLoad}</p></li>
            <li>Language:{'\u00A0'}<p>{item.language}</p></li>
          </ul>
        </div>
      </div>
      <button className={styles.WBtn}>Program Website</button>
    </div>
  )
}

export default AdditionalInfo