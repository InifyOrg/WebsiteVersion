import React from 'react';
import styles from "./PageHeader.module.css";

const PageHeader = ({title}) => {
    return (
        <div className={styles.pageHeader_frame}>
            <div className={styles.pageHeader}>
                <div className={styles.leftHeader}>
                 <div className={styles.pageHeader_title}>{title}</div>
                </div>
                <div className={styles.rightHeader}>
                    <div className={styles.miniProfile}>
                    <p className={styles.content}></p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.settings_photo}>
                    <path d="M1.3335 19.9993C1.3335 18.5849 1.8954 17.2283 2.89559 16.2281C3.89579 15.2279 5.25234 14.666 6.66683 14.666H17.3335C18.748 14.666 20.1045 15.2279 21.1047 16.2281C22.1049 17.2283 22.6668 18.5849 22.6668 19.9993C22.6668 20.7066 22.3859 21.3849 21.8858 21.885C21.3857 22.3851 20.7074 22.666 20.0002 22.666H4.00016C3.29292 22.666 2.61464 22.3851 2.11454 21.885C1.61445 21.3849 1.3335 20.7066 1.3335 19.9993Z" stroke="#0FAE96" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M12 9.33301C14.2091 9.33301 16 7.54215 16 5.33301C16 3.12387 14.2091 1.33301 12 1.33301C9.79086 1.33301 8 3.12387 8 5.33301C8 7.54215 9.79086 9.33301 12 9.33301Z" stroke="#0FAE96" stroke-width="2"/>
                    </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
