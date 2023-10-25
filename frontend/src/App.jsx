import React, { useState } from "react";
import UserId from "./components/UserId/UserId";
import "./App.css";
import "./components/UserId/Blur.scss";

function App() {
  // État local pour gérer le pseudo de l'utilisateur et l'activation du flou
  const [userId, setUserId] = useState(null);
  const [isBlurActive, setBlurActive] = useState(true);

  // Fonction appelée lorsque l'utilisateur entre un pseudo
  const handleUserIdEntered = (pseudo) => {
    setUserId(pseudo);
    setBlurActive(false);
  };

  return (
    <div>
      <div className={`blur-container ${isBlurActive ? "blur" : ""}`}>
        {/* Partie principale de l'application */}
        <div className="main-page">
          <h1>Bienvenue, {userId} !</h1>
          <img src="./dessert.png" alt="" />
        </div>
      </div>
      {/* Affiche le composant UserId seulement si userId est null */}
      {userId === null && (
        <div className="user-container-app">
          <UserId setStateUserId={handleUserIdEntered} />
        </div>
      )}
    </div>
  );
}

export default App;
