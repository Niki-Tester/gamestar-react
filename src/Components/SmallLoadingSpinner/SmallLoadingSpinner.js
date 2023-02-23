import styles from "./SmallLoadingSpinner.module.css";

const SmallLoadingSpinner = () => {
  return (
    <div className={styles.main}>
      <span className={styles.spinner}></span>
    </div>
  );
};

export default SmallLoadingSpinner;
