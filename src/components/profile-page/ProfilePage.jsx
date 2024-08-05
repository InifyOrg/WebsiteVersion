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
