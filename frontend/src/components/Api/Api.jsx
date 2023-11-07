import { useEffect } from "react";
import PropTypes from "prop-types";

function Api({ film, setFilm, setAnswersReturn }) {
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
  }, []);

  return <></>;
}

Api.defaultProps = {
  film: { title: "Veuillez attendre votre film" },
  setAnswersReturn: () => console.log(),
  setFilm: () => console.log(),
};

Api.propTypes = {
  setAnswersReturn: PropTypes.func.isRequired,
  setFilm: PropTypes.func.isRequired,
  film: PropTypes.exact({
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
    adult: PropTypes.bool,
    genre_ids: PropTypes.array,
    id: PropTypes.number,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
};

export default Api;
