import React from 'react';
import styles from './Trumpet.module.css';
import trumpet from '../../assets/pngegg1.png'

function Trumpet() {
    return(
          <img  className={styles.trumpet} src={trumpet}/>
    );

}

export default Trumpet;