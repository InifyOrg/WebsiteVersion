import React from 'react';
import styles from "./DetailsPage.module.css";
import ListItem from '../profile-page/ListItem';
import PageHeader from '../page-header/PageHeader';

const DetailsPage = () => {
    return (
        <div style={{ width: "100%"}}>
        <PageHeader title="WALLETS" />
        <div className={styles.portfolio}>
        <div className={styles.portfolio_frame}>
            <div className={styles.portfolio_frame_gap}>
                <div className={styles.portfolio_header}>
                    <div className={styles.portfolio_name}>
                            Portfolio
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
        <div className={styles.wallet_frame}>
            <div className={styles.wallet_gap}>
                    <div className={styles.wallet_header}>
                        <div className={styles.wallet_name}>
                            <div className={styles.wallet_name_shadow}>Wallet</div>
                        </div>
                             <div className={styles.wallet_balance}>
                                66,898 $
                         </div>
                    </div>
                <div className={styles.wallet_address}>
                        <div className={styles.wallet_address_name}>
                            0x7a...542B
                        </div>
                        <button className={styles.wallet_address_button}>
                            <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1023_730)">
                            <path d="M24.5417 2.58301C25.2268 2.58301 25.8839 2.85518 26.3684 3.33965C26.8528 3.82412 27.125 4.4812 27.125 5.16634V20.6663C27.125 21.3515 26.8528 22.0086 26.3684 22.493C25.8839 22.9775 25.2268 23.2497 24.5417 23.2497H21.9583V25.833C21.9583 26.5182 21.6862 27.1752 21.2017 27.6597C20.7172 28.1442 20.0601 28.4163 19.375 28.4163H6.45833C5.77319 28.4163 5.11611 28.1442 4.63164 27.6597C4.14717 27.1752 3.875 26.5182 3.875 25.833V10.333C3.875 9.64787 4.14717 8.99078 4.63164 8.50632C5.11611 8.02185 5.77319 7.74967 6.45833 7.74967H9.04167V5.16634C9.04167 4.4812 9.31384 3.82412 9.79831 3.33965C10.2828 2.85518 10.9399 2.58301 11.625 2.58301H24.5417ZM19.375 10.333H6.45833V25.833H19.375V10.333ZM12.9167 19.3747C13.2592 19.3747 13.5878 19.5108 13.83 19.753C14.0722 19.9952 14.2083 20.3238 14.2083 20.6663C14.2083 21.0089 14.0722 21.3375 13.83 21.5797C13.5878 21.8219 13.2592 21.958 12.9167 21.958H10.3333C9.99076 21.958 9.66222 21.8219 9.41999 21.5797C9.17775 21.3375 9.04167 21.0089 9.04167 20.6663C9.04167 20.3238 9.17775 19.9952 9.41999 19.753C9.66222 19.5108 9.99076 19.3747 10.3333 19.3747H12.9167ZM24.5417 5.16634H11.625V7.74967H19.375C20.0601 7.74967 20.7172 8.02185 21.2017 8.50632C21.6862 8.99078 21.9583 9.64787 21.9583 10.333V20.6663H24.5417V5.16634ZM15.5 14.208C15.8292 14.2084 16.1459 14.3344 16.3853 14.5604C16.6247 14.7864 16.7687 15.0953 16.788 15.424C16.8073 15.7526 16.7004 16.0762 16.4891 16.3287C16.2778 16.5812 15.978 16.7434 15.6511 16.7823L15.5 16.7913H10.3333C10.0041 16.791 9.68746 16.6649 9.44807 16.4389C9.20867 16.2129 9.06461 15.904 9.04532 15.5754C9.02603 15.2467 9.13295 14.9231 9.34426 14.6706C9.55556 14.4182 9.85529 14.2559 10.1822 14.2171L10.3333 14.208H15.5Z" fill="#3AFFC4"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1023_730">
                            <rect width="31" height="31" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                </div>
                <div className={styles.wallet_body}>
                    <div className={styles.wallet_info}>
                            <div className={styles.wallet_info_name}>
                                <p>Type</p>
                                <p>Best token:</p>
                                <p>Currency:</p>
                            </div>
                            <div className={styles.wallet_info_data}>
                                <p>SOL</p>
                                <p>USDC</p>
                                <p>USD</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};


export default DetailsPage;
