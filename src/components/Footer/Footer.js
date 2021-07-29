import React from 'react';
import styles from './Footer.module.css'
import jazz from '../../assets/jazzpartition.jpg'
import jazz2 from '../../assets/jazzpartition2.jpg'

function Footer() {
    return(
            <div className={styles.jazzPartitions}>
                <img className={styles.jazz} alt='jazz' src={jazz}/>
                <img className={styles.jazz2} alt='jazz2' src={jazz2}/>
            </div>
    );

}

export default Footer;