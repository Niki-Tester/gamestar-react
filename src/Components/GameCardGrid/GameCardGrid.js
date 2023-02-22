import styles from "./GameCardGrid.module.css";

const GameCardGrid = ({ children }) => {
  return <div className={styles.cards}>{children}</div>;
};

export default GameCardGrid;
