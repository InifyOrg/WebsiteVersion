import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import styles from './App.module.css';
import PageHeader from './components/page-header/PageHeader';
import SideNavBar from './components/side-nav-bar/SideNavBar.jsx';
import ProfilePage from './components/profile-page/ProfilePage.jsx'
import WalletsPage from './components/wallets-page/WalletsPage.jsx';
import DetailsPage from './components/wallets-page/DetailsPage.jsx';
import RegisterPage from './components/register-page/RegisterPage.jsx';
import LoginPage from './components/login-page/LoginPage.jsx';
import SettingsPage from './components/settings-page/SettingsPage.jsx';
import ProtectRoute from './components/ProtectedRoute.jsx';
import { useContext } from 'react';
import { UsersContextData } from './contexts/UsersContext.jsx';

function App() {
  const {token, loginedUser, login, logout, register} = useContext(UsersContextData);

  const location = useLocation();

  return (

    

      <div className={styles.main}>
        <SideNavBar></SideNavBar>
    
        <div className={styles.content}>
          <Routes>
            <Route path='/' element={!token ? <Navigate to="/register" replace={true} /> : <Navigate to="/profile" replace={true} />}></Route>
            <Route path='/register' element={<RegisterPage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/profile' element={<ProtectRoute><ProfilePage/></ProtectRoute>}></Route>
            <Route path='/wallets'>
              <Route index element={<ProtectRoute><WalletsPage/></ProtectRoute>}></Route>
              <Route path=':id' element={<ProtectRoute><DetailsPage/></ProtectRoute>}></Route>
            </Route>
            <Route path='/settings' element={<ProtectRoute><SettingsPage/></ProtectRoute>}></Route>
          </Routes>
        </div>
      </div>
  );
}


export default App;
