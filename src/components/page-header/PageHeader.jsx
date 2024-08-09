import React from 'react';
import styles from "./PageHeader.module.css";
import ProfileLogo from "./imgs/ProfileLogo.jpg";

const PageHeader = () => {
    return (
        <div className={styles.pageHeader_frame}>
            <div className={styles.pageHeader}>
                <div className={styles.leftHeader}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.66667 5.41699L3.25 10.8337L8.66667 16.2503" stroke="#3AFFC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.25 10.834H11.9167C17.8999 10.834 22.75 15.6841 22.75 21.6673V22.7507" stroke="#3AFFC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
                <div className={styles.rightHeader}>
                    <div className={styles.miniProfile}>
                    <p className={styles.content}></p>
                    <img src={ProfileLogo} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
