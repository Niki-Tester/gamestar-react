import styles from "./NavBar.module.css";
import logo from "./gamestar_logo_light.webp";
import PageContainer from "../PageContainer/PageContainer";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className={styles.main}>
      <PageContainer>
        <nav className={styles.navbar}>
          <div className={styles.navLogo}>
            <Link to="/">
              <img src={logo} alt="gamestar logo" height="52px" />
            </Link>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
};
