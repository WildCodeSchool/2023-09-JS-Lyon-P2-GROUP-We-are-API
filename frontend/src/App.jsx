import "./App.css";
import { useState } from "react";
import Api from "./components/Api/Api";

function App() {
  const [film, setFilm] = useState();

  return <Api film={film} setFilm={setFilm} />;
}

export default App;
