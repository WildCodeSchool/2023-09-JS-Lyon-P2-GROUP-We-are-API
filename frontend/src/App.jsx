import "./App.css";
import { useState } from "react";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers";
import Answers from "./components/Answers/Answers";

function App() {
  const movies = {
    title: "Le monde interdit",
  };

  const [answers, setAnswers] = useState("Le monde inrdit");
  const [film, setFilm] = useState(movies);
  const [answersReturn, setAnswersReturn] = useState(0);
  let display = "";
  const [score, setScore] = useState(0);
  if (answersReturn === false) {
    display = <p>please retry</p>;
  }
  return (
    <div>
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
