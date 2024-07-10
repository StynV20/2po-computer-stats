import { useEffect, useState } from "react";
import Columns from "./components/Columns";
import Platform from "react-platform-js";
import getOSBitVersion from "./utils/getOSBitVersion";
import fetchIPAddress from "./utils/fetchIPAddress";
import styles from "./App.module.scss";

function App() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const { innerWidth: width, innerHeight: height } = window;

  const [jsEnabled, setJsEnabled] = useState(false);
  useEffect(() => {
    setJsEnabled(true);
  }, []);

  const [ipAddress, setIpAddress] = useState("");
  useEffect(() => {
    const getIpAddress = async () => {
      setIpAddress(await fetchIPAddress());
    };
    getIpAddress();
  }, []);

  return (
    <main className={styles.root}>
      <h1>II.0 Services Portal</h1>

      <h3>Operating System</h3>
      <Columns
        firstTitle="OS:"
        firstValue={Platform.OS}
        secondTitle="Version:"
        secondValue={Platform.OSVersion}
        thirdTitle="Bit-version:"
        thirdValue={getOSBitVersion()}
      />

      <h3>Web Browser</h3>
      <Columns
        firstTitle="Browser name:"
        firstValue={Platform.Browser}
        secondTitle="Version:"
        secondValue={Platform.BrowserVersion}
      />

      <section className={styles.oneLine}>
        <div>
          <h3>Screen Resolution</h3>
          <Columns
            firstValue={`${screenWidth} x ${screenHeight}`}
            onlyFirstColumn
          />
        </div>

        <div>
          <h3>Browser Size</h3>
          <Columns firstValue={`${width} x ${height}`} onlyFirstColumn />
        </div>

        <div>
          <h3>Cookies</h3>
          <Columns
            firstTitle="Enabled?"
            firstValue={navigator.cookieEnabled}
            onlyFirstColumn
          />
        </div>
      </section>

      <section className={styles.oneLine}>
        <div>
          <h3>Color Depth</h3>
          <Columns
            firstValue={`${window.screen.colorDepth} bits`}
            onlyFirstColumn
          />
        </div>

        <div>
          <h3>Javascript enabled?</h3>
          <Columns firstValue={jsEnabled} onlyFirstColumn />
        </div>

        <div>
          <h3>Java enabled?</h3>
          <Columns
            firstValue={window.navigator.javaEnabled()}
            onlyFirstColumn
          />
        </div>
      </section>

      <section className={styles.oneLine}>
        <div>
          <h3>IP Address</h3>
          <Columns firstValue={ipAddress} onlyFirstColumn />
        </div>

        <div>
          <h3>Browser / Device language</h3>
          <Columns firstValue={navigator.language} onlyFirstColumn />
        </div>
        <div>
          <h3>Browser layout engine</h3>
          <Columns firstValue={Platform.Engine} onlyFirstColumn />
        </div>
      </section>
    </main>
  );
}

export default App;
