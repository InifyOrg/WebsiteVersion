import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseApiURL } from '../config';
import axios from "axios";
import { useCookies } from "react-cookie";

const UsersContextData = React.createContext();
const client = axios.create({baseURL: baseApiURL});


const UsersContext = ({children})=>{
    const nav = useNavigate();

    const [token, setToken, remToken] = useCookies(["auth_token"]);
    const [loginedUser, setUser, remUser] = useCookies(["auth_user"]);

    const getLoginedUserByEmail = async (email, authToken) => {
        const resp = await client.get(`api/UsersMs/getUserByEmail/${email}`, {headers: {'Authorization':`${!token.auth_token ? authToken : token.auth_token}`}});
        
        const expDate = new Date();
        expDate.setDate(expDate.getDate() + 1);

        setUser("auth_user",resp.data, {expires: expDate});
    };

    const handleRegister = async (name, email, pass) => {
        const resp = await client.post('api/UsersMs/register', {name: name, email: email, password: pass});
        handleLogin(email, pass);
    };

    const handleLogin = async (email, pass) => {
        await client.post('api/UsersMs/login', {email: email, password: pass})
        .then(function (resp) {
            console.log(resp);
            const expDate = new Date();
            expDate.setDate(expDate.getDate() + 1);

            setToken("auth_token", resp.data, {expires: expDate});

            getLoginedUserByEmail(email, resp.data);
            nav('/profile');
          })
        .catch(function (error) {
            if (error.response) {
              console.log('Server responded with status code:', error.response.status);
              console.log('Response data:', error.response.data);
            } else if (error.request) {
              console.log('No response received:', error.request);
            } else {
              console.log('Error creating request:', error.message);
            }
          });
    };

    const handleLogout = async () => {
      remToken("auth_token");
      remUser("auth_user");
    };

    return(
        <UsersContextData.Provider value={{token: token.auth_token, loginedUser: loginedUser.auth_user, login: handleLogin, logout: handleLogout, register: handleRegister}}>
            {children}
        </UsersContextData.Provider>
    );
}

export { UsersContext, UsersContextData};