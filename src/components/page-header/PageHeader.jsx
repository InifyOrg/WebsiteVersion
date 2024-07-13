import React from 'react';
import styles from "./PageHeader.module.css";
import {PersonFill} from 'react-bootstrap-icons';

const PageHeader = () => {
    return (
        <div className={styles.pageHeader}>
            <div className={styles.leftHeader}>

            </div>

            <div className={styles.rightHeader}>
               
                <div className={styles.miniProfile}>
                <p className={styles.content}>Siu</p>
                    <PersonFill size={40} color='#00A99D' className={styles.content}></PersonFill>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
