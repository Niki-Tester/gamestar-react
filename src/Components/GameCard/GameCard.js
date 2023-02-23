import styles from "./GameCard.module.css";
import noCoverArt from "./cover_art_placeholder.webp";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
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
                <div className={styles.ratingOuter}>
                  <div
                    className={styles.ratingInner}
                    style={{ width: `${game.rating}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
