import React, { useContext, useState } from 'react';
import styles from './LoginPage.module.css';
import Coins from './img/Coins.svg'; 
import { NavLink } from 'react-router-dom';
import Logo from '../side-nav-bar/imgs/Logo.png';
import { AuthContextData } from '../../contexts/AuthContext';

const LoginPage = () => {
    const {token, loginedUser, login, logout} = useContext(AuthContextData);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div className={styles.register_frame}>
            <div className={styles.register_main}>
            <img src={Logo} alt="Logo" style={{width: '50px', height: "50px"}} className={styles.register_logo}/>
            <div className={styles.register_body}>
                <img src={Coins} alt="Coins" className={styles.register_body_coins}/>
                <div className={styles.register_login}>
                    <h2 className={styles.register_title}>Welcome back!</h2>
                    <div className={styles.register_data}>
                        <p>Email</p>
                        <div className={styles.register_input_frame}>
                            <div className={styles.register_input}>
                                <input className={styles.input_input} placeholder="johndoe@gmail.com" autocomplete="off" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <p>Password</p>
                        <div className={styles.register_input_frame}>
                            <div className={styles.register_input}>
                                <input type='password' className={styles.input_input} placeholder="••••••••••••" value={pass} onChange={(e) => setPass(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                    <button className={styles.submit_submit} onClick={()=>login(email, pass)}>                      
                        Login
                    </button>
                    <div className={styles.register_haveAcc}>I don't have an account 
                        <button className={styles.register_haveAcc_button}>
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
