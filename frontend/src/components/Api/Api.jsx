import { useEffect } from "react";
import propTypes from "prop-types";

function Api({ setFilm, setAnswersReturn, setNext }) {
  useEffect(() => {
    const aleaPage = Math.floor(Math.random() * 10) + 1; // génère un nombre aléatoire entre 1 et 10 pour choisir aléatoirement une page lors du fetch
    const alea = Math.floor(Math.random() * 19); // génère un nombre aléatoire entre 0 et 19 pour choisir un seul film dans le fichier issu du fetch
    (async () => {
      const movie = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=d8bedc0b2557b9f57527c89f46531039&language=fr-FR&page=${aleaPage}&sort_by=revenue.desc`
      );
      const movieParsed = await movie.json();
      setFilm(movieParsed.results[alea]);
    })();
    setAnswersReturn(false);
    setNext(false);
  }, []);
}

Api.PropTypes = {
  setAnswersReturn: propTypes.func.isRequired,
  setFilm: propTypes.func.isRequired,
  setNext: propTypes.func.isRequired,
};

export default Api;
