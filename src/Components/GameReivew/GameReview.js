import useFetch from "../../Hooks/useFetch";
import GameRating from "../GameRating/GameRating";
import SmallLoadingSpinner from "../SmallLoadingSpinner/SmallLoadingSpinner";
import styles from "./GameReview.module.css";

const GameReview = ({ review }) => {
  const { data: user, loading, error } = useFetch(`user/${review.user_id}`);
  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>{review.heading}</h3>
      <div className={styles.info}>
        <div className={styles.rating}>
          <GameRating gameId={review.game_id} />
        </div>
        <div className={styles.likes}>
          <i className="fa-regular fa-heart"></i>
          <span>{review.likes.length}</span>
        </div>
        {loading && <SmallLoadingSpinner />}
        {user && (
          <p className={styles.username}>
            <i className="fa-regular fa-user"></i> <span>{user.username}</span>
          </p>
        )}
        {error && console.error(error.message)}
      </div>
    </div>
  );
};

export default GameReview;
