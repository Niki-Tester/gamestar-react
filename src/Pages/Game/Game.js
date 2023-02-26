import { Fragment } from "react";
import { useParams } from "react-router-dom";
import GameReviews from "../../Components/GameReviews/GameReviews";
import GameSummary from "../../Components/GameSummary/GameSummary";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import PageContainer from "../../Components/PageContainer/PageContainer";
import useFetch from "../../Hooks/useFetch";

const Game = () => {
  const { id } = useParams();
  const endpoint = `games/${id}`;
  const { data: game, loading, error } = useFetch(endpoint);

  return (
    <PageContainer>
      {loading && <LoadingSpinner />}
      {game && (
        <Fragment>
          <GameSummary game={game[0]} />
          <GameReviews gameId={game[0].id} />
        </Fragment>
      )}
      {error && error.message}
    </PageContainer>
  );
};

export default Game;
