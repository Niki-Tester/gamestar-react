import styles from "./PageContainer.module.css";

const PageContainer = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default PageContainer;
