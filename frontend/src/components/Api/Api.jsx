import ky from "ky";
import { useEffect } from "react";
import PropTypes from "prop-types";

function Api({ film, setFilm }) {
  useEffect(() => {
    const alea = Math.floor(Math.random() * 20);
    const aleaPage = Math.floor(Math.random() * 10 + 1);
    (async () => {
      const parsed = await ky
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=d8bedc0b2557b9f57527c89f46531039&language=fr-FR&page=${aleaPage}&sort_by=revenue.desc`
        )
        .json();
      setFilm(parsed.results[alea]);
    })();
  }, []);

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
        alt="Film a trouver"
      />
      <p>{film.title} </p>
    </>
  );
}

Api.defaultProps = {
  film: { title: "Veuillez attendre votre film" },
};

Api.propTypes = {
  setFilm: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
  }),
};

export default Api;
