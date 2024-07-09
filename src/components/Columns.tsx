import styles from "./columns.module.scss";

interface props {
  firstTitle: string;
  firstValue: string;
  secondTitle?: string;
  secondValue?: string;
  thirdTitle?: string;
  thirdValue?: string;
}

const Columns = ({
  firstTitle,
  firstValue,
  secondTitle,
  secondValue,
  thirdTitle,
  thirdValue,
}: props) => {
  return (
    <div className={styles.columns}>
      <div className={styles.singleColumn}>
        <h4>{firstTitle}</h4>
        <p>{firstValue}</p>
      </div>

      <div
        className={`${styles.singleColumn} ${
          !secondTitle && !secondValue && styles.hidden
        } `}
      >
        <h4>{secondTitle}</h4>
        <p>{secondValue}</p>
      </div>

      <div
        className={`${styles.singleColumn} ${
          !thirdTitle && !thirdValue && styles.hidden
        }`}
      >
        <h4>{thirdTitle}</h4>
        <p>{thirdValue}</p>
      </div>
    </div>
  );
};

export default Columns;
