import React from 'react'
import styles from './Carousel.module.scss'

function CarouselDot(props) {
    return (
        <div>{props.index === props.currentIndex
            ? <div className={styles.activeDot}>

            </div>
            : <div onClick={() => props.set(props.index)} className={styles.Dot}>

            </div>}
        </div>
    )
}

export default CarouselDot