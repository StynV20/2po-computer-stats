import classNames from "classnames";
import styles from "./columns.module.scss";

interface props {
  firstTitle?: string;
  firstValue: string | boolean | number;
  secondTitle?: string;
  secondValue?: string;
  thirdTitle?: string;
  thirdValue?: string;
  onlyFirstColumn?: boolean;
}

const Columns = ({
  firstTitle,
  firstValue,
  secondTitle,
  secondValue,
  thirdTitle,
  thirdValue,
  onlyFirstColumn,
}: props) => (
  <div className={styles.columns}>
    <div
      className={classNames(styles.singleColumn, {
        [styles.noTitle]: !firstTitle,
      })}
    >
      {firstTitle && <h4>{firstTitle}</h4>}
      <p className={styles.value}>{firstValue.toString()}</p>
    </div>

    <div
      className={classNames(styles.singleColumn, {
        [styles.noTitle]: !secondTitle,
        [styles.hidden]: !secondTitle && !secondValue,
        [styles.gone]: onlyFirstColumn,
      })}
    >
      <h4>{secondTitle}</h4>
      <p className={styles.value}>{secondValue}</p>
    </div>

    <div
      className={classNames(styles.singleColumn, {
        [styles.noTitle]: !thirdTitle,
        [styles.hidden]: !thirdTitle && !thirdValue,
        [styles.gone]: onlyFirstColumn,
      })}
    >
      <h4>{thirdTitle}</h4>
      <p className={styles.value}>{thirdValue}</p>
    </div>
  </div>
);

export default Columns;
