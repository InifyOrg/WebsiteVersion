import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UsersContext } from './contexts/UsersContext';
import { WalletsContext } from './contexts/WalletsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersContext>
        <WalletsContext>
          <App/>
        </WalletsContext>
      </UsersContext>
    </BrowserRouter>
  </React.StrictMode>
);
