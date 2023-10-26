import React, { useState } from "react";
import UserId from "./components/UserId/UserId";
import "./App.module.css";
import Api from "./components/Api/Api";

function App() {
  // État local pour gérer le pseudo de l'utilisateur et l'activation du flou
  const [userId, setUserId] = useState(null);
  const [isBlurActive, setBlurActive] = useState(true);
    const [film, setFilm] = useState();

  // Fonction appelée lorsque l'utilisateur entre un pseudo
  const handleUserIdEntered = (pseudo) => {
    setUserId(pseudo);
    setBlurActive(false);
  };

  return (
    <div>
      <div className={`user-container-app ${isBlurActive ? "blur" : ""}`}>
        {/* Partie principale de l'application */}
      </div>
      <Api film={film} setFilm={setFilm} />;
      {/* Affiche le composant UserId seulement si userId est null */}
      {userId === null ? <UserId setStateUserId={handleUserIdEntered} /> : null}
    </div>
  );
}

export default App;