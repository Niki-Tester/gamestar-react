import GameRating from "../GameRating/GameRating";
import styles from "./GameSummary.module.css";

const GameSummary = ({ game }) => {
  return (
    <div className={styles.main}>
      <img
        className={styles.image}
        src={game.cover_art}
        alt={`${game.name} cover art`}
      />
      <h2 className={styles.name}>{game.name}</h2>
      <GameRating gameId={game.id} />
      <p className={styles.summary}>{game.summary}</p>
    </div>
  );
};

export default GameSummary;
