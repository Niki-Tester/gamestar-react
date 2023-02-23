import styles from "./GameCard.module.css";
import noCoverArt from "./cover_art_placeholder.webp";
import { Link } from "react-router-dom";
import SmallLoadingSpinner from "../SmallLoadingSpinner/SmallLoadingSpinner";
import useFetch from "../../Hooks/useFetch";

const GameCard = ({ game }) => {
  const endpoint = `rating/${game.id}`;
  const { data, loading, error } = useFetch(endpoint);

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <Link to={`/game/${game.id}`}>
          <div>
            <div className={styles.cardImage}>
              {game.cover_art ? (
                <img src={game.cover_art} alt={`Cover art for ${game.name}`} />
              ) : (
                <img
                  src={noCoverArt}
                  alt={`No cover art available for ${game.name}`}
                />
              )}
            </div>
            <div className={styles.cardContent}>
              <p title={game.name}>{game.name}</p>
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
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
