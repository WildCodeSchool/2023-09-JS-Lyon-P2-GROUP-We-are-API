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
  const [film, setFilm] = useState();
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
