import styles from "./App.module.scss";
import Columns from "./components/Columns";
import Platform from "react-platform-js";

function App() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const { innerWidth: width, innerHeight: height } = window;

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

      <h2>Screen Resolution</h2>
      <Columns firstValue={`${screenWidth} x ${screenHeight}`} />

      <h2>Browser Size</h2>
      <Columns firstValue={`${width} x ${height}`} />
    </main>
  );
}

export default App;
