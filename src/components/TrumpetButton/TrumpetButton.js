import React from 'react';
import styles from './TrumpetButton.module.css';
import trumpet from '../../assets/pngegg1.png'

function TrumpetButton({ text }) {
    return(
      <button type='click' className={styles.trumpetButton}>{text}
          <img className={styles.trumpet} src={trumpet}/>
      </button>
    );

}

export default TrumpetButton;