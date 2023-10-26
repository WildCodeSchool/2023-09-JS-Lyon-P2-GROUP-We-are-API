import "./App.css";
import { useState } from "react";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers";
import Header from "./components/Header/Header";

function App() {
  const [score, setScore] = useState(0);
  const [answer] = useState();
  const [userId] = useState();
  return (
    <div>
      <Header userId={userId} score={score} />
      <LogicAnswers setScore={setScore} answer={answer} score={score} />
    </div>
  );
}

export default App;
