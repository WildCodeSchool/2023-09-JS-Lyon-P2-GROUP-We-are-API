import PropTypes from "prop-types";

export default function LogicAnswers({
  film,
  score,
  setAnswersReturn,
  setScore,
  answers,
  setCheck,
  setPlease,
}) {
  if (answers === film.title) {
    setAnswersReturn(true);
    setScore(score + 1);
    setPlease(false);
    // Enregistrer le nouveau score dans le localStorage
    localStorage.setItem("score", (score + 1).toString());
  } else {
    setAnswersReturn(false);
    setPlease(true);
  }
  setCheck(false);
}

LogicAnswers.propTypes = {
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
  score: PropTypes.number.isRequired,
  setAnswersReturn: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  answers: PropTypes.string.isRequired,
  setCheck: PropTypes.func.isRequired,
  setPlease: PropTypes.func.isRequired,
};

LogicAnswers.defaultProps = {
  film: {
    title: "loading",
  },
};
