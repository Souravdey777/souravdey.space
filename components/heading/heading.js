import React from 'react';
import styles from './heading.module.css';

function Heading(props) {
    return (
        <h1 className={styles.headingRoot}>
            {props.children}
        </h1>
    );
}

export default Heading;