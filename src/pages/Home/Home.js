import React from 'react';
import jpImage from '../../assets/jpmuziekmaken.jpg';
import styles from './home.module.css'

function Home() {
    return(
        <div className={styles.home}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aperiam atque esse et illo iure nobis non placeat. Iure qui sapiente similique sit vero. Consequatur doloremque non reiciendis rerum!</h3>
            <img className={styles.picture} alt='foto van jp' src={jpImage}/>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aperiam atque esse et illo iure nobis non placeat. Iure qui sapiente similique sit vero. Consequatur doloremque non reiciendis rerum!</h3>
        </div>
    );
}

export default Home;