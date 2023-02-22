import styles from "./NavBar.module.css";
import logo from "./gamestar_logo_light.webp";
import PageContainer from "../PageContainer/PageContainer";

export const NavBar = () => {
  return (
    <header className={styles.main}>
      <PageContainer>
        <nav className={styles.navbar}>
          <div className={styles.navLogo}>
            <a href="/">
              <img src={logo} alt="gamestar logo" height="52px" />
            </a>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Register</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
};
