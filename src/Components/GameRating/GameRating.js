import useFetch from "../../Hooks/useFetch";
import styles from "./GameRating.module.css";
import SmallLoadingSpinner from "../SmallLoadingSpinner/SmallLoadingSpinner";

const GameRating = ({ gameId }) => {
  const endpoint = `rating/${gameId}`;
  const { data, loading, error } = useFetch(endpoint);
  return (
    <div className={styles.rating}>
      {loading && <SmallLoadingSpinner />}
      {data && (
        <div className={styles.ratingOuter}>
          <div
            className={styles.ratingInner}
            style={{ width: `${data?.rating}%` }}
          ></div>
        </div>
      )}
      {error && console.error(error)}
    </div>
  );
};

export default GameRating;
