import logo from "./gamestar_full_logo.webp";
import styles from "./HomePage.module.css";
import PageContainer from "../../Components/PageContainer/PageContainer";
import GameCardGrid from "../../Components/GameCardGrid/GameCardGrid";
import GameCard from "../../Components/GameCard/GameCard";
import useFetch from "../../Hooks/useFetch";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const HomePage = () => {
  document.title = "GameStar | Home";
  const endpoint = "games/";
  const { data: games, loading, error } = useFetch(endpoint);
  return (
    <PageContainer>
      <section className={styles.main}>
        <img src={logo} alt="gamestar logo" />
        <p>Your place for video game reviews</p>
      </section>
      {loading && <LoadingSpinner />}
      {games && (
        <GameCardGrid>
          {games
            ? games.map((game) => {
                if (game.cover_art === "/static/images/no_cover.webp") {
                  game.cover_art = undefined;
                }
                return <GameCard game={game} key={game.id} />;
              })
            : "Loading Games..."}
        </GameCardGrid>
      )}
      {error && console.log(error)}
    </PageContainer>
  );
};

export default HomePage;
