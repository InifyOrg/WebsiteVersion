import React, { useContext, useState } from 'react';
import styles from './WalletsPage.module.css';
import WalletsListItem from './WalletsListItem';
import AddWalletModal from './AddWalletModal';
import { Outlet } from 'react-router-dom';
import PageHeader from '../page-header/PageHeader';
import { ParsersContextData } from '../../contexts/ParsersContext';
import { type } from '@testing-library/user-event/dist/type';
import { WalletsContextData } from '../../contexts/WalletsContext';

const WalletsPage = () => {

    const [openModal, setOpenModal] = useState(false);
    const {parsingOutput, getWalletsCount, allTokens} = useContext(ParsersContextData);
    const {walletTypes, getWalletTypes, addNewWallet, deleteWallet} = useContext(WalletsContextData);

    return (
        <div style={{ width: "100%"}}>
        <PageHeader title="Wallets" />
        <div className={styles.wallets}>
            <Outlet />
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
                            className={styles.wallets_addWallet_button}>
                            Add wallet
                            </button>
                        </div>
                        <div className={styles.wallets_table_header_names} style={{ width: "5%"}}></div>
                    </div>
                    <div className={styles.wallets_table_body}>
                        {parsingOutput && parsingOutput.Wallets.sort((a,b) => b.Balance - a.Balance).map((w) => <WalletsListItem id={w.Wallet.Id} type={w.Wallet.Type} address={w.Wallet.Address} besttoken={w.BestToken} totalvalue={w.Balance} deleteWalletHandler={deleteWallet}></WalletsListItem>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};


export default WalletsPage;
