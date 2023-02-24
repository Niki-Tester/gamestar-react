import styles from "./GameCard.module.css";
import noCoverArt from "./cover_art_placeholder.webp";
import { Link } from "react-router-dom";
import GameRating from "../GameRating/GameRating";
import useFetch from "../../Hooks/useFetch";

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
              <GameRating gameId={game.id} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
