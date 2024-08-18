import React, { useState } from 'react';
import styles from './WalletsPage.module.css';
import WalletsListItem from './WalletsListItem';
import AddWalletModal from './AddWalletModal';

const WalletsPage = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={styles.wallets}>
                {openModal && <AddWalletModal closeModal={setOpenModal}/>}
            <div className={styles.wallets_table}>
                <div className={styles.wallets_table_gap}>
                    <div className={styles.wallets_table_header}>
                        <div className={styles.wallets_table_header_names} style={{ width: "20%"}}>Type</div>
                        <div className={styles.wallets_table_header_names} style={{ width: "20%"}}>Address</div>
                        <div className={styles.wallets_table_header_names} style={{ width: "20%"}}>Token</div>
                        <div className={styles.wallets_table_header_names} style={{ width: "20%"}}>Total Value</div>
                        <div className={`${styles.wallets_table_header_names} ${styles.wallets_table_addWallet}`} style={{ width: "15%"}}>
                            <button onClick={() => {setOpenModal(true); }} 
                            className={styles.openAddModalBtn}>
                            Add wallet
                            </button>
                        </div>
                        <div className={styles.wallets_table_header_names} style={{ width: "5%"}}></div>
                    </div>
                    <div className={styles.wallets_table_body}>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                        <WalletsListItem></WalletsListItem>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default WalletsPage;
