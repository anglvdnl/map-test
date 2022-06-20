import React, { useEffect, useState } from 'react'
import styles from './Carousel.module.scss'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import CarouselDot from './CarouselDot'

function Carousel(props) {
    const { children } = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const set = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className={styles.Carousel}>
            <div className={styles.Wrapper}>
                <div className={styles.Controls}>
                    <BsArrowLeftShort onClick={prev} className={styles.LeftArrow} />
                </div>
                <div className={styles.ContentWrapper}>
                    <div className={styles.Content}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                <div className={styles.Controls}>
                    <BsArrowRightShort onClick={next} className={styles.RightArrow} />
                </div>
            </div>
            <div className={styles.Dots}>
                {children.map((x, index) => (
                    <CarouselDot set={set} key={index} index={index} currentIndex={currentIndex} />
                ))}
            </div>
        </div>
    )
}

export default Carousel