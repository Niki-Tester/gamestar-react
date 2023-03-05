import { Link } from "react-router-dom";
import PageContainer from "../../Components/PageContainer/PageContainer";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <PageContainer>
      <div className={styles.main}>
        <div className={styles.content}>
          <h3>Login</h3>
          <p>Login to create your own reviews!</p>
          <form
            className={styles.loginForm}
            id="register-form"
            method="POST"
            action=""
          >
            <div>
              <div>
                <i className="fa-solid fa-user prefix"></i>
                <input
                  id="username"
                  name="username"
                  type="text"
                  minLength="3"
                  maxLength="16"
                  pattern="[a-zA-Z0-9]+"
                  title="Usernames must be between 3-16 characters long and can include lower/uppercase characters and numbers."
                  placeholder="Username"
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <i className="fa-solid fa-lock prefix"></i>
                <input
                  id="password"
                  name="password"
                  type="password"
                  minLength="8"
                  title="Passwords must be at least 8 characters long."
                  placeholder="Password"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div>
              <button id="submit-button" type="submit" disabled>
                Login
              </button>
              <p>
                Not registered yet Registered?{" "}
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default LoginPage;
