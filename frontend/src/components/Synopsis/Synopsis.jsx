import PropTypes from "prop-types";
import Timer from "../timer/Timer";
import styles from "./Synopsis.module.css";

export default function Synopsis({
  film,
  reset,
  userId,
  setNext,
  next,
  timeDifficulty,
}) {
  return (
    <div>
      <p className={styles.synopsisText}>{`${film.overview}`}</p>
      <div>
        {reset.current === true && userId !== null && next === false ? (
          <Timer setNext={setNext} timeDifficulty={timeDifficulty} />
        ) : null}
      </div>
    </div>
  );
}

Synopsis.defaultProps = {
  film: { title: "Veuillez attendre votre film" },
  reset: {
    current: "waiting",
  },
};
Synopsis.propTypes = {
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
  reset: PropTypes.exact({
    current: PropTypes.bool.isRequired,
  }),
  timeDifficulty: PropTypes.string.isRequired,
  userId: PropTypes.func.isRequired,
};
