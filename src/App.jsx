import styles from './App.module.css';
import PageHeader from './components/page-header/PageHeader';
import SideNavBar from './components/side-nav-bar/SideNavBar.jsx';

function App() {
  return (
      <div className={styles.main}>
        <SideNavBar></SideNavBar>
        <PageHeader></PageHeader>
      </div>
  );
}

// test commit

export default App;
