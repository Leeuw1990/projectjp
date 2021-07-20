import React from 'react';
import styles from './ContentBlock.module.css'

function ContentBlock({headerText, text}) {
    return(
                <div className={styles.block}>
                    <h3>{headerText}</h3>
                    <p>{text}</p>
                 </div>
    );
}

export default ContentBlock;