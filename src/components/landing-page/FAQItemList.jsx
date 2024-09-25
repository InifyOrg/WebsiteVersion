import React, { useEffect, useState } from 'react';
import styles from './FAQItemList.module.css';



const FAQItemList = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');


    const toggleItem = () => {
        setIsOpen(!isOpen);
      };

    useEffect(() => {
        setHeight(isOpen ? `60px` : '0px');
    }, [isOpen]);
    
    return (
        <div>
            <div className={styles.item__header}>
                <button className={`${styles.item__title} ${isOpen ? styles.open : ''}`}  onClick={toggleItem} >
                <span className={styles.title__style}>
                    {title}
                </span>
                <span className={styles.item__icon}>
                {isOpen ? "−" : "+"}
                </span>
                </button>
             </div>
            <div className={styles.item__content}  style={{ height, transition: 'height 0.3s ease-in-out' }}>
                    <p>{content}</p>
            </div>
        </div>
    );
};



export default FAQItemList;
