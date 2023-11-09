import React, { useEffect, useState } from "react";
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
  const [film, setFilm] = useState();
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(false);
  const [please, setPlease] = useState(false);
  // Fonction appelée lorsque l'utilisateur entre un pseudo
  const handleUserIdEntered = (pseudo) => {
    setUserId(pseudo);
  };

  // Récupérer le score depuis le localStorage lors de l'initialisation du composant
  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  return (
    <div className={styles.appBody}>
      <Header userId={userId} score={score} />
      <Timer />
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
