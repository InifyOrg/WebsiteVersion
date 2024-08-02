import styles from './App.module.css';
import PageHeader from './components/page-header/PageHeader';
import SideNavBar from './components/side-nav-bar/SideNavBar.jsx';
import Main from './components/Main/Main.jsx';

function App() {
  return (
      <div className={styles.main}>
        <SideNavBar></SideNavBar>
        <PageHeader></PageHeader>
        <Main></Main>
      </div>
  );
}


export default App;
