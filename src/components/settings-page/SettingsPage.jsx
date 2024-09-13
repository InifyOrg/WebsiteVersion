import styles from './SettingsPage.module.css';
import photo from '../profile-page/imgs/profile_photo2.png';
import PageHeader from '../page-header/PageHeader';
import InputItem from '../InputItem/InputItem';

const SettingsPage = () => {
    return (
        <div style={{ width: "100%"}}>
        <PageHeader title="Settings" />
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
                                    <InputItem type="text" placeholder="JohnDoe"/>
                                </div>
                                <div className={styles.settings_email}>
                                    <p>Email <span className={styles.settings_myEmail}>(myemail@gmail.com)</span></p>
                                    <InputItem type="text" placeholder="johndoe@gmail.com"/>
                                </div>
                            </div>
                            <div className={styles.settings_password}>
                                <div className={styles.settings_currentPassword}>
                                    <p>Current password</p>
                                    <InputItem type="password" placeholder="••••••••••••"/>
                                </div>
                                <div className={styles.settings_newPassword}>
                                    <p>New password</p>
                                    <InputItem type="password" placeholder="••••••••••••"/>
                                    <p>Confirm password</p>
                                    <InputItem type="password" placeholder="••••••••••••"/>
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
    </div>
    );
};


export default SettingsPage;
