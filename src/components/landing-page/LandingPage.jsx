import React, { useContext, useEffect } from 'react';
import styles from './LandingPage.module.css';
import sprite from './imgs/sprites/sprite.svg';
import People from './imgs/People.svg';
import Safe from './imgs/Safe.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import LandingFooterPage from './LandingFooterPage';
import LandingHeaderPage from './LandingHeaderPage';
import { UsersContextData } from '../../contexts/UsersContext';

const LandingPage = () => {
    const {token, loginedUser, login, logout, register} = useContext(UsersContextData);
    const nav = useNavigate();

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className={styles.main}>
        <LandingHeaderPage/>

        <div className={styles.content}>

        <div className={styles.landing__body}>
            <div className={styles.container__background}>
                <div className={styles.container__section} style={{ padding: "200px 0px 0px 0px"}}>
                    <h1 className={styles.section__header}>
                        We make understanding crypto <span style={{ color: "#18C2A4"}}>easy</span>
                    </h1>
                    <p className={styles.section__text}>
                        Buy, sell, and grow your crypto with Inify, the platform dedicated to every trader at every level.
                    </p>
                    <button type='button' className={styles.button__redirect} onClick={()=>!token ? nav("/register") : nav("/profile")}>View my balance</button>
                </div>
            </div>
            <div className={styles.container__items}>
                <h1 className={styles.container__header}>A <span style={{ color: "#18C2A4"}}>smarter way</span> to create value</h1>
                <div className={styles.section__items}>
                    <div className={styles.section__item}>
                        <svg width="58" height="145">
                            <use href={`${sprite}#icon-first`}></use>
                        </svg>
                        <div className={styles.item__text}>
                            <span className={styles.item__header}>Simple</span>
                            <p>Users deposit funds to earn APY and get rewarded with Inify!</p>
                        </div>
                    </div>
                    <div className={styles.section__item}>
                        <svg width="94" height="145">
                            <use href={`${sprite}#icon-second`}></use>
                        </svg>
                        <div className={styles.item__text}>
                            <span className={styles.item__header}>Clear</span>
                            <p>Just scan your acc and do this no way lol</p>
                        </div>
                    </div>
                    <div className={styles.section__item}>
                        <svg width="99" height="145">
                            <use href={`${sprite}#icon-third`}></use>
                        </svg>
                        <div className={styles.item__text}>
                            <span className={styles.item__header}>Effective</span>
                            <p>Just scan your acc and do this no way</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="yes" className={styles.container__description}>
                <img src={People} alt="People" />
                <div className={styles.description__text}>
                    <h1 className={styles.description__header}>You can check address <span style={{ color: "#18C2A4"}}>around the world</span></h1>
                    <p>We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.</p>
                </div>
            </div>
            <div className={styles.container__description} style={{paddingBottom: "120px"}}>
                <div className={styles.description__text}>
                    <h1 className={styles.description__header}><span style={{ color: "#18C2A4"}}>Don’t be scared</span> about your funds</h1>
                    <p>We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.</p>
                </div>
                <img src={Safe} alt="Safe" />
            </div>
            <div id="faq" name="faq" className={styles.container__section} style={{padding: "100px"}}>
                <h1 className={styles.section__header}  style={{fontSize: "50px"}}>Check your balance <span style={{color: "#862D2D"}}>immediately!</span></h1>
                <p>because when else are you gonna do it 💅</p>
                <button type='button' className={styles.section__button} onClick={()=>!token ? nav("/register") : nav("/profile")}>Get started</button>
            </div>
        </div>
        </div>
        <LandingFooterPage/>
      </div>
    );
};


export default LandingPage;
