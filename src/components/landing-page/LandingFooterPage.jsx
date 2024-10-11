import React, { useContext } from 'react';
import styles from './LandingFooterPage.module.css';
import InifyLogo from './imgs/InifyLogo.svg';
import sprite from './imgs/sprites/sprite.svg';
import { UsersContextData } from '../../contexts/UsersContext';

const generateItems = (count) => {
    return Array.from({ length: count }, (_, index) => ({
        className: index % 2 === 0 ? styles.plusItem : styles.textItem,
        content: index % 2 === 0 ? '+++' : "Let's check"
    }));
};

const LandingFooterPage = () => {
    const {token, loginedUser, login, logout, register} = useContext(UsersContextData);

    const items = generateItems(25);
    return (
      <div>
      <div className={styles.footer__grid}>
          {items.map((item, index) => (
            <div key={index} className={item.className}>
              {item.content}
            </div>
          ))}
      </div>
      <div className={styles.footer__info}>
        <div className={styles.footer__left}>
          <img src={InifyLogo} alt="" />
          <div className={styles.left__text}>
            <p className={styles.text__start}>Inify, the safest and secure place to view your money</p>
            <p className={styles.text__end}>© 2024 Inify Technologies Inc.</p>
          </div>
        </div>
        <div className={styles.footer__right}>
        <a href="https://x.com/ocheweb3" target="_blank" rel="noreferrer" aria-label='Twitter' style={{marginLeft: "0px"}}>
          <svg width="24" height="24" className={styles.footer__icon}>
            <use href={`${sprite}#icon-telegram`}></use>
          </svg>
        </a>
        <a href="https://discord.gg/eUa6udj" target="_blank" rel="noreferrer" aria-label='Discord'>
          <svg width="24" height="24" className={styles.footer__icon}>
            <use href={`${sprite}#icon-twitter`}></use>
          </svg>
        </a>
        </div>
        </div>
    </div>
    );
};

export default LandingFooterPage;
