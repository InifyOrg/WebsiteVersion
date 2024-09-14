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

    const [parsingOutput, setParsingOutput] = useCookies(["parsing_output"]);
    const [allTokens, setAllTokens] = useState([]);
    
    useEffect(()=>{
        if(parsingOutput.parsing_output == null)
            parseManyByUserId();

        getAllTokens(parsingOutput.parsing_output);
    }, []);

    const parseManyByUserId = async () => {
        //const resp = await client.get(`api/ParsersMs/parseManyByUserId/${loginedUser.Id}`, {headers: {'Authorization':`${token}`}});

        const expDate = new Date();
        expDate.setTime(expDate.getTime() + 5*60*1000);
        setParsingOutput("parsing_output", "resp.data", {expires: expDate});
        window.location.reload();
    };

    const getWalletsCount = () => {
        let counter = 0;
        parsingOutput.parsing_output && parsingOutput.parsing_output.Wallets.map((w) => counter+=1);
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
       const wallet = parsingOutput.parsing_output && parsingOutput.parsing_output.Wallets.find((w) => w.Wallet.Id == id);

       console.log(wallet);

       return wallet;
    }

    return(
        <ParsersContextData.Provider value={{
                parsingOutput: parsingOutput.parsing_output,
                getWalletsCount: getWalletsCount,
                getWalletById: getWalletById,
                allTokens: allTokens,
            }}>
            {children}
        </ParsersContextData.Provider>
    );
}

export { ParsersContext, ParsersContextData};