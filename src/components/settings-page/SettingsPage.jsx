import styles from './SettingsPage.module.css';
import photo from '../profile-page/imgs/profile_photo2.png';

const SettingsPage = () => {
    return (
        <div className={styles.settings}>
            <div  className={styles.settings_frame}>
                <div className={styles.settings_info}>
                    <div className={styles.settings_info_topBody}>
                        <div className={styles.settings_info_top}>
                            <img src={photo} alt="settingsPhoto" className={styles.settings_photo}/>
                            <div className={styles.settings_name}>
                                kioche
                            </div>
                        </div>
                        <div className={styles.settings_info_body}>
                            <div className={styles.settings_userEmail}>
                                <div className={styles.settings_username}>
                                    <p>Username</p>
                                    <div className={styles.settings_input_frame}>
                                        <div className={styles.settings_input}>
                                            <input type="text" id={styles["input-input"]} placeholder="JohnDoe" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.settings_email}>
                                    <p>Email <span className={styles.settings_myEmail}>(myemail@gmail.com)</span></p>
                                    <div className={styles.settings_input_frame}>
                                        <div className={styles.settings_input}>
                                            <input type="text" id={styles["input-input"]} placeholder="johndoe@gmail.com" autocomplete="off"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.settings_password}>
                                <div className={styles.settings_currentPassword}>
                                    <p>Current password</p>
                                    <div className={styles.settings_input_frame}>
                                            <div className={styles.settings_input}>
                                                <input type="password" id={styles["input-input"]} placeholder="••••••••••••"/>
                                            </div>
                                    </div>
                                </div>
                                <div className={styles.settings_newPassword}>
                                    <p>New password</p>
                                    <div className={styles.settings_input_frame}>
                                            <div className={styles.settings_input}>
                                                <input type="password" id={styles["input-input"]} placeholder="••••••••••••"/>
                                            </div>
                                    </div>
                                    <p>Confirm password</p>
                                    <div className={styles.settings_input_frame}>
                                            <div className={styles.settings_input}>
                                                <input type="password" id={styles["input-input"]} placeholder="••••••••••••"/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.settings_info_bottom}>
                        <button className={styles.settings_logout}>Logout</button>
                        <button className={styles.settings_saveAll}>Save All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SettingsPage;
