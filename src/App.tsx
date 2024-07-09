import styles from "./App.module.scss";
import Platform from "react-platform-js";

function App() {
  return (
    <main className={styles.root}>
      <h1>II.0 Services Portal</h1>

      <h2>Operating System</h2>

      <div className={styles.columns}>
        <div className={styles.singleColumn}>
          <h4>OS:</h4>
          <p>{Platform.OS}</p>
        </div>
        <div className={styles.singleColumn}>
          <h4>Version:</h4>
          <p>{Platform.OSVersion}</p>
        </div>
        <div className={styles.singleColumn}>
          <h4>Bit-version:</h4>
          <p>32 bit / 64 bit</p>
        </div>
      </div>
    </main>
  );
}

export default App;
