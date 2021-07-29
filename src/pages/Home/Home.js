import React from 'react';
import jpImage from '../../assets/jpmuziekmaken.jpg';
import styles from './home.module.css'

function Home() {
    return(
        <div className={styles.home}>
            <img className={styles.picture} alt='foto van jp' src={jpImage}/>
        </div>
    );
}

export default Home;