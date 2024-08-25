import React from 'react';
import styles from './RegisterPage.module.css';
import Coins from './img/Coins.svg'; 

const RegisterPage = () => {
    return (
        <div className={styles.register_frame}>
            <div className={styles.register_main}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.register_logo}>
            <path d="M8.66667 5.41699L3.25 10.8337L8.66667 16.2503" stroke="#3AFFC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.25 10.834H11.9167C17.8999 10.834 22.75 15.6841 22.75 21.6673V22.7507" stroke="#3AFFC4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className={styles.register_body}>
                <img src={Coins} alt="Coins" className={styles.register_body_coins}/>
                <div className={styles.register_login}>
                    <h2 className={styles.register_title}>Register to start!</h2>
                    <p>Username</p>
                    <div className={styles.register_input_frame}>
                        <div className={styles.register_input}>
                            <input className={styles.input_input} placeholder="JohnDoe"></input>
                        </div>
                    </div>
                    <p>Email</p>
                    <div className={styles.register_input_frame}>
                        <div className={styles.register_input}>
                            <input className={styles.input_input} placeholder="johndoe@gmail.com"></input>
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
                    <button className={styles.submit_submit}>                        
                        Register
                    </button>
                    <div className={styles.register_haveAcc}>Yes, I have an account 
                        <button className={styles.register_haveAcc_button}>
                        Login
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};


export default RegisterPage;
