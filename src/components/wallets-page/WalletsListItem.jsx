import React from 'react';
import styles from './WalletsListItem.module.css';
import { NavLink } from 'react-router-dom';



const WalletsListItem = ({id, type, address, besttoken, totalvalue, deleteWalletHandler}) => {
    return (
        <div className={styles.wallets_table_row}>
            <div className={styles.wallets_table_cell} style={{width: "20%"}} >{type}</div>
            <div className={styles.wallets_table_cell} style={{width: "20%"}}>{`${address.slice(0, 5)}...${address.slice(-5)}`}</div>
            <div className={styles.wallets_table_cell} style={{width: "20%"}}>{besttoken && besttoken.Amount.toFixed(2)} {besttoken && besttoken.Symbol}</div>
            <div className={styles.wallets_table_cell} style={{width: "20%"}}>{totalvalue.toFixed(2)}$</div>
            <div className={`${styles.wallets_table_cell} ${styles.wallets_table_details}`} style={{width: "15%"}}>
                <NavLink to={`/wallets/${id}`}>View details</NavLink>
                </div>
            <div className={`${styles.wallets_table_cell} ${styles.wallets_table_crossCenter}`} style={{width: "5%"}}>
            <button className={styles.wallets_table_cross} onClick={() => deleteWalletHandler(id)}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 19L19 1M1 1L19 19" stroke="#5A636A" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </button>
            </div>
        </div>
    );
};


export default WalletsListItem;
