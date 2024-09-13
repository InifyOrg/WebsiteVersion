import React, { useContext, useState } from 'react';
import styles from './LoginPage.module.css';
import Coins from './img/Coins.svg'; 
import { NavLink } from 'react-router-dom';
import Logo from '../side-nav-bar/imgs/Logo.png';
import { UsersContextData } from '../../contexts/UsersContext';

const LoginPage = () => {
    const {token, loginedUser, login, logout} = useContext(UsersContextData);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div className={styles.login_frame}>
            <div className={styles.login_main}>
            <img src={Logo} alt="Logo" style={{width: '50px', height: "50px"}} className={styles.login_logo}/>
            <div className={styles.login_body}>
                <img src={Coins} alt="Coins" className={styles.login_body_coins}/>
                <div className={styles.login_login}>
                    <h2 className={styles.login_title}>Welcome back!</h2>
                    <div className={styles.login_data}>
                        <p>Email</p>
                        <div className={styles.login_input_frame}>
                            <div className={styles.login_input}>
                                <input className={styles.input_input} placeholder="johndoe@gmail.com" autocomplete="off" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <p>Password</p>
                        <div className={styles.login_input_frame}>
                            <div className={styles.login_input}>
                                <input type='password' className={styles.input_input} placeholder="••••••••••••" value={pass} onChange={(e) => setPass(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                    <button className={styles.submit_submit} onClick={()=>login(email, pass)}>                      
                        Login
                    </button>
                    <div className={styles.login_haveAcc}>I don't have an account 
                        <button className={styles.login_haveAcc_button}>
                        <NavLink to="/register" className={({ isActive }) => isActive ? styles.active : ""}>      
                        Register
                        </NavLink>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};


export default LoginPage;
