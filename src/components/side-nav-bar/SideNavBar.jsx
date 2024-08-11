import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideNavBar.module.css';
import Logo from './imgs/Logo.png';
import Home from './imgs/Home.svg';
import Settings from './imgs/Settings.svg';
import Logout from './imgs/Logout.svg';
import Twitter from './imgs/Twitter.svg';
import Discord from './imgs/Discord.svg';

const SideNavBar = () => {

    return (
        <div className={styles.SideBarMenu}>
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
                        <span className={styles.menuBody_Text}>Wallets</span>
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
                <div className={styles.menuBot_Login}>
                    <img src={Logout} alt="Logout" className={styles.menuBot_Login_button}/>
                </div>
            </div>
        </div>
    );
}

export default SideNavBar;
