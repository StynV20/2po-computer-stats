import styles from "./App.module.scss";
import Columns from "./components/Columns";
import Platform from "react-platform-js";
import getOSBitVersion from "./utils/getOSBitVersion";
import { useEffect, useState } from "react";

function App() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const { innerWidth: width, innerHeight: height } = window;

  const [jsEnabled, setJsEnabled] = useState(false);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

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
        thirdValue={getOSBitVersion()}
      />

      <h2>Web Browser</h2>
      <Columns
        firstTitle="Browser name:"
        firstValue={Platform.Browser}
        secondTitle="Version:"
        secondValue={Platform.BrowserVersion}
      />

      <section className={styles.oneLine}>
        <div>
          <h2>Screen Resolution</h2>
          <Columns firstValue={`${screenWidth} x ${screenHeight}`} />
        </div>

        <div>
          <h2>Browser Size</h2>
          <Columns firstValue={`${width} x ${height}`} />
        </div>

        <div>
          <h2>Cookies</h2>
          <Columns firstTitle="Enabled?" firstValue={navigator.cookieEnabled} />
        </div>
      </section>

      <section className={styles.oneLine}>
        <div>
          <h2>Color Depth</h2>
          <Columns firstValue={`${window.screen.colorDepth} bits`} />
        </div>

        <div>
          <h2>Javascript enabled?</h2>
          <Columns firstValue={jsEnabled} />
        </div>

        <div>
          <h2>Java enabled?</h2>
          <Columns firstValue={window.navigator.javaEnabled()} />
        </div>
      </section>
    </main>
  );
}

export default App;
