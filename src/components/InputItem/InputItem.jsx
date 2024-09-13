import React from 'react';
import styles from './InputItem.module.css';

const InputItem = ({type,placeholder}) => {
    return (
            <div className={styles.input_frame}>
                <div className={styles.input}>
                    <input type={type} id={styles["input-input"]} placeholder={placeholder} autocomplete="off"/>
                </div>
            </div>
    );
};



export default InputItem;
