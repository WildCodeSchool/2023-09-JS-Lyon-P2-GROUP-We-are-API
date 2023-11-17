import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./UserId.module.css";
import AvatarPicker from "../Avatar/AvatarPicker";
import avatar1 from "../Avatar/Avatar.img/avatar1.png";
import avatar2 from "../Avatar/Avatar.img/avatar2.png";
import avatar3 from "../Avatar/Avatar.img/avatar3.png";
import avatar4 from "../Avatar/Avatar.img/avatar4.png";

function UserId({ setStateUserId, setAvatarSelected }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const pseudo = event.target.value.trim();
      if (pseudo !== "") {
        setStateUserId(pseudo);
        // Utilisez setAvatarSelected avec l'URL de l'avatar sélectionné
        setAvatarSelected(selectedAvatar);
      }
    }
  };

  const handleAvatarSelected = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
  };

  const avatarImages = [avatar1, avatar2, avatar3, avatar4];

  return (
    <div className={styles["blur-container"]}>
      <div className={styles["user-container"]}>
        {selectedAvatar !== null ? (
          <img
            className={styles.Avatar}
            src={selectedAvatar}
            alt="Avatar sélectionné"
          />
        ) : (
          <AvatarPicker
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
            avatarImages={avatarImages}
            onAvatarSelected={handleAvatarSelected}
          />
        )}
        {selectedAvatar !== null && (
          <div className={styles["user-pseudo"]}>
            <h1 className={styles["user-text"]}>WHAT IS YOUR USERNAME?</h1>
            <input
              type="text"
              className={styles["user-Input"]}
              placeholder="username"
              onKeyDown={handleKeyDown}
            />
          </div>
        )}
      </div>
    </div>
  );
}

UserId.propTypes = {
  setStateUserId: PropTypes.func.isRequired,
  setAvatarSelected: PropTypes.func.isRequired,
};

export default UserId;
