import styles from "./App.module.scss";

function App() {
  return (
    <main className={styles.root}>
      <h1>II.0 Services Portal</h1>

      <h2>Operating System</h2>

      <div className={styles.columns}>
        <div className={styles.singleColumn}>
          <h4>OS:</h4>
          <p>Mac</p>
        </div>
        <div className={styles.singleColumn}>
          <h4>Version:</h4>
          <p>1</p>
        </div>
        <div className={styles.singleColumn}>
          <h4>Bit-version:</h4>
          <p>1</p>
        </div>
      </div>
    </main>
  );
}

export default App;
