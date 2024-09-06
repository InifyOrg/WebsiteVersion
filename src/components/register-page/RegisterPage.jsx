import React from 'react';
import styles from './RegisterPage.module.css';
import Coins from './img/Coins.svg'; 
import { NavLink } from 'react-router-dom';
import Logo from '../side-nav-bar/imgs/Logo.png';

const RegisterPage = () => {
    return (
        <div className={styles.register_frame}>
            <div className={styles.register_main}>
            <img src={Logo} alt="Logo" style={{width: '50px', height: "50px"}} className={styles.register_logo}/>
            <div className={styles.register_body}>
                <img src={Coins} alt="Coins" className={styles.register_body_coins}/>
                <div className={styles.register_login}>
                    <h2 className={styles.register_title}>Register to start!</h2>
                    <div className={styles.register_data}>
                        <p>Username</p>
                        <div className={styles.register_input_frame}>
                            <div className={styles.register_input}>
                                <input className={styles.input_input} placeholder="JohnDoe" autocomplete="off"></input>
                            </div>
                        </div>
                        <p>Email</p>
                        <div className={styles.register_input_frame}>
                            <div className={styles.register_input}>
                                <input className={styles.input_input} placeholder="johndoe@gmail.com" autocomplete="off"></input>
                            </div>
                        </div>
                        <p>Password</p>
                        <div className={styles.register_input_frame}>
                            <div className={styles.register_input}>
                                <input type='password' className={styles.input_input} placeholder="••••••••••••"></input>
                            </div>
                        </div>
                        <p>Confirm password</p>
                        <div className={styles.register_input_frame}>
                            <div className={styles.register_input}>
                                <input type='password' className={styles.input_input} placeholder="••••••••••••"></input>
                            </div>
                    </div>
                    </div>
                    <button className={styles.submit_submit}>                        
                        Register
                    </button>
                    <div className={styles.register_haveAcc}>Yes, I have an account 
                        <button className={styles.register_haveAcc_button}>
                        <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : ""}>      
                        Login
                        </NavLink>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};


export default RegisterPage;
