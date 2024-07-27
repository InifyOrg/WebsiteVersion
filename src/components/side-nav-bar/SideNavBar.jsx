import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideNavBar.module.css';
import Logo from './img/Logo.png';
import Home from './img/Home.png';
import Settings from './img/Settings.png';
import Logout from './img/Logout.svg';

const SideNavBar = () => {

    return (
        <menu className={styles.SideBarMenu}>
            <div className={styles.menuTop}>
                    <img src={Logo} alt="Logo" width='75px'/>
                    <p className={styles.navLogoText}>Inify</p>
            </div>
            <div className={styles.menuBody}>
                <ul>
                    <li>
                        <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : ""}>
                        <img src={Home} alt=""/>
                        <span className={styles.menuBody_Text}>Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/accounts" className={({ isActive }) => isActive ? styles.active : ""}>
                        <img src={Home} alt=""/>
                        <span className={styles.menuBody_Text}>Accounts</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className={({ isActive }) => isActive ? styles.active : ""}>
                        <img src={Settings} alt=""/>
                        <span className={styles.menuBody_Text}>Settings</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className={styles.menuBot}>
                <img src={Logout} alt="Logout" />
            </div>
        </menu>
    );
}

export default SideNavBar;
