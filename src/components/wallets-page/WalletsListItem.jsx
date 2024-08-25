import React from 'react';
import styles from './WalletsListItem.module.css';
import { NavLink } from 'react-router-dom';



const WalletsListItem = (wallets) => {
    return (
        <div className={styles.wallets_table_row}>
            <div className={styles.wallets_table_cell} style={{width: "20%"}} >EVM</div>
            <div className={styles.wallets_table_cell} style={{width: "20%"}}>0x7a...542B</div>
            <div className={styles.wallets_table_cell} style={{width: "20%"}}>8.342 ETH</div>
            <div className={styles.wallets_table_cell} style={{width: "20%"}}>28 325 $</div>
            <div className={`${styles.wallets_table_cell} ${styles.wallets_table_details}`} style={{width: "15%"}}>
                <NavLink to={`/wallets/${wallets.id}`}>View details...</NavLink>
                </div>
            <div className={`${styles.wallets_table_cell} ${styles.wallets_table_crossCenter}`} style={{width: "5%"}}>
            <button className={styles.wallets_table_cross}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 19L19 1M1 1L19 19" stroke="#5A636A" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </button>
            </div>
        </div>
    );
};


export default WalletsListItem;
