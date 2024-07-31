import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideNavBar.module.css';
import Logo from './img/Logo.png';
import Home from './img/Home.svg';
import Settings from './img/Settings.svg';
import Logout from './img/Logout.svg';
import Twitter from './img/Twitter.svg';
import Discord from './img/Discord.svg';

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
                        <img src={Home} alt="Profile"/>
                        <span className={styles.menuBody_Text}>Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/accounts" className={({ isActive }) => isActive ? styles.active : ""}>
                        <img src={Home} alt="Accounts"/>
                        <span className={styles.menuBody_Text}>Accounts</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className={({ isActive }) => isActive ? styles.active : ""}>
                        <img src={Settings} alt="Settings"/>
                        <span className={styles.menuBody_Text}>Settings</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className={styles.menuBot}>
                <div className={styles.menuBot_Socials}>
                    <a href="https://x.com/ocheweb3" target="_blank" rel="noreferrer" aria-label='Twitter'><img src={Twitter} alt="Twitter"/></a>
                    <a href="https://discord.gg/eUa6udj" target="_blank" rel="noreferrer" aria-label='Discord'><img src={Discord} alt="Discord"/></a>
                </div>
                <img src={Logout} alt="Logout" className={styles.menuBot_Logout}/>
            </div>
        </menu>
    );
}

export default SideNavBar;
