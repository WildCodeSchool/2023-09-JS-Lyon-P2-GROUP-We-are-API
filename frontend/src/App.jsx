import React, { useState } from "react";
import UserId from "./components/UserId/UserId";
import styles from "./App.module.css";
import Api from "./components/Api/Api";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers";
import Answers from "./components/Answers/Answers";
import Image from "./components/Image/Image";
import Header from "./components/Header/Header";
import Timer from "./components/timer/Timer";

function App() {
  const [answers, setAnswers] = useState("");
  const [answersReturn, setAnswersReturn] = useState(true);
  // État local pour gérer le pseudo de l'utilisateur et l'activation du flou
  const [userId, setUserId] = useState(null);
  const [isBlurActive, setBlurActive] = useState(true);
  const [film, setFilm] = useState();
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(false);
  const [please, setPlease] = useState(false);
  // Fonction appelée lorsque l'utilisateur entre un pseudo
  const handleUserIdEntered = (pseudo) => {
    setUserId(pseudo);
    setBlurActive(false);
  };

  return (
    <div className={styles.appBody}>
      <div className={`user-container-app ${isBlurActive ? "blur" : ""}`}>
        {/* Partie principale de l'application */}
      </div>
      <Header userId={userId} score={score} />
      {answersReturn === false ? <Timer /> : null}
      {answersReturn === true ? (
        <Api setFilm={setFilm} setAnswersReturn={setAnswersReturn} />
      ) : null}
      {film ? <Image film={film} /> : <p>loading</p>}
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
        />
      ) : null}
      <Answers setAnswers={setAnswers} setCheck={setCheck} />
      {please === true ? <p>Please retry</p> : null}
      {userId === null ? <UserId setStateUserId={handleUserIdEntered} /> : null}
    </div>
  );
}

export default App;
