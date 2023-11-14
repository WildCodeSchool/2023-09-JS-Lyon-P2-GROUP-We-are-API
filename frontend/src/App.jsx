import React, { useState, useRef } from "react";
import UserId from "./components/UserId/UserId";
import styles from "./App.module.css";
import Api from "./components/Api/Api";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers";
import Answers from "./components/Answers/Answers";
import Image from "./components/Image/Image";
import Header from "./components/Header/Header";

function App() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [answers, setAnswers] = useState("");
  const [answersReturn, setAnswersReturn] = useState(true);
  // État local pour gérer le pseudo de l'utilisateur
  const [userId, setUserId] = useState(null);
  const [film, setFilm] = useState({
    adult: false,
    backdrop_path: "/8yACFuo4OaIiKr9hHFlmPcGalKx.jpg",
    genre_ids: [28, 12, 878],
    id: 76341,
    original_language: "en",
    original_title: "Mad Max: Fury Road",
    overview:
      "Hanté par un lourd passé, Mad Max estime que le meilleur moyen de survivre est de rester seul. Cependant, il se retrouve embarqué par une bande qui parcourt le désert à bord d’un véhicule militaire piloté par l’Impératrice Furiosa. Ils fuient la Citadelle où sévit le terrible Immortan Joe qui s’est fait voler un objet irremplaçable. Enragé, ce Seigneur de guerre envoie ses hommes pour traquer les rebelles impitoyablement…",
    popularity: 114.861,
    poster_path: "/oLy2V6AWSEfdPgKOtrSGnwB3Q2R.jpg",
    release_date: "2015-05-13",
    title: "Mad Max : Fury Road",
    video: false,
    vote_average: 7.6,
    vote_count: 21041,
  });
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(false);
  const [please, setPlease] = useState(false);
  const [next, setNext] = useState(false);
  const reset = useRef(true);
  // Fonction appelée lorsque l'utilisateur entre un pseudo
  const handleUserIdEntered = (pseudo) => {
    setUserId(pseudo);
  };

  return (
    <div className={styles.appAllContainer}>
      {answersReturn === true ? (
        <Api
          film={film}
          setFilm={setFilm}
          setAnswersReturn={setAnswersReturn}
          setNext={setNext}
          reset={reset}
          setPlease={setPlease}
        />
      ) : null}
      <div className={styles.appAll}>
        <div className={styles.appHeader}>
          <Header userId={userId} score={score} />
          <div className={styles.divavatar}>
            {selectedAvatar !== null && (
              <img
                className={styles.avatar}
                src={selectedAvatar}
                alt="Avatar sélectionné"
              />
            )}
          </div>
        </div>
        <div className={styles.appBody}>
          {film !== null ? (
            <Image
              film={film}
              reset={reset}
              userId={userId}
              setNext={setNext}
              next={next}
            />
          ) : (
            <p>loading</p>
          )}
          {check === true ? (
            <LogicAnswers
              answers={answers}
              film={film}
              setAnswersReturn={setAnswersReturn}
              answersReturn={answersReturn}
              setScore={setScore}
              score={score}
              setFilm={setFilm}
              setAnswers={setAnswers}
              Api={<Api />}
              setCheck={setCheck}
              setPlease={setPlease}
              setNext={setNext}
              next={next}
            />
          ) : null}
          <Answers
            setAnswersReturn={setAnswersReturn}
            answers={answers}
            setAnswers={setAnswers}
            setCheck={setCheck}
            next={next}
            reset={reset}
          />
          {please === true ? (
            <p className={styles.retry}>Please retry</p>
          ) : null}
          {userId === null || selectedAvatar === null ? (
            <UserId
              setStateUserId={handleUserIdEntered}
              setAvatarSelected={setSelectedAvatar}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
