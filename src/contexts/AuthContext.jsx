import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseApiURL } from '../config';
import axios from "axios";

const AuthContextData = React.createContext();
const client = axios.create({baseURL: baseApiURL});


const AuthContext = ({children})=>{
    const nav = useNavigate();

    const [token, setToken] = useState(null);
    const [loginedUser, setUser] = useState(null);

    const handleLogin = async (email, pass) => {
        const loginResp = await client.post('api/UsersMs/login', {email: email, password: pass});
        setToken(loginResp.data);

        const getUserResp = await client.get(`api/UsersMs/getUserByEmail/${email}`, {headers: {'Authorization':`${loginResp.data}`}});

        setUser(getUserResp.data);
        nav('/profile');
    };

    const handleLogout = async () => {
        setToken(null);
    };

    return(
        <AuthContextData.Provider value={{token: token, loginedUser: loginedUser, login: handleLogin, logout: handleLogout}}>
            {children}
        </AuthContextData.Provider>
    );
}

export { AuthContext, AuthContextData};