import "./App.css";
import { useState } from "react";
import Api from "./components/Api/Api";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers";

function App() {
  const [film, setFilm] = useState();

  return (
    <>
      <Api setFilm={setFilm} />;
      <LogicAnswers film={film} />
    </>
  );
}

export default App;
