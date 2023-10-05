import styles from './App.module.css';
import SideNavBar from './components/side-nav-bar/SideNavBar.jsx';

function App() {
  return (
      <div className={styles.main}>
        <SideNavBar></SideNavBar>
      </div>
  );
}

export default App;
