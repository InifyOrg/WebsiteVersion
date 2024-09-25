import React, { useContext } from 'react';
import styles from './LandingHeaderPage.module.css';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { UsersContextData } from '../../contexts/UsersContext';
import sprite from './imgs/sprites/sprite.svg';

const LandingHeaderPage = () => {
    const {token, loginedUser, login, logout, register} = useContext(UsersContextData);
    const nav = useNavigate();

    return (
        <div className={styles.header__frame}>
        <div className={styles.header__content}>
            <div className={styles.header__left}>
                <div className={styles.header__left__name}>
                    <NavLink to="" >
                    <span>Inify</span>
                    <use href={`${sprite}#icon-first`}></use>
                    </NavLink>
                </div>
                <div className={styles.header__left__items}>
                        <NavLink to="#advantages">
                            <span>Advantages</span>
                        </NavLink>
                        <NavLink to="#faq">
                            <span>FAQ</span>
                        </NavLink>
                </div>
            
            </div>
            <div className={styles.header__middle}>
            <svg width="149" height="101" viewBox="0 0 149 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86.2696 5.01758C86.2696 5.01758 130.875 11.4434 144.107 49.6229L129.365 71.1705L118.403 62.6669C118.403 62.6669 67.5599 118.239 23.1421 49.6229C23.1421 49.6229 24.8448 30.9132 57.7337 19.0042L62.2692 30.9082C62.2692 30.9082 46.0123 38.4691 43.367 49.0554C43.367 49.0554 53.0057 72.4931 73.7981 69.4678V59.074C84.9174 60.446 89.4727 38.5037 71.5377 39.7227C64.1891 40.0879 59.6387 50.0868 65.9855 54.6619" stroke="#3F8C8A" stroke-width="8.07" stroke-miterlimit="10"/>
                <path d="M84.9473 67.9581C84.9473 67.9581 103.094 61.5323 105.36 49.6234C105.36 49.6234 98.554 30.5336 74.7411 29.2109" stroke="#3F8C8A" stroke-width="8.07" stroke-miterlimit="10"/>
                <path d="M125.777 48.5815C125.777 48.5815 114.248 18.6242 74.7458 15.5989V5.01757C74.7458 5.01757 25.0374 2.74733 5 49.8154C5 49.8154 37.6372 122.71 114.184 86.8006" stroke="#3F8C8A" stroke-width="8.07" stroke-miterlimit="10"/>
            </svg>
            </div>
            <div className={styles.header__right}>
                <button type='button' className={styles.button__app} onClick={()=>!token ? nav("/register") : nav("/profile")}>To the app</button>
            </div>
        </div>
    </div>
    );
};

export default LandingHeaderPage;
