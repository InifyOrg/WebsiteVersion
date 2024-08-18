import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import PageHeader from './components/page-header/PageHeader';
import SideNavBar from './components/side-nav-bar/SideNavBar.jsx';
import ProfilePage from './components/profile-page/ProfilePage.jsx'
import WalletsPage from './components/wallets-page/WalletsPage.jsx';



function App() {
  return (

    
      <div className={styles.main}>
        <SideNavBar></SideNavBar>
        <PageHeader ></PageHeader>

        <div className={styles.content}>
          <Routes>
            <Route index path='/profile' element={<ProfilePage></ProfilePage>}></Route>
            <Route index path='/wallets' element={<WalletsPage></WalletsPage>}></Route>
          </Routes>
        </div>
      </div>
  );
}


export default App;
