import PropTypes from "prop-types";
import styles from "./Image.module.css";
import Timer from "../timer/Timer";

export default function Image({
  film,
  reset,
  userId,
  setNext,
  next,
  timeDifficulty,
}) {
  return (
    <div className={styles.imgContainer}>
      <img
        className={styles.appImg}
        src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
        alt="Film a trouver"
      />
      {reset.current === true && userId !== null && next === false ? (
        <Timer setNext={setNext} timeDifficulty={timeDifficulty} />
      ) : null}
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
  setNext: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  timeDifficulty: PropTypes.number.isRequired,
  reset: PropTypes.exact({
    current: PropTypes.bool.isRequired,
  }),
  userId: PropTypes.func.isRequired,
};
