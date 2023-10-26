import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header({ userId, score }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.logoText}>API-Quiz</h2>
      <div className={styles.userAndScore}>
        <p className={styles.theUser}>{userId}</p>
        <p className={styles.theScore}>Score: {score}</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  userId: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Header;
