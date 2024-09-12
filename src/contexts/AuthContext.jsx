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

    const getLoginedUserByEmail = async (email, authToken) => {
        const resp = await client.get(`api/UsersMs/getUserByEmail/${email}`, {headers: {'Authorization':`${!token ? authToken : token}`}});
        setUser(resp.data);
    };

    const handleRegister = async (name, email, pass) => {
        const resp = await client.post('api/UsersMs/register', {name: name, email: email, password: pass});
        console.log(resp.data);
        handleLogin(email, pass);
    };

    const handleLogin = async (email, pass) => {
        await client.post('api/UsersMs/login', {email: email, password: pass})
        .then(function (resp) {
            console.log(resp);
            setToken(resp.data);

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
        setToken(null);
    };

    return(
        <AuthContextData.Provider value={{token: token, loginedUser: loginedUser, login: handleLogin, logout: handleLogout, register: handleRegister}}>
            {children}
        </AuthContextData.Provider>
    );
}

export { AuthContext, AuthContextData};