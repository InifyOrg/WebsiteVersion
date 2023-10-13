import React from 'react';
import styles from "./PageHeader.module.css";
import { Person, PersonFill, Search } from 'react-bootstrap-icons';

const PageHeader = () => {
    return (
        <div className={styles.pageHeader}>
            <div className={styles.leftHeader}>
                <div className={styles.searchBackground}>
                    <input className={styles.searchInput} type="text" placeholder='Search address | username' />
                </div>

                <p className={styles.gradientText}>Current wallet:</p>
                <p>&nbsp; All</p>
            </div>

            <div className={styles.rightHeader}>
                <input type="checkbox" id="switch" /><label for="switch"></label>

                <div className={styles.miniProfile}>
                    <PersonFill size={40} color='#00A99D' className={styles.content}></PersonFill>
                    <p className={styles.content}>Hello, Nick</p>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
