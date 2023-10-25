import propTypes from "prop-types";

export default function LogicAnswers({
  film,
  score,
  setAnswersReturn,
  setScore,
  answers,
}) {
  function check() {
    if (answers === film.title) {
      setAnswersReturn(true);
      setScore(score + 1);
    } else {
      setAnswersReturn(false);
    }
  }

  return (
    <div>
      <button type="button" onClick={() => check()}>
        check
      </button>
    </div>
  );
}

LogicAnswers.propTypes = {
  film: (propTypes.shape = {
    title: propTypes.string.isRequired,
  }),
  score: propTypes.number.isRequired,
  setAnswersReturn: propTypes.func.isRequired,
  setScore: propTypes.func.isRequired,
  answers: propTypes.string.isRequired,
};

LogicAnswers.defaultProps = {
  film: {
    title: "loading",
  },
};
