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

    return(
        <WalletsContextData.Provider value={{}}>
            {children}
        </WalletsContextData.Provider>
    );
}

export { WalletsContext, WalletsContextData};