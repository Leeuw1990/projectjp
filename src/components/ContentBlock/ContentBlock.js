import React from 'react';
import styles from './ContentBlock.module.css'

function ContentBlock({headerText, text}) {
    return(
                <div className={styles.block}>
                    <h3 className={styles.head}>{headerText}</h3>
                    <p className={styles.text}>{text}</p>
                 </div>
    );
}

export default ContentBlock;