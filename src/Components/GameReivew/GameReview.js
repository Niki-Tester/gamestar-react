import GameRating from "../GameRating/GameRating";
import styles from "./GameReview.module.css";

const GameReview = ({ review }) => {
  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>{review.heading}</h3>
      <div className={styles.info}>
        <GameRating gameId={review.game_id} />
      </div>
    </div>
  );
};

export default GameReview;
