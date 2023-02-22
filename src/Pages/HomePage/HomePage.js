import logo from "./gamestar_full_logo.webp";
import styles from "./HomePage.module.css";
import PageContainer from "../../Components/PageContainer/PageContainer";
import GameCardGrid from "../../Components/GameCardGrid/GameCardGrid";
import GameCard from "../../Components/GameCard/GameCard";

const HomePage = () => {
  document.title = "GameStar | Home";

  const reviews = [
    {
      id: 1,
      imageUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co4804.jpg",
      name: "sailwind",
      rating: 90,
    },
  ];

  return (
    <PageContainer>
      <section className={styles.main}>
        <img src={logo} alt="gamestar logo" />
        <p>Your place for video game reviews</p>
      </section>
      <GameCardGrid>
        {reviews.map((review) => (
          <GameCard review={review} key={review.id} />
        ))}
      </GameCardGrid>
    </PageContainer>
  );
};

export default HomePage;
