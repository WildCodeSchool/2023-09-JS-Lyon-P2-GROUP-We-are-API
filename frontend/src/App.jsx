import "./App.css";
import { useState } from "react";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers.jsx";
import Answers from "./components/Answers/Answers.jsx";
function App() {
  const movies = {
    adult: false,
    backdrop_path: "/mSbm5ImUlZd029dRkoAGNAi7nKq.jpg",
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        id: 12,
        name: "Aventure",
      },
      {
        id: 14,
        name: "Fantastique",
      },
      {
        id: 878,
        name: "Science-Fiction",
      },
      {
        id: 10770,
        name: "Téléfilm",
      },
    ],
    homepage: "",
    id: 3003,
    imdb_id: "tt0302739",
    original_language: "en",
    original_title: "The Lost World",
    overview:
      "Londres, 1911. Une conférence paléontologique tenue par le professeur Summerlee est interrompue par le professeur Challenger, tout juste rentré d'une expédition en Amérique du Sud. Ce dernier avance l'hypothèse de l'existence de dinosaures vivants quelque part en Amazonie, sur un plateau encore inconnu et inexploré de l'Homme. Malgré la risée de l'assemblée, il fait alors part de son projet d'expédition pour repartir sur place et découvrir ce « monde perdu ».  Se joignent au voyage de Challenger le journaliste Edward Malone, le chasseur Lord John Roxton et le professeur Summerlee lui-même (qui, armé de son esprit critique académique, n'attend qu'une occasion pour prouver la supercherie de son confrère). Le jeune Malone s'embarque surtout pour sa fiancée Gladys, qu'il aimerait à tout prix séduire en lui prouvant sa valeur par un acte héroïque.",
    popularity: 7.23,
    poster_path: "/22PtJeHtI19j15nkQiM561Ng7cH.jpg",
    production_companies: [
      {
        id: 42272,
        logo_path: "/2bAuO4EvS59O1uXZQAKXG0HIXQg.png",
        name: "RTL",
        origin_country: "DE",
      },
      {
        id: 3324,
        logo_path: "/dqT3yOTlfJRmtvk52Ccd1O6dZ0A.png",
        name: "BBC",
        origin_country: "GB",
      },
      {
        id: 18441,
        logo_path: "/rJmXT9sgCKG8uSUO1T93kOTfAzm.png",
        name: "A+E Studios",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "DE",
        name: "Germany",
      },
      {
        iso_3166_1: "GB",
        name: "United Kingdom",
      },
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2001-12-25",
    revenue: 0,
    runtime: 145,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
    ],
    status: "Released",
    tagline: "",
    title: "Le monde interdit",
    video: false,
    vote_average: 5.887,
    vote_count: 63,
  };

  const [answers, setAnswers] = useState("Le monde interdit");
  const [film, setFilm] = useState(movies);
  const [answersReturn, setAnswersReturn] = useState(0);
  let display = "";
  const [score, setScore] = useState(0);
  if (answersReturn === false) {
    display = <p>please retry</p>;
  } else if (answersReturn === true) {
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
