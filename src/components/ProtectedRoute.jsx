import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UsersContextData } from '../contexts/UsersContext';

const ProtectRoute = ({children}) => {
    const {token, login, logout} = useContext(UsersContextData);

    if (!token) {
        return <Navigate to="/" replace />;
    }
    
    return children;
}

export default ProtectRoute;
