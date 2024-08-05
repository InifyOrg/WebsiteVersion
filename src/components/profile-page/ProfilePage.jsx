import React from 'react';
import styles from "./ProfilePage.module.css";
import profile_banner from './imgs/banner2.jpg';
import profile_photo from './imgs/profile_photo2.png';

const PageHeader = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.top_info}>
                <div className={styles.profile_frame}>
                    <div className={styles.profile_banner}>
                        <img src={profile_banner} alt="" />
                    </div>
                    <div className={styles.profile_info}>
                        <div className={styles.profile_photo}>
                            <img src={profile_photo} alt="" />
                        </div>
                        <div className={styles.profile_name}>
                        My name is oche
                        </div>
                    </div>
                </div>
                <div className={styles.wallet_frame}>
                <div className={styles.wallet_img}>
                            <svg width="271" height="273" viewBox="0 0 271 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="133.176" cy="140.261" r="131.949" stroke="#64FE98" stroke-opacity="0.24" stroke-width="1.19524"/>
                            <circle cx="133.176" cy="140.262" r="90.8779" stroke="#64FE98" stroke-opacity="0.24" stroke-width="1.19524"/>
                            <circle cx="133.175" cy="140.261" r="51.6741" stroke="#64FE98" stroke-opacity="0.24" stroke-width="1.19524"/>
                            <circle cx="133.175" cy="140.262" r="26.1359" fill="#0B1518"/>
                            <circle cx="30.4981" cy="220.536" r="28.0027" fill="#3AFFC4"/>
                            <circle cx="218.117" cy="37.585" r="37.337" fill="#62EBC2"/>
                            <circle cx="205.012" cy="192.682" r="16.7333" fill="#98F6DA"/>
                            <circle cx="50.829" cy="103.038" r="4.78095" fill="#54C28E"/>
                            <circle cx="127.324" cy="230.928" r="4.78095" fill="#8CA984"/>
                            <circle cx="265.971" cy="130.529" r="4.78095" fill="#54C28E"/>
                            <circle cx="80.7092" cy="19.3718" r="4.78095" fill="#87DCBD"/>
                            </svg>
                        </div>
                    <div className={styles.wallet_wallet}>
                        <div className={styles.wallet_header}>
                            <div className={styles.wallet_name}>
                                My Wallet
                            </div>
                                <div className={styles.wallet_balance}>
                                    66,898 $
                                </div>
                        </div>
                        <div className={styles.wallet_body}>
                            <div className={styles.wallet_info}>
                                    <div className={styles.wallet_info_name}>
                                        <p>Total wallets:</p>
                                        <p>Best token:</p>
                                        <p>Currency:</p>
                                    </div>
                                    <div className={styles.wallet_info_data}>
                                        <p>32</p>
                                        <p>ETH</p>
                                        <p>USD</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.portfolio}>
                <div className={styles.portfolio_frame}>

                </div>
                <div className={styles.profit_frame}>

                </div>
            </div>
        </div>
    );
}

export default PageHeader;
