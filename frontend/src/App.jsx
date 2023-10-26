import { useState } from "react";
import styles from "./App.module.css";
import Api from "./components/Api/Api";

function App() {
  const [film, setFilm] = useState();

  return (
    <div className={styles.appBody}>
      <h2>ApiQuizz</h2>
      <Api film={film} setFilm={setFilm} />
    </div>
  );
}

export default App;
