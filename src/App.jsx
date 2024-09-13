import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './App.module.css';
import PageHeader from './components/page-header/PageHeader';
import SideNavBar from './components/side-nav-bar/SideNavBar.jsx';
import ProfilePage from './components/profile-page/ProfilePage.jsx'
import WalletsPage from './components/wallets-page/WalletsPage.jsx';
import DetailsPage from './components/wallets-page/DetailsPage.jsx';
import RegisterPage from './components/register-page/RegisterPage.jsx';
import LoginPage from './components/login-page/LoginPage.jsx';
import SettingsPage from './components/settings-page/SettingsPage.jsx';

function App() {

  const location = useLocation();
  const isDetailsPage = location.pathname.includes('/wallets/');

  return (

    

      <div className={styles.main}>
        <SideNavBar></SideNavBar>
    
        <div className={styles.content}>
          <Routes>
            <Route index path='/profile' element={<ProfilePage/>}></Route>
            <Route path='/wallets' element={!isDetailsPage && <WalletsPage/>}>
              <Route path=':id' element={isDetailsPage && <DetailsPage/>}></Route>
            </Route>
            <Route path='/settings' element={<SettingsPage/>}></Route>
            <Route path='/register' element={<RegisterPage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
          </Routes>
        </div>
      </div>
  );
}


export default App;
