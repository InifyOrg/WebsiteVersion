import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseApiURL } from '../config';
import axios from "axios";
import { UsersContextData } from "./UsersContext";
import { useCookies } from "react-cookie";

const ParsersContextData = React.createContext();
const client = axios.create({baseURL: baseApiURL});


const ParsersContext = ({children})=>{
    const {token, loginedUser, login, logout, register} = useContext(UsersContextData);

    const [parsingOutput, setParsingOutput] = useState(null);
    const [allTokens, setAllTokens] = useState([]);
    
    useEffect(()=>{
        const localParsingOutput = localStorage.getItem("parsingOutput");
        
        if(localParsingOutput == null && loginedUser != null)
            parseManyByUserId();
        else {
            setParsingOutput(JSON.parse(localParsingOutput));
            getAllTokens(JSON.parse(localParsingOutput));
        }
    }, [loginedUser]);

    const parseManyByUserId = async () => {
        await client.get(`api/ParsersMs/parseManyByUserId/${loginedUser.Id}`, {headers: {'Authorization':`${token}`}})
        .then(function (resp) {
            const expDate = new Date();
            resp.data.CreationDate = Date.now();
            resp.data.ExpirationDate = expDate.getTime() + 5*60*1000;

            localStorage.setItem("parsingOutput", JSON.stringify(resp.data));
            setParsingOutput(resp.data);
            getAllTokens(resp.data);
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

    const getWalletsCount = () => {
        let counter = 0;
        parsingOutput && parsingOutput.Wallets.map((w) => counter+=1);
        return counter;
    };

    const getAllTokens = (parsing_output) => {
        const tokensList = [];

        parsing_output && parsing_output.Wallets.map((w) => {
            w.Tokens.map((t) => {
                const tokenIndex = tokensList.findIndex(obj => obj.Name == t.Name && obj.Chain == t.Chain);
                if(tokenIndex > -1) {
                    tokensList[tokenIndex].Amount += t.Amount;
                    tokensList[tokenIndex].UsdValue += t.UsdValue;
                }
                else
                    tokensList.push(t);
            });
        });

        setAllTokens(tokensList.sort((a,b) => b.UsdValue - a.UsdValue));
    };

    const getWalletById = (id) => {
       const wallet = parsingOutput && parsingOutput.Wallets.find((w) => w.Wallet.Id == id);

       console.log(wallet);

       return wallet;
    }

    const deleteWalletFromList = (id) => {
        parsingOutput.TotalBalance -= getWalletById(id).Balance; 
        parsingOutput.Wallets = parsingOutput.Wallets.filter((w) => w.Wallet.Id != id);
        console.log(parsingOutput);
        localStorage.setItem("parsingOutput", JSON.stringify(parsingOutput));
        window.location.reload();
    }

    return(
        <ParsersContextData.Provider value={{
                parsingOutput: parsingOutput,
                getWalletsCount: getWalletsCount,
                getWalletById: getWalletById,
                parseManyByUserId: parseManyByUserId,
                deleteWalletFromList: deleteWalletFromList,
                allTokens: allTokens,
            }}>
            {children}
        </ParsersContextData.Provider>
    );
}

export { ParsersContext, ParsersContextData};