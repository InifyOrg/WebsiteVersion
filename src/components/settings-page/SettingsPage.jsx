import styles from './SettingsPage.module.css';
import photo from '../profile-page/imgs/profile_photo2.png';
import PageHeader from '../page-header/PageHeader';
import InputItem from '../InputItem/InputItem';
import { useContext, useState } from 'react';
import { UsersContextData } from '../../contexts/UsersContext';

const SettingsPage = () => {
    const {token, loginedUser, login, logout, register, handleEdit, handleEditPassword} = useContext(UsersContextData);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                                {loginedUser && loginedUser.Name}
                            </div>
                        </div>
                        <div className={styles.settings_info_body}>
                            <div className={styles.settings_userEmail}>
                                <div className={styles.settings_username}>
                                    <p>Username</p>
                                    <InputItem type="text" placeholder={loginedUser && loginedUser.Name} value={name} onClick={setName}/>
                                </div>
                                <div className={styles.settings_email}>
                                    <p>Email </p>
                                    <InputItem type="text" placeholder={loginedUser && loginedUser.Email} value={email} onClick={setEmail}/>
                                </div>
                            </div>
                            <div className={styles.settings_password}>
                                <div className={styles.settings_currentPassword}>
                                    <p>Current password</p>
                                    <InputItem type="password" placeholder="••••••••••••" value={oldPassword} onClick={setOldPassword}/>
                                </div>
                                <div className={styles.settings_newPassword}>
                                    <p>New password</p>
                                    <InputItem type="password" placeholder="••••••••••••" value={newPassword} onClick={setNewPassword}/>
                                    <p>Confirm password</p>
                                    <InputItem type="password" placeholder="••••••••••••" value={confirmPassword} onClick={setConfirmPassword}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.settings_info_bottom}>
                        <button className={styles.settings_logout} onClick={()=>logout()}>Logout</button>
                        <button className={styles.settings_saveAll} onClick={()=> {
                            if(name != "" || email != "")
                                handleEdit(name,email);

                            if(oldPassword != "" && newPassword != "")
                                handleEditPassword(oldPassword, newPassword);

                            setName("");
                            setEmail("");
                            setOldPassword("");
                            setNewPassword("");
                            setConfirmPassword("");
                        }}>Save All</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};


export default SettingsPage;
