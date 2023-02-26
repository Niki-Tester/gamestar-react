import { Fragment } from "react";
import useFetch from "../../Hooks/useFetch";
import GameReview from "../GameReivew/GameReview";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const GameReviews = ({ gameId }) => {
  const endpoint = `reviews/${gameId}`;
  const { data: reviews, loading, error } = useFetch(endpoint);

  return (
    <Fragment>
      {loading && <LoadingSpinner />}
      {reviews &&
        reviews.map((review) => <GameReview review={review} key={review.id} />)}
      {error && console.error(error)}
    </Fragment>
  );
};

export default GameReviews;
