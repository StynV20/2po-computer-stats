import styles from "./App.module.scss";
import Columns from "./components/Columns";
import Platform from "react-platform-js";

function App() {
  return (
    <main className={styles.root}>
      <h1>II.0 Services Portal</h1>

      <h2>Operating System</h2>
      <Columns
        firstTitle="OS:"
        firstValue={Platform.OS}
        secondTitle="Version:"
        secondValue={Platform.OSVersion}
        thirdTitle="Bit-version:"
        thirdValue="32 bit / 64 bit"
      />

      <h2>Web Browser</h2>
      <Columns
        firstTitle="Browser name:"
        firstValue={Platform.Browser}
        secondTitle="Version:"
        secondValue={Platform.BrowserVersion}
      />
    </main>
  );
}

export default App;
