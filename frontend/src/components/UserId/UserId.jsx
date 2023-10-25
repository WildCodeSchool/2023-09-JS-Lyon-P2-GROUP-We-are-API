import React from "react";
import PropTypes from "prop-types";
import "./UserId.scss";

function UserId({ setStateUserId }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const pseudo = event.target.value.trim();
      if (pseudo !== "") {
        setStateUserId(pseudo);
      }
    }
  };

  return (
    <div className="user-container">
      <div className="user-Message">
        <h1 className="user-text">QUEL EST TON PSEUDO ?</h1>
      </div>
      <div className="user-pseudo">
        <input
          type="text"
          className="user-Input"
          placeholder="Choisir ton Pseudo s'il vous plait"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

UserId.propTypes = {
  setStateUserId: PropTypes.func.isRequired, // Définissez propTypes pour setStateUserId
};

export default UserId;
