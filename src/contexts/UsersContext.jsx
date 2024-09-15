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
      localStorage.clear();
    };

    const handleEdit = async (name, email) => {

      const formData = new FormData();
      formData.append('Id', loginedUser.auth_user.Id);
      name && formData.append('Name', name);
      email && formData.append('Email', email);

      await client.put(`api/UsersMs/editUser`, formData, {headers: {'Authorization':`${!token.auth_token ? authToken : token.auth_token}`, 'Content-Type' : 'application/json'}})
      .then(function (resp) {
        const expDate = new Date();
        expDate.setDate(expDate.getDate() + 1);

        const data = `{"Id":${loginedUser.auth_user.Id}, "Name":"${name ? name : loginedUser.auth_user.Name}", "Email":"${email ? email : loginedUser.auth_user.Email}", "RegisteredAt":"${loginedUser.auth_user.RegisteredAt}"}`;
        
        setUser("auth_user", data, {expires: expDate});

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

    const handleEditPassword = async (oldPass, newPass) => {
      const formData = new FormData();
      formData.append('Id', loginedUser.auth_user.Id);
      formData.append('OldPassword', oldPass);
      formData.append('NewPassword', newPass);

      await client.put(`api/UsersMs/editPassword`, formData, {headers: {'Authorization':`${!token.auth_token ? authToken : token.auth_token}`, 'Content-Type' : 'application/json'}})
      .then(function (resp) {
        handleLogin(loginedUser.auth_user.Email, newPass);
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

    return(
        <UsersContextData.Provider value={{token: token.auth_token, loginedUser: loginedUser.auth_user, login: handleLogin, logout: handleLogout, register: handleRegister, handleEdit: handleEdit, handleEditPassword: handleEditPassword}}>
            {children}
        </UsersContextData.Provider>
    );
}

export { UsersContext, UsersContextData};