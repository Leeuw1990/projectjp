import React from 'react';
import styles from './Button.module.css';

function Button({type, text}) {
    return(
      <>
        <button className={styles.button} type={type}>{text}</button>
      </>
    );
}

export default Button;