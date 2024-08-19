import React from 'react';
import styles from "./DetailsPage.module.css";
import ListItem from '../profile-page/ListItem';

const DetailsPage = () => {
    return (
        <div className={styles.portfolio}>
        <div className={styles.portfolio_frame}>
            <div className={styles.portfolio_frame_gap}>
                <div className={styles.portfolio_header}>
                    <div className={styles.portfolio_name}>
                            Wallet portfolio
                    </div>
                    <div className={styles.portfolio_update}>
                        <div className={styles.portfolio_update_name}>
                            Data updated <span className={styles.portfolio_update_color}>1 sec</span> ago
                            <button className={styles.portfolio_update_button} type='button'>
                                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.53124 15.1512C1.77281 12.1854 1.82159 7.53658 4.68733 4.65C5.81046 3.51378 7.27084 2.77115 8.85058 2.53293L8.76644 0C6.54875 0.267779 4.48697 1.27829 2.91667 2.86707C-0.923419 6.73293 -0.969759 12.9756 2.76668 16.9293L0.643592 19.0659L7.36284 19.4329L7.34454 12.3183L4.53124 15.1512ZM12.637 0.567073L12.6553 7.68171L15.4686 4.85C18.227 7.81829 18.1783 12.4671 15.3125 15.3512C14.1896 16.4877 12.7291 17.2304 11.1493 17.4683L11.2334 20C13.4511 19.7319 15.513 18.7219 17.0844 17.1341C20.9233 13.2659 20.9696 7.02317 17.2332 3.07195L19.3563 0.932927L12.637 0.567073Z" fill="#18C2A4"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.portfolio_table}>
                    <div className={styles.portfolio_table_gap}>
                        <div className={styles.portfolio_table_header}>
                            <div className={styles.portfolio_table_header_names} style={{ width: "35%"}}>Name</div>
                            <div className={styles.portfolio_table_header_names} style={{ width: "20%"}}>Chain</div>
                            <div className={styles.portfolio_table_header_names} style={{ width: "15%"}}>Last price</div>
                            <div className={styles.portfolio_table_header_names} style={{ width: "15%"}}>Amount</div>
                            <div className={styles.portfolio_table_header_names} style={{ width: "15%"}}>Usd Value </div>
                        </div>
                        <div className={styles.portfolio_table_body}>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.profit_frame}>

        </div>
    </div>
    );
};


export default DetailsPage;
