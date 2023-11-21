import React from "react";
import PropTypes from "prop-types";
import styles from "./Avatar.module.css";
import avatar1 from "./Avatar.img/avatar1.png";
import avatar2 from "./Avatar.img/avatar2.png";
import avatar3 from "./Avatar.img/avatar3.png";
import avatar4 from "./Avatar.img/avatar4.png";

const avatarImages = [avatar1, avatar2, avatar3, avatar4];

function AvatarPicker({ setSelectedAvatar, onAvatarSelected }) {
  const handleAvatarClick = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
    onAvatarSelected(avatarUrl);
  };

  return (
    <div className={styles["avatar-selector"]}>
      <h2 className={styles["text-avatar"]}>Choose your avatar :</h2>
      <div className={styles["avatar-list"]}>
        {avatarImages !== null && avatarImages.length > 0 ? (
          avatarImages.map((avatarUrl) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              key={avatarUrl}
              src={avatarUrl}
              alt={`Avatar ${avatarUrl}`}
              className={styles.imgAvatar}
              onClick={() => handleAvatarClick(avatarUrl)}
            />
          ))
        ) : (
          <p>Aucun avatar disponible</p>
        )}
      </div>
    </div>
  );
}

AvatarPicker.propTypes = {
  setSelectedAvatar: PropTypes.func.isRequired,
  onAvatarSelected: PropTypes.func.isRequired,
};

export default AvatarPicker;
