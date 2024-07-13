import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideNavBar.module.css';
import { CardList, Gear, Person } from 'react-bootstrap-icons';

const SideNavBar = () => {

    return (
        <menu className={styles.mainMenu}>
            <div className={styles.menuTop}>
                <img src='./img/Logo.png' alt="" width='75px'/>
                <p className={styles.navLogoText}>Inify</p>
            </div>
            <div className={styles.menuBody}>
                <ul>
                    <li><NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : ""}><Person className={styles.linkImg} size={25} />Profile</NavLink></li>
                    <li><NavLink to="/accounts" className={({ isActive }) => isActive ? styles.active : ""}><CardList className={styles.linkImg} size={25} />Accounts</NavLink></li>
                    <li><NavLink to="/settings" className={({ isActive }) => isActive ? styles.active : ""}><Gear className={styles.linkImg} size={25} />Settings</NavLink></li>

                </ul>
            </div>
            <div className={styles.menuBot}>
            </div>
        </menu>
    );
}

export default SideNavBar;
