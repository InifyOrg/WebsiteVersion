import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideNavBar.module.css';
import { CardList, Gear, Person } from 'react-bootstrap-icons';

const SideNavBar = () => {
    return (
        <menu className={styles.mainMenu}>
            <div className={styles.menuTop}>
                <img src='/logo512.png' alt="" width='100px'/>
                <p className={styles.navLogoText}>Inify</p>
            </div>
            <div className={styles.menuBody}>
                <ul onClick={()=>document.querySelector("body").classList.toggle("mobileopen")}>
                    <li><NavLink to="/profile"><Person className={styles.linkImg} size={25} />Profile</NavLink></li>
                    <li><NavLink to="/accounts"><CardList className={styles.linkImg} size={25} />Accounts</NavLink></li>
                    <li><NavLink to="/settings"><Gear className={styles.linkImg} size={25} />Settings</NavLink></li>

                </ul>
            </div>
            <div className={styles.menuBot}>
            </div>
        </menu>
    );
}

export default SideNavBar;
