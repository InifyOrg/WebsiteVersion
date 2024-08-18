import React from 'react';
import styles from './WalletsListItem.module.css';

const WalletsListItem = () => {
    return (
        <div className={styles.wallets_table_row}>
            <div className={styles.wallets_table_cell} style={{width: "20%"}} >EVM</div>
            <div className={styles.wallets_table_cell} style={{width: "20%"}}>0x7a...542B</div>
            <div className={styles.wallets_table_cell} style={{width: "20%"}}>8.342 ETH</div>
            <div className={styles.wallets_table_cell} style={{width: "20%"}}>28 325 $</div>
            <div className={`${styles.wallets_table_cell} ${styles.wallet_table_details}`} style={{width: "15%"}} >View details...</div>
            <div className={`${styles.wallets_table_cell} ${styles.wallet_table_cross}`} style={{width: "5%"}}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L19 1M1 1L19 19" stroke="#5A636A" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            </div>
        </div>
    );
};


export default WalletsListItem;
