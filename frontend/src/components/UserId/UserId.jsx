import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./UserId.module.css";
import AvatarPicker from "../Avatar/AvatarPicker";
import avatar1 from "../Avatar/Avatar.img/avatar1.png";
import avatar2 from "../Avatar/Avatar.img/avatar2.png";
import avatar3 from "../Avatar/Avatar.img/avatar3.png";
import avatar4 from "../Avatar/Avatar.img/avatar4.png";

function UserId({ setStateUserId }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const avatarImages = [avatar1, avatar2, avatar3, avatar4];

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const pseudo = event.target.value.trim();
      if (pseudo !== "") {
        setStateUserId(pseudo);
      }
    }
  };

  return (
    <div className={styles["user-container"]}>
      <div className={styles["user-Message"]} />
      <AvatarPicker
        selectedAvatar={selectedAvatar}
        setSelectedAvatar={setSelectedAvatar}
        avatarImages={avatarImages}
      />
      {selectedAvatar && (
        <div>
          <img src={selectedAvatar} alt="Avatar sélectionné" />
        </div>
      )}
      <div className={styles["user-pseudo"]}>
        <h1 className={styles["user-text"]}>QUEL EST TON PSEUDO ?</h1>
        <input
          type={styles.text}
          className={styles["user-Input"]}
          placeholder="Choisis ton Pseudo s'il vous plaît"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

UserId.propTypes = {
  setStateUserId: PropTypes.func.isRequired,
};

export default UserId;
