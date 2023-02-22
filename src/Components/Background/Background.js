import defaultImage from "./defaultImage.webp";
import styles from "./Background.module.css";

const Background = ({ imageUrl, imageAlt }) => {
  return (
    <div className={styles.main}>
      {imageUrl ? (
        <img className={styles.background} src={imageUrl} alt={imageAlt} />
      ) : (
        <img
          className={styles.background}
          src={defaultImage}
          alt="Arcade video game venue"
        />
      )}
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Background;
