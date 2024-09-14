import React from 'react';
import styles from './ListItem.module.css';
//import BtcLogo from './imgs/BTC.svg';

const ListItem = ({name, symbol, chain, lastprice, amount, usdvalue}) => {
    return (
        <div className={styles.portfolio_table_body_row}>
        <div className={styles.portfolio_table_body_cell} style={{ width: "35%"}}>
        <div className={styles.portfolio_table_TokenName}>
            <div className={styles.portfolio_table_TokenLogo}>{/* <img src="" alt="BtcLogo" />*/}</div> 
                {name}
                <svg width="2" height="18" viewBox="0 0 2 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.319214" y="0.758789" width="0.889201" height="21.3408" rx="0.444601" fill="#C6C6C6"/>
                </svg>
                {symbol}
            </div>
        </div>
        <div className={styles.portfolio_table_body_cell} style={{ width: "20%"}}>{chain}</div>
        <div className={styles.portfolio_table_body_cell} style={{ width: "15%"}}>{lastprice && lastprice.toFixed(2)} $</div>
        <div className={styles.portfolio_table_body_cell} style={{ width: "15%"}}>{amount && amount.toFixed(2)} {symbol}</div>
        <div className={styles.portfolio_table_body_cell} style={{ width: "15%"}}>{usdvalue && usdvalue.toFixed(2)} $</div>
    </div>
    );
};


export default ListItem;
