import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header({ userId, score }) {
  return (
    <div className={styles.header}>
      <div className={styles.userInfo}>
        <h2 className={styles.logoText}>API-Quiz</h2>
        <div className={styles.userAndScore}>
          <p className={styles.theUser}>{userId}</p>
          <p className={styles.theScore}>Score: {score}</p>
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  userId: "",
};

Header.propTypes = {
  userId: PropTypes.string,
  score: PropTypes.number.isRequired,
};

export default Header;
