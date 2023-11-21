import { useEffect } from "react";
import PropTypes from "prop-types";

function Api({
  setFilm,
  setAnswersReturn,
  setNext,
  reset,
  setPlease,
  setColor,
}) {
  useEffect(() => {
    const aleaPage = Math.floor(Math.random() * 10) + 1; // génère un nombre aléatoire entre 1 et 10 pour choisir aléatoirement une page lors du fetch
    const alea = Math.floor(Math.random() * 19); // génère un nombre aléatoire entre 0 et 19 pour choisir un seul film dans le fichier issu du fetch
    (async () => {
      const movie = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&api_key=d8bedc0b2557b9f57527c89f46531039&language=fr-FR&page=${aleaPage}&sort_by=revenue.desc&with_original_language=en|fr`
      );
      const movieParsed = await movie.json();
      setFilm(movieParsed.results[alea]);
    })();

    setAnswersReturn(false);
    setNext(false);
    setPlease(false);
    setColor(false);
    const element = reset;
    element.current = true;
  }, []);

  Api.propTypes = {
    setAnswersReturn: PropTypes.func.isRequired,
    setColor: PropTypes.func.isRequired,
    setFilm: PropTypes.func.isRequired,
    setPlease: PropTypes.func.isRequired,
    reset: PropTypes.exact({
      current: PropTypes.bool.isRequired,
    }),
  };
}

export default Api;
