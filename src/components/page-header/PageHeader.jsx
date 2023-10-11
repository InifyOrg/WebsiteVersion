import React from 'react';
import styles from "./PageHeader.module.css";
import { Search } from 'react-bootstrap-icons';

const PageHeader = () => {
    return (
        <div className={styles.pageHeader}>
            <div className={styles.searchBackground}>
                <input className={styles.searchInput} type="text" placeholder='Search address | username' />
            </div>

            <p className={styles.gradientText}>Current wallet:</p>
            <p>&nbsp; All</p>
        </div>
    );
}

export default PageHeader;
