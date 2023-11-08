import React from "react";
import PropTypes from "prop-types";
import styles from "./Avatar.module.css";

function AvatarPicker({ setSelectedAvatar, avatarImages }) {
  const handleAvatarClick = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
  };

  return (
    <div className={styles["avatar-selector"]}>
      <h2>Choisissez votre avatar :</h2>
      <div className={styles["avatar-list"]}>
        {avatarImages.map((avatarUrl) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <img
            key={avatarUrl}
            src={avatarUrl}
            alt={`Avatar ${avatarUrl}`}
            className={styles["img-avatar"]}
            onClick={() => handleAvatarClick(avatarUrl)}
          />
        ))}
      </div>
    </div>
  );
}

AvatarPicker.propTypes = {
  setSelectedAvatar: PropTypes.func.isRequired,
  avatarImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AvatarPicker;
