import classNames from "classnames";
import styles from "./columns.module.scss";

interface props {
  firstTitle?: string;
  firstValue: string | boolean | number;
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
}: props) => (
  <div className={styles.columns}>
    <div
      className={classNames(styles.singleColumn, {
        [styles.noTitle]: !firstTitle,
      })}
    >
      {firstTitle && <h4>{firstTitle}</h4>}
      <p>{firstValue.toString()}</p>
    </div>

    <div
      className={classNames(styles.singleColumn, {
        [styles.noTitle]: !secondTitle,
        [styles.hidden]: !secondTitle && !secondValue,
      })}
    >
      <h4>{secondTitle}</h4>
      <p>{secondValue}</p>
    </div>

    <div
      className={classNames(styles.singleColumn, {
        [styles.noTitle]: !thirdTitle,
        [styles.hidden]: !thirdTitle && !thirdValue,
      })}
    >
      <h4>{thirdTitle}</h4>
      <p>{thirdValue}</p>
    </div>
  </div>
);

export default Columns;
