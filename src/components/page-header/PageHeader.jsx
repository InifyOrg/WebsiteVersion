import React from 'react';
import styles from "./PageHeader.module.css";
import ProfileLogo from "./imgs/ProfileLogo.jpg";

const PageHeader = () => {
    return (
        <div className={styles.pageHeader_frame}>
            <div className={styles.pageHeader}>
                <div className={styles.leftHeader}>
               Well Cum
                </div>
                <div className={styles.rightHeader}>
                    <div className={styles.miniProfile}>
                    <p className={styles.content}>You're the best</p>
                    <img src={ProfileLogo} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
