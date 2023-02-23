import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.main}>
      <span className={styles.spinner}></span>
      <p className={styles.text}>LOADING</p>
    </div>
  );
};

export default LoadingSpinner;
