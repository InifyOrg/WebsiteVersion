import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseApiURL } from '../config';
import axios from "axios";
import { UsersContextData } from "./UsersContext";

const WalletsContextData = React.createContext();
const client = axios.create({baseURL: baseApiURL});


const WalletsContext = ({children})=>{
    const {token, loginedUser, login, logout, register} = useContext(UsersContextData);

    const [walletTypes, setWalletTypes] = useState([]);

    const getWalletTypes = async () => {
        const resp = await client.get(`api/WalletsMs/getAllWalletTypes`, {headers: {'Authorization':`${token}`}});
        
        setWalletTypes(resp.data);
    };

    const addNewWallet = async (address, walletTypeId) => {
        const resp = await client.post('api/WalletsMs/addNewWallet', {Address: address, WalletTypeId: walletTypeId, UserId: loginedUser.Id}, {headers: {'Authorization':`${token}`}});

        console.log(resp.data);
        return resp.data;
    };

    const deleteWallet = async (walletId) => {
        const resp = await client.post(`api/WalletsMs/${walletId}`, null, {headers: {'Authorization':`${token}`}});

        console.log(resp.data);
    };
    return(
        <WalletsContextData.Provider value={{walletTypes: walletTypes, getWalletTypes: getWalletTypes, addNewWallet: addNewWallet, deleteWallet: deleteWallet}}>
            {children}
        </WalletsContextData.Provider>
    );
}

export { WalletsContext, WalletsContextData};