import PropTypes from "prop-types";
import styles from "./Image.module.css";

export default function Image({ film }) {
  return (
    <div className={styles.imgContainer}>
      <img
        className={styles.appImg}
        src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
        alt="Film a trouver"
      />
      <p className={styles.titleMovie}>{film.title} </p>
    </div>
  );
}

Image.defaultProps = {
  film: { title: "Veuillez attendre votre film" },
};
Image.propTypes = {
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
