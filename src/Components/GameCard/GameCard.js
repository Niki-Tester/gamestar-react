import styles from "./GameCard.module.css";

const GameCard = ({ review }) => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <a href="/">
          <div>
            <div className={styles.cardImage}>
              <img src={review.imageUrl} alt={`Cover art for ${review.name}`} />
            </div>
            <div className={styles.cardContent}>
              <p title={review.name}>{review.name}</p>
              <div className={styles.rating}>
                <div className={styles.ratingOuter}>
                  <div
                    className={styles.ratingInner}
                    style={{ width: `${review.rating}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GameCard;
