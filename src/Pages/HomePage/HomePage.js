import logo from "./gamestar_full_logo.webp";
import styles from "./HomePage.module.css";
import PageContainer from "../../Components/PageContainer/PageContainer";

const HomePage = () => {
  document.title = "GameStar | Home";

  return (
    <PageContainer>
      <section className={styles.main}>
        <img src={logo} alt="gamestar logo" />
        <p>Your place for video game reviews</p>
      </section>
    </PageContainer>
  );
};

export default HomePage;
