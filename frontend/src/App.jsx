import "./App.css";
import { useState } from "react";
import Api from "./components/Api/Api";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers";
import Answers from "./components/Answers/Answers";

function App() {
  const [answers, setAnswers] = useState("Le monde interdit");
  const [answersReturn, setAnswersReturn] = useState(0);
  const [film, setFilm] = useState();
  let display = "";
  const [score, setScore] = useState(0);
  if (answersReturn === false) {
    display = <p>please retry</p>;
  }
  return (
    <div>
      <Api film={film} setFilm={setFilm} />;
      <LogicAnswers
        answers={answers}
        film={film}
        setAnswersReturn={setAnswersReturn}
        answersReturn={answersReturn}
        setScore={setScore}
        score={score}
        setFilm={setFilm}
        setAnswers={setAnswers}
      />

      {answersReturn === true ? (
        <Answers setAnswersReturn={setAnswersReturn} />
      ) : (
        display
      )}
    </div>
  );
}

export default App;
