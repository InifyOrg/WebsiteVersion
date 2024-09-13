import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './AddWalletModal.module.css';
import InputItem from '../InputItem/InputItem';
import { WalletsContextData } from '../../contexts/WalletsContext';

const AddWalletModal = ({closeModal}) => {
    const {walletTypes, getWalletTypes, addNewWallet} = useContext(WalletsContextData);
    const modalRef = useRef(null);
    const [address, setAddress] = useState(null);
    const [walletTypeId, setWalletTypeId] = useState(walletTypes[0] ? walletTypes[0].Id : null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        
        getWalletTypes();

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [closeModal]);

    return (
        <div className={styles.modal}>
            <div className={styles.modal_frame}>
                <div className={styles.modalContainer} ref={modalRef}>
                        <div className={styles.modal_title}>
                            <div className={styles.modal_title_name}>Add a new wallet</div>
                            <button type='button' onClick={() => closeModal(false)} className={styles.modal_exit}>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L19 1M1 1L19 19" stroke="#3AFFC4" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </button>
                        </div>
                        <div className={styles.modal_body}>
                            <div className={styles.address}>
                                <p>Address</p>
                                <InputItem type="text" placeholder="paste your address" value={address} onClick={setAddress}/>
                            </div>
                            <div className={styles.type}>
                                <p>Type</p>
                                <div className={styles.type_select}>
                                    <select name="type" id="type-select" className={styles.select_select} value={walletTypeId} onChange={(e) => setWalletTypeId(parseInt(e.target.value))}>
                                            {walletTypes.map(type => <option value={type.Id} key={type.id}>{type.Title}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.modal_footer}>
                                <button type='button' onClick={() => {
                                    addNewWallet(address, walletTypeId);
                                    closeModal(false);
                                    }} className={styles.submit_submit}>
                                    Submit
                                </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AddWalletModal;
