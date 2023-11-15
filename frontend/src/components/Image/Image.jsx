import PropTypes from "prop-types";
import styles from "./Image.module.css";
import Timer from "../timer/Timer";

export default function Image({ film, reset }) {
  return (
    <div className={styles.TimerContainer}>
      <div className={styles.imgContainer}>
        <img
          className={styles.appImg}
          src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
          alt="Film a trouver"
        />
        <div className={styles.Timer}>
          {reset.current === true ? <Timer /> : null}
          <p className={styles.titleMovie}>{film.title} </p>
        </div>
      </div>
    </div>
  );
}

Image.defaultProps = {
  film: { title: "Veuillez attendre votre film" },
  reset: {
    current: "waiting",
  },
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
  reset: PropTypes.exact({
    current: PropTypes.bool.isRequired,
  }),
};
