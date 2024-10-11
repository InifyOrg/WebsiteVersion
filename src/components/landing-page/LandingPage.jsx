import React, { useContext, useEffect } from 'react';
import styles from './LandingPage.module.css';
import sprite from './imgs/sprites/sprite.svg';
import People from './imgs/People.svg';
import Safe from './imgs/Safe.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import LandingFooterPage from './LandingFooterPage';
import LandingHeaderPage from './LandingHeaderPage';
import { UsersContextData } from '../../contexts/UsersContext';
import FAQItem from './FAQItemList';

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
                       <span style={{ color: "#18C2A4"}}>Сentralise</span> decentralised
                    </h1>
                    <p className={styles.section__text}>
                    You don't have to worry about anything when you use our cryptocurrency balance viewer service
                    </p>
                    <button type='button' className={styles.button__redirect} onClick={()=>!token ? nav("/register") : nav("/profile")}>View my balance</button>
                </div>
            </div>
            <div className={styles.container__items}>
                <h1 className={styles.container__header}>A <span style={{ color: "#18C2A4"}}>smart way</span> of accounting</h1>
                <div className={styles.section__items}>
                    <div className={styles.section__item}>
                        <svg width="58" height="145">
                            <use href={`${sprite}#icon-first`}></use>
                        </svg>
                        <div className={styles.item__text}>
                            <span className={styles.item__header}>Simple</span>
                            <p>User-friendly interface and ease of action</p>
                        </div>
                    </div>
                    <div className={styles.section__item}>
                        <svg width="94" height="145">
                            <use href={`${sprite}#icon-second`}></use>
                        </svg>
                        <div className={styles.item__text}>
                            <span className={styles.item__header}>Clear</span>
                            <p>Using only public data for analysis</p>
                        </div>
                    </div>
                    <div className={styles.section__item}>
                        <svg width="99" height="145">
                            <use href={`${sprite}#icon-third`}></use>
                        </svg>
                        <div className={styles.item__text}>
                            <span className={styles.item__header}>Safety</span>
                            <p>Have no wallet connection and no interaction with money</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="advantages" className={styles.container__description}>
                <img src={People} alt="People" />
                <div className={styles.description__text}>
                    <h1 className={styles.description__header}>You can track <span style={{ color: "#18C2A4"}}>anywhere in the world</span></h1>
                    <p>Thanks to our service you can instantly find out the balance of all your assets on all your wallets literally in a few clicks</p>
                </div>
            </div>
            <div className={styles.container__description} style={{paddingBottom: "120px"}}>
                <div className={styles.description__text}>
                    <h1 className={styles.description__header}><span style={{ color: "#18C2A4"}}>Don’t be scared</span> about your funds</h1>
                    <p>We do not use any wallet connection or do we ask for your private keys to gain access. We take all information from public sources i.e. blockchains</p>
                </div>
                <img src={Safe} alt="Safe" />
            </div>
            <div className={styles.container__section} style={{padding: "100px"}}>
                <h1 className={styles.section__header}  style={{fontSize: "48px"}}>Check your balance <span style={{color: "#862D2D"}}>immediately!</span></h1>
                <p>because when else are you gonna do it 💅</p>
                <button type='button' className={styles.section__button} onClick={()=>!token ? nav("/register") : nav("/profile")}>Get started</button>
            </div>
            <div id="faq" name="faq" className={styles.landing__faq}>
                <div className={styles.faq__header}>
                <span style={{ color: "#18C2A4"}}>F</span>requently <span style={{ color: "#18C2A4"}}>A</span>sked <span style={{ color: "#18C2A4"}}>Q</span>uestions
                </div>
                    <div className={styles.faq__list}>
                        <FAQItem
                        title="What is Inify?"
                        content="Inify is a service for accounting and analytics of user assets in the web3 world">
                        </FAQItem>
                        <FAQItem
                        title="How safe are you?"
                        content="100% safe, we do not use any private information to obtain data">
                        </FAQItem>
                        <FAQItem
                        title="Can you have access to my account?"
                        content="No, we don't have any access to the account you're adding">
                        </FAQItem>
                        <FAQItem
                        title="What assets does Inify support?"
                        content="We currently support ETH assets">
                        </FAQItem>
                        <FAQItem
                        title="Is it possible to export analytics?"
                        content="It's not possible now">
                        </FAQItem>
                    </div>
            </div>
        </div>
        </div>
        <LandingFooterPage/>
      </div>
    );
};


export default LandingPage;
