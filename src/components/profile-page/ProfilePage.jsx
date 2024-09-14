import React, { useContext, useEffect, useState } from 'react';
import styles from "./ProfilePage.module.css";
import profile_banner from './imgs/banner2.jpg';
import profile_photo from './imgs/profile_photo2.png';
import ListItem from './ListItem'
import PageHeader from '../page-header/PageHeader';
import { UsersContextData } from '../../contexts/UsersContext';
import { ParsersContextData } from '../../contexts/ParsersContext';
import { Display } from 'react-bootstrap-icons';

const ProfilePage = () => {
    const {token, loginedUser, login, logout, register} = useContext(UsersContextData);

    const {parsingOutput, getWalletsCount, allTokens} = useContext(ParsersContextData);
    



    return (
        <div style={{ width: "100%"}}>
        <PageHeader title="Profile" />
        <div className={styles.profile}>
            <div className={styles.profile_top_info}>
                <div className={styles.profile_frame}>
                    <div className={styles.profile_banner}>
                        <img src={profile_banner} alt="" />
                    </div>
                    <div className={styles.profile_info}>
                        <div className={styles.profile_photo}>
                            <img src={profile_photo} alt="" />
                        </div>
                        <div className={styles.profile_name}>
                        {loginedUser && loginedUser.Name}
                        </div>
                    </div>
                </div>
                <div className={styles.wallet_frame}>
                    <div className={styles.wallet_img}>
                        <svg width="220" height="273" viewBox="0 0 271 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="132.546" cy="140.013" r="131.949" stroke="#64FE98" stroke-opacity="0.24" stroke-width="1.19524"/>
                        <circle cx="132.546" cy="140.014" r="90.8779" stroke="#64FE98" stroke-opacity="0.24" stroke-width="1.19524"/>
                        <circle cx="132.545" cy="140.013" r="51.6741" stroke="#64FE98" stroke-opacity="0.24" stroke-width="1.19524"/>
                        <circle cx="132.136" cy="140.136" r="26.1359" fill="#0B1518"/>
                        <circle cx="29.868" cy="220.288" r="28.0027" fill="#3AFFC4"/>
                        <circle cx="217.486" cy="37.337" r="37.337" fill="#62EBC2"/>
                        <circle cx="204.382" cy="192.434" r="16.7333" fill="#98F6DA"/>
                        <circle cx="50.1989" cy="102.79" r="4.78095" fill="#54C28E"/>
                        <circle cx="126.694" cy="230.68" r="4.78095" fill="#8CA984"/>
                        <circle cx="265.341" cy="130.281" r="4.78095" fill="#54C28E"/>
                        <circle cx="80.079" cy="19.1237" r="4.78095" fill="#87DCBD"/>
                        <g clip-path="url(#clip0_872_412)">
                        <path d="M136.582 137.377V134.986C136.582 134.774 136.497 134.571 136.348 134.422C136.198 134.272 135.995 134.188 135.783 134.188H127.793C127.369 134.188 126.963 134.356 126.663 134.655C126.364 134.955 126.195 135.36 126.195 135.783M126.195 135.783C126.195 136.206 126.364 136.611 126.663 136.91C126.963 137.209 127.369 137.377 127.793 137.377H137.38C137.592 137.377 137.796 137.461 137.945 137.611C138.095 137.761 138.179 137.963 138.179 138.175V140.566M126.195 135.783V145.35C126.195 145.773 126.364 146.178 126.663 146.477C126.963 146.776 127.369 146.944 127.793 146.944H137.38C137.592 146.944 137.796 146.86 137.945 146.711C138.095 146.561 138.179 146.359 138.179 146.147V143.755" stroke="#62EBC2" stroke-width="1.19524" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M138.979 140.567V143.756H135.784C135.36 143.756 134.953 143.588 134.654 143.289C134.354 142.99 134.186 142.585 134.186 142.162C134.186 141.739 134.354 141.333 134.654 141.034C134.953 140.735 135.36 140.567 135.784 140.567H138.979Z" stroke="#62EBC2" stroke-width="1.19524" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_872_412">
                        <rect width="19.1746" height="19.134" fill="white" transform="translate(123 131)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <div className={styles.wallet_wallet}>
                        <div className={styles.wallet_header}>
                            <div className={styles.wallet_name}>
                                <div className={styles.wallet_name_shadow}>My Wallet</div>
                            </div>
                                <div className={styles.wallet_balance}>
                                    {parsingOutput && parsingOutput.TotalBalance.toFixed(2)} $
                                </div>
                        </div>
                        <div className={styles.wallet_body}>
                            <div className={styles.wallet_info}>
                                    <div className={styles.wallet_info_name}>
                                        <p>Total wallets:</p>
                                        <p>Best token:</p>
                                        <p>Currency:</p>
                                    </div>
                                    <div className={styles.wallet_info_data}>
                                        <p>{getWalletsCount()}</p>
                                        <p>{parsingOutput && parsingOutput.TotalBestTokenSymbol}</p>
                                        <p>USD</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.portfolio}>
                <div className={styles.portfolio_frame}>
                    <div className={styles.portfolio_frame_gap}>
                        <div className={styles.portfolio_header}>
                            <div className={styles.portfolio_name}>
                                    Portfolio
                            </div>
                            <div className={styles.portfolio_update}>
                                <div className={styles.portfolio_update_name}>
                                    Data updated <span className={styles.portfolio_update_color}>1 sec</span> ago
                                    <button className={styles.portfolio_update_button} type='button'>
                                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.53124 15.1512C1.77281 12.1854 1.82159 7.53658 4.68733 4.65C5.81046 3.51378 7.27084 2.77115 8.85058 2.53293L8.76644 0C6.54875 0.267779 4.48697 1.27829 2.91667 2.86707C-0.923419 6.73293 -0.969759 12.9756 2.76668 16.9293L0.643592 19.0659L7.36284 19.4329L7.34454 12.3183L4.53124 15.1512ZM12.637 0.567073L12.6553 7.68171L15.4686 4.85C18.227 7.81829 18.1783 12.4671 15.3125 15.3512C14.1896 16.4877 12.7291 17.2304 11.1493 17.4683L11.2334 20C13.4511 19.7319 15.513 18.7219 17.0844 17.1341C20.9233 13.2659 20.9696 7.02317 17.2332 3.07195L19.3563 0.932927L12.637 0.567073Z" fill="#18C2A4"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.portfolio_table}>
                            <div className={styles.portfolio_table_gap}>
                                <div className={styles.portfolio_table_header}>
                                    <div className={styles.portfolio_table_header_names} style={{ width: "35%"}}>Name</div>
                                    <div className={styles.portfolio_table_header_names} style={{ width: "20%"}}>Chain</div>
                                    <div className={styles.portfolio_table_header_names} style={{ width: "15%"}}>Last price</div>
                                    <div className={styles.portfolio_table_header_names} style={{ width: "15%"}}>Amount</div>
                                    <div className={styles.portfolio_table_header_names} style={{ width: "15%"}}>Usd Value </div>
                                </div>
                                <div className={styles.portfolio_table_body}>
                                    {allTokens.map((t) => <ListItem name={t.Name} symbol={t.Symbol} chain={t.Chain} lastprice={t.Price} amount={t.Amount} usdvalue={t.UsdValue}></ListItem>)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.profit_frame}>
                    <p style={{margin: "30%"}}> Coming Soon </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProfilePage;
