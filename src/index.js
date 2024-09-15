import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UsersContext } from './contexts/UsersContext';
import { WalletsContext } from './contexts/WalletsContext';
import { ParsersContext } from './contexts/ParsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <UsersContext>
        <ParsersContext>
          <WalletsContext>
            
              <App/>
            
          </WalletsContext>
        </ParsersContext>
      </UsersContext>
    </BrowserRouter>
);
