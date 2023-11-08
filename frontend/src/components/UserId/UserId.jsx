import React from "react";
import PropTypes from "prop-types";
import styles from "./UserId.module.css";

function UserId({ setStateUserId }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const pseudo = event.target.value.trim();
      if (pseudo !== "") {
        setStateUserId(pseudo);
      }
    }
  };
  UserId.propTypes = {
    setStateUserId: PropTypes.func.isRequired, // Définissez propTypes pour setStateUserId
  };

  return (
    <div className={styles["user-container"]}>
      <div className={styles["user-Message"]}>
        <h1 className={styles["user-text"]}>QUEL EST TON PSEUDO ?</h1>
      </div>
      <div className={styles["user-pseudo"]}>
        <input
          type={styles.text}
          className={styles["user-Input"]}
          placeholder="Pseudo"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
export default UserId;
