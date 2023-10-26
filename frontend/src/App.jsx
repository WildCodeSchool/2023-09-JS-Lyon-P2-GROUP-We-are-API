import "./App.css";
import { useState } from "react";
import Api from "./components/Api/Api";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers";
import Answers from "./components/Answers/Answers";
import Image from "./components/Image/Image";

function App() {
  const [answers, setAnswers] = useState("");
  const [answersReturn, setAnswersReturn] = useState(true);
  const [film, setFilm] = useState();
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(false);
  const [please, setPlease] = useState(false);
  return (
    <div>
      {answersReturn === true ? (
        <Api
          film={film}
          setFilm={setFilm}
          setAnswersReturn={setAnswersReturn}
        />
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
      <Answers
        setAnswersReturn={setAnswersReturn}
        answers={answers}
        setAnswers={setAnswers}
        setCheck={setCheck}
      />
      {please === true ? <p>Please retry</p> : null}
    </div>
  );
}

export default App;
