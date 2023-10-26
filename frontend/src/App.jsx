import "./App.css";
import { useState } from "react";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers";
import Header from "./components/Header/Header";
import UserId from "./components/UserId/UserId";

function App() {
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState();
  const [userId, setUserId] = useState();
  return (
    <div>
      <Header userId={userId} score={score} />
      <LogicAnswers setScore={setScore} answer={answer} score={score} />
    </div>
  );
}

export default App;
