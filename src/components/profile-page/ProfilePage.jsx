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
                        idkwhattodo
                        </div>
                    </div>
                </div>
                <div className={styles.wallet_frame}>
                    <div className={styles.wallet_img}>
                        <svg width="271" height="273" viewBox="0 0 271 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="132.546" cy="140.013" r="131.949" stroke="#64FE98" stroke-opacity="0.24" stroke-width="1.19524"/>
                        <circle cx="132.546" cy="140.014" r="90.8779" stroke="#64FE98" stroke-opacity="0.24" stroke-width="1.19524"/>
                        <circle cx="132.545" cy="140.013" r="51.6741" stroke="#64FE98" stroke-opacity="0.24" stroke-width="1.19524"/>
                        <circle cx="132.136" cy="140.136" r="26.1359" fill="#0B1518"/>
                        <circle cx="29.868" cy="220.288" r="28.0027" fill="#3AFFC4"/>
                        <circle cx="217.486" cy="37.337" r="37.337" fill="#62EBC2"/>
                        <circle cx="204.382" cy="192.434" r="16.7333" fill="#98F6DA"/>
                        <circle cx="50.1989" cy="102.79" r="4.78095" fill="#54C28E"/>
                        <circle cx="126.694" cy="230.68" r="4.78095" fill="#8CA984"/>
                        <circle cx="265.341" cy="130.281" r="4.78095" fill="#54C28E"/>
                        <circle cx="80.079" cy="19.1237" r="4.78095" fill="#87DCBD"/>
                        <g clip-path="url(#clip0_872_412)">
                        <path d="M136.582 137.377V134.986C136.582 134.774 136.497 134.571 136.348 134.422C136.198 134.272 135.995 134.188 135.783 134.188H127.793C127.369 134.188 126.963 134.356 126.663 134.655C126.364 134.955 126.195 135.36 126.195 135.783M126.195 135.783C126.195 136.206 126.364 136.611 126.663 136.91C126.963 137.209 127.369 137.377 127.793 137.377H137.38C137.592 137.377 137.796 137.461 137.945 137.611C138.095 137.761 138.179 137.963 138.179 138.175V140.566M126.195 135.783V145.35C126.195 145.773 126.364 146.178 126.663 146.477C126.963 146.776 127.369 146.944 127.793 146.944H137.38C137.592 146.944 137.796 146.86 137.945 146.711C138.095 146.561 138.179 146.359 138.179 146.147V143.755" stroke="#62EBC2" stroke-width="1.19524" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M138.979 140.567V143.756H135.784C135.36 143.756 134.953 143.588 134.654 143.289C134.354 142.99 134.186 142.585 134.186 142.162C134.186 141.739 134.354 141.333 134.654 141.034C134.953 140.735 135.36 140.567 135.784 140.567H138.979Z" stroke="#62EBC2" stroke-width="1.19524" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_872_412">
                        <rect width="19.1746" height="19.134" fill="white" transform="translate(123 131)"/>
                        </clipPath>
                        </defs>
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
