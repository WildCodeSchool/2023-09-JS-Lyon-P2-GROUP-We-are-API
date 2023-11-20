import { Outlet, useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import UserId from "./components/UserId/UserId";
import styles from "./App.module.css";
import Api from "./components/Api/Api";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers";
import Answers from "./components/Answers/Answers";
import Header from "./components/Header/Header";

function App() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [answers, setAnswers] = useState("");
  const [answersReturn, setAnswersReturn] = useState(true);
  // État local pour gérer le pseudo de l'utilisateur
  const [userId, setUserId] = useState(null);
  const [film, setFilm] = useState({
    backdrop_path: "xxx",
    original_language: "en",
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
  const navigate = useNavigate();
  const [timeDifficulty, setTimeDifficulty] = useState("20");
  const [burger, setBurger] = useState(false);
  const [color, setColor] = useState(false);

  function handleChangeMode(e) {
    setNext(true);
    const element = reset;
    setAnswersReturn(true);
    element.current = false;
    navigate(e.target.value);
  }

  function getColor() {
    if (color === true) {
      return "#03b309";
    }
    return "red";
  }
  return (
    <div className={styles.appAllContainer}>
      <select
        id={styles.difficulty}
        onChange={(e) => setTimeDifficulty(e.target.value)}
      >
        <option value="">--Difficulty ?--</option>
        <option value="30">easy (30s)</option>
        <option value="20">medium (20s)</option>
        <option value="10">hard (10s)</option>
      </select>
      {answersReturn === true ? (
        <Api
          film={film}
          setFilm={setFilm}
          setAnswersReturn={setAnswersReturn}
          setNext={setNext}
          reset={reset}
          setPlease={setPlease}
          setColor={setColor}
        />
      ) : null}
      <div className={styles.appAll}>
        <div className={styles.appHeader}>
          <Header
            userId={userId}
            score={score}
            selectedAvatar={selectedAvatar}
          />
        </div>
        <div className={styles.appBody}>
          {film !== null ? (
            <Outlet
              context={[film, reset, userId, setNext, next, timeDifficulty]}
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
              setColor={setColor}
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
          {next === true ? (
            <p
              className={styles.response}
              style={{
                color: getColor(),
              }}
            >
              {film.original_title}
            </p>
          ) : null}
          {please === true && next !== true ? (
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
      <div className={styles.appMenu}>
        <select
          className={styles.dropDownMenu}
          onChange={(e) => handleChangeMode(e)}
        >
          <option value="">--Theme ?--</option>
          <option value="/images">Image</option>
          <option value="/synopsis">Synopsis</option>
        </select>
        <button
          id={styles.buttonBurger}
          type="button"
          onClick={() => setBurger((prevState) => !prevState)}
        >
          ?
        </button>
        {burger === true ? (
          <div className={styles.burgerMenu}>
            <select onChange={(e) => setTimeDifficulty(e.target.value)}>
              <option value="">--difficulty ?--</option>
              <option value="30">easy (30s)</option>
              <option value="20">medium (20s)</option>
              <option value="10">hard (10s)</option>
            </select>
            <select onChange={(e) => handleChangeMode(e)}>
              <option value="">--Theme ?--</option>
              <option value="/images">Image</option>
              <option value="/synopsis">Synopsis</option>
            </select>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
