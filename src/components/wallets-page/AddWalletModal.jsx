import React from 'react';
import styles from './AddWalletModal.module.css';

const AddWalletModal = ({closeModal}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_frame}>
                <div className={styles.modalContainer}>
                        <div className={styles.modal_title}>
                            <div className={styles.modal_title_name}>Add a new wallet</div>
                            <button type='button' onClick={() => closeModal(false)} className={styles.modal_exit}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L19 1M1 1L19 19" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </button>
                        </div>
                        <div className={styles.modal_body}>
                            <div className={styles.address}>
                                Address
                                <input className={styles.address_input}></input>
                            </div>
                            <div className={styles.type}>
                                Type
                                <select name="type" id="type-select" className={styles.type_select}>
                                    <option value="">Choose a type</option>
                                    <option value="evm">EVM</option>
                                    <option value="sol">SOL</option>
                                    <option value="btc">BTC</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.modal_footer}>
                            <div className={styles.submit}>
                                <input type='submit' ></input>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AddWalletModal;
