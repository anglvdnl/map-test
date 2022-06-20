import React from 'react'
import styles from './Footer.module.scss'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import iae from '../../static/Images/iae.png'

function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.Email}>
                <h2>Join a community of workers building the net-zero future</h2>
                <h3>Subscribe for Iron and Earth’s newsletter</h3>
                <div>
                    <input placeholder='Enter your email...' />
                    <button>Sign Up</button>
                </div>
            </div>
            <div className={styles.InfoSection}>
                <div className={styles.Info}>
                    <div className={styles.Div1}>
                        <h2>IRON + EARTH</h2>
                        <h3>Climate Career Portal</h3>
                        <p>The Climate Career Portal is a digital skills transition platform, being developed by Iron & Earth, that connects fossil fuel and Indigenous workers with career pathways in the net-zero economy.</p>
                    </div>
                    <div className={styles.Div2}>
                        <h2>RESOURCES</h2>
                        <ul>
                            <li>Partners and Supporters</li>
                            <li>About us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className={styles.Div3}>
                        <h2>QUESTIONS?</h2>
                        <p>Email us at ccp@ironandearth.org</p>
                        <div>
                            <FaFacebookSquare />
                            <AiFillInstagram />
                            <AiFillTwitterSquare />
                        </div>
                    </div>
                </div>
                <div className={styles.Copyright}>
                    <div>
                        <p>Made possible by</p>
                        <img src={iae} />
                    </div>
                    <h3>COPYRIGHT 2022 IRON + EARTH</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer